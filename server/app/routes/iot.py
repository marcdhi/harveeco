import os

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

    crop_data_folder = "data"

    model_file_path = os.path.join(os.getcwd(), "ml_models", "crop_model_final.sav")

    create_folder_if_not_exists(crop_data_folder)

    print(data)

    json_data = data.model_dump()

    json_to_file(json_data, "data/crop_data.json")

    initialize_lighthouse("data/crop_data.json", "upload")

    return "Lesss gooo"

    # list, x = infer()

    # allocate_optimal_land()

    # print(list)




    