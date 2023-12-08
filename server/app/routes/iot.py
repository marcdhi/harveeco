from fastapi import APIRouter, HTTPException, Depends, status

from schema.iot_data import CropData

from db.lighthouse import initialize_lighthouse

from helpers.json_to_file import json_to_file

from helpers.create_delete_folders import create_folder_if_not_exists, delete_folder_if_exists

router = APIRouter()

@router.get("/iot")
async def iot():
    return {"message": "IoT Sensors work!"}


@router.post("/crop_iot")
async def iot(data: CropData):

    crop_data_folder = "data"

    create_folder_if_not_exists(crop_data_folder)

    # lighthouse = initialize_lighthouse()

    print(data)

    json_data = {
        "temperature": data.temperature,
        "pressure": data.pressure,
        "moisture": data.moisture
    }

    json_to_file(json_data, "data/crop_data.json")
    
    return "Success!"

    