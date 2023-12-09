from pydantic import BaseModel

class CropData(BaseModel):
    temperature: float
    pressure: float
    moisture: float
    altitude: float
    # heart_rate_curr: int
    # heart_rate_avg: int
    # spo2_avg: int