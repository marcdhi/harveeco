from fastapi import APIRouter, HTTPException, Depends, status
import requests
from schema.farmer_data import FarmerGeoData

router = APIRouter()

@router.get("/")
async def services():
    return {"message": "Hello from the services route!"}


@router.post("/crop_predictions")
async def ml(data: FarmerGeoData):
    service_dict = {}

    with open("data/crop_data.json", "r") as f:
        iot_dict = f.read()

    for i in data.model_dump():
        service_dict[i] = data.model_dump()[i]

    ml_dict = {
        "farmer_data": service_dict,
        "iot_data": iot_dict
    }

    print(ml_dict)



    


    

    