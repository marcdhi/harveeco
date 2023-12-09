import io

import os

from lighthouseweb3 import Lighthouse

from dotenv import load_dotenv

load_dotenv()

LIGHT_HOUSE_API_TOKEN = os.getenv("LIGHT_HOUSE_API_TOKEN")

def initialize_lighthouse():

    lh = Lighthouse(token="LIGHT_HOUSE_API_TOKEN")

    return lh