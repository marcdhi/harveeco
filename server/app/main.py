# FastAPI Library Imports
import os
from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
from datetime import date
from fastapi.middleware.cors import CORSMiddleware

from routes import iot
from routes import services

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include your API routers here
app.include_router(iot.router, prefix="", tags=["iot"])
app.include_router(services.router, prefix="", tags=["services"])

@app.get("/")
async def main():
    return {"message": "Server is running!"}

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)