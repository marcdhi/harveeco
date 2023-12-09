from fastapi import APIRouter, HTTPException, Depends, status

import pandas as pd

import requests

import json

from schema.farmer_data import FarmerGeoData

from logic.CropsFinal import infer

from logic.optimiseLandArea import allocate_optimal_land

from logic.prophet import forecasted_prediction, forecasted_rainfall

from logic.findNutrients import value_k, value_n, value_p

router = APIRouter()

@router.get("/")
async def services():
    return {"message": "Hello from the services route!"}


@router.post("/crop_predictions")
async def ml(data: FarmerGeoData):
    service_dict = {}

    with open("data/crop_data.json", "r") as f:
        iot_dict = json.loads(f.read())

    for i in data.model_dump():
        service_dict[i] = data.model_dump()[i]

    ml_dict = {
        'farmer_data': service_dict,
        'iot_data': iot_dict
    }

    print(ml_dict)

    temperature = ml_dict['iot_data']["temperature"]

    pressure = ml_dict['iot_data']["pressure"]

    moisture = ml_dict['iot_data']["moisture"]

    altitude = ml_dict['iot_data']["altitude"]

    location = ml_dict['farmer_data']["state"]

    crop_price = ml_dict['farmer_data']["crop_price"]

    crop = ml_dict['farmer_data']["crop"]

    humidity = (moisture * 0.02) / 100

    df = pd.read_csv("data/rainfall.csv")

    rainfall_array = forecasted_rainfall(df, 365*6)

    month_vs_index = {
        'Jan': 0,
        'Feb': 1,
        'Mar': 2,
        'Apr': 3,
        'May': 4,
        'Jun': 5,
        'Jul': 6,
        'Aug': 7,
        'Sep': 8,
        'Oct': 9,
        'Nov': 10,
        'Dec': 11
    }

    rainfall = rainfall_array[month_vs_index[ml_dict['farmer_data']["month"]]]

    N = value_n(location)
    P = value_p(location)
    K = value_k(location)

    input_data = (N, P, K, temperature, humidity, 6.012, rainfall, crop_price)

    print(input_data)

    list, x = infer(input_data)

    print(list)

    allocate_optimal_land()

    

    

    





    


    

    