import io

import os

from lighthouseweb3 import Lighthouse

from dotenv import load_dotenv

load_dotenv()

LIGHTHOUSE_TOKEN = os.getenv("LIGHTHOUSE_TOKEN")

def initialize_lighthouse(file_path, method):

    lh = Lighthouse()

    if method == "upload":
            
            response = lh.upload(file_path)

            print(response)
    