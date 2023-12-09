from fastapi import APIRouter, HTTPException, Depends, status

import pandas as pd

import requests

import json

from schema.farmer_data import FarmerGeoData, LightHouseData

from logic.CropsFinal import infer

from logic.optimiseLandArea import allocate_optimal_land

from logic.prophet import forecasted_prediction, forecasted_rainfall

from logic.findNutrients import value_k, value_n, value_p

router = APIRouter()

@router.get("/")
async def services():
    return {"message": "Hello from the services route!"}


@router.post("/crop_predictions")
async def ml(data: LightHouseData):
    service_dict = {}

    # with open("data/crop_data.json", "r") as f:
    #     iot_dict = json.loads(f.read())

    for i in data.model_dump():
        service_dict[i] = data.model_dump()[i]

    # ml_dict = {
    #     'farmer_data': service_dict,
    #     'iot_data': iot_dict
    # }

    # print(service_dict)

    temperature = service_dict['data']["temperature"]

    pressure = service_dict['data']["pressure"]

    moisture = service_dict['data']["moisture"]

    altitude = service_dict['data']["altitude"]

    location = service_dict['data']["state"]

    crop_price = service_dict['data']["crop_price"]

    crop = service_dict['data']["crop"]

    month = service_dict['data']["month"]

    humidity = (moisture * 0.02) / 100

    df = pd.read_csv("data/rainfall.csv")


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

    rainfall_array = forecasted_rainfall(location, month)

    rainfall = rainfall_array[month_vs_index[service_dict['data']["month"]]]

    N = value_n(location)
    P = value_p(location)
    K = value_k(location)

    input_data = (N, P, K, temperature, humidity, 6.012, rainfall, crop_price)

    print(input_data)

    list, x = infer(input_data)

    print(list)

    # allocate_optimal_land()

    

    

    





    


    

    