import os

import json

import joblib

from fastapi import APIRouter, HTTPException, Depends, status

from schema.iot_data import CropData

from db.lighthouse import initialize_lighthouse

from helpers.json_to_file import json_to_file

from helpers.create_delete_folders import create_folder_if_not_exists, delete_folder_if_exists

from logic.CropsFinal import infer

from logic.optimiseLandArea import allocate_optimal_land

router = APIRouter()

from dotenv import load_dotenv

import datetime

load_dotenv()

iot_dict = {}

@router.get("/iot")
async def iot():
    return "Hello from the iot route!"


@router.post("/crop_iot")
async def iot(data: CropData):

    month = datetime.datetime.now().month

    month_to_index = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "Jun",
        7: "Jul",
        8: "Aug",
        9: "Sept",
        10: "Oct",
        11: "Nov",
        12: "Dec"
    }

    crop_data_folder = "data"

    model_file_path = os.path.join(os.getcwd(), "ml_models", "crop_model_final.sav")

    create_folder_if_not_exists(crop_data_folder)

    print(data)

    new_data = {
        "temperature": data.temperature,
        "pressure": data.pressure,
        "moisture": data.moisture,
        "altitude": data.altitude,
        "name": data.name,
        "area": data.area,
        "state": data.state,
        "aadhar": data.aadhar,
        "crop_price": data.crop_price,
        "month": month_to_index[month]
    }

    dict_to_json = json.dumps(new_data)

    json_to_file(dict_to_json, "data/crop_data.json")

    initialize_lighthouse("data/crop_data.json", "upload")

    




    