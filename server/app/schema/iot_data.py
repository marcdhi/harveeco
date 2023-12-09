from pydantic import BaseModel

class CropData(BaseModel):
    temperature: str
    pressure: str
    moisture: int
    # heart_rate_curr: int
    # heart_rate_avg: int
    # spo2_avg: int