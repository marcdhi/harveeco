from pydantic import BaseModel

class FarmerGeoData(BaseModel):
    rainfall: float
    crop_price: float
    crop: str
    state: str
    month: str

# {"temperature": 23.63, "pressure": 91431.47, "moisture": 0.0, "altitude": 858.33, "name": "Ayush", "area": 1000.0, "state": "Gujarat", "aadhar": "1324567890121314", "crop_price": 400.0}

class LightHouseData(BaseModel):
    temperature: float
    pressure: float
    moisture: float
    altitude: float
    name: str
    area: float
    state: str
    aadhar: str
    crop_price: float
    