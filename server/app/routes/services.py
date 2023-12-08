from fastapi import APIRouter, HTTPException, Depends, status

from schema.iot_data import CropData

router = APIRouter()

@router.get("/")
async def services():
    return {"message": "Hello from the services route!"}


@router.post("/crop_predictions")
async def iot(data: CropData):
    
    print(data)

    return "Success!"

    