from pydantic import BaseModel

class FarmerGeoData(BaseModel):
    rainfall: float
    crop_price: float
    crop: str
    state: str
    month: str