from pydantic import BaseModel

class FarmerGeoData(BaseModel):
    location: str
    rainfall: float
    crop_price: float
    state: str