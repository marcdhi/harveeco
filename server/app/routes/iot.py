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

load_dotenv()

@router.get("/iot")
async def iot():
    return {"message": "IoT Sensors work!"}


@router.post("/crop_iot")
async def iot(data: CropData):

    crop_data_folder = "data"

    model_file_path = os.path.join(os.getcwd(), "ml_models", "crop_model_final.sav")

    create_folder_if_not_exists(crop_data_folder)

    # lighthouse = initialize_lighthouse()

    print(data)

    json_data = {
        "temperature": data.temperature,
        "pressure": data.pressure,
        "moisture": data.moisture
    }

    json_to_file(json_data, "data/crop_data.json")

    # file_path = os.path.join(os.getcwd(), crop_data_folder, "crop_data.json")

    # upload = lighthouse.upload(source=file_path)

    # response = lighthouse.uploadText()

    list, x = infer()

    allocate_optimal_land()

    print(list)



    print("Uploaded!")


    return "Success!"

    