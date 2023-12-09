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

    print(data)

    service_dict = {}

    for i in data.model_dump():
        service_dict[i] = data.model_dump()[i]


    temperature = service_dict["temperature"]

    pressure = service_dict["pressure"]

    moisture = service_dict["moisture"]

    altitude = service_dict["altitude"]

    location = service_dict["state"]

    crop_price = service_dict["crop_price"]

    month = service_dict["month"]

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

    rainfall = rainfall_array[month_vs_index[service_dict["month"]]]

    N = value_n(location)
    P = value_p(location)
    K = value_k(location)

    input_data = (N, P, K, temperature, humidity, 6.012, rainfall, crop_price)

    print(input_data)

    list, x = infer(input_data)

    print(list)

    convert_list_to_json = json.dumps(list)

    # allocate_optimal_land(crop_price)

    return {"data": convert_list_to_json}


    

    

    





    


    

    