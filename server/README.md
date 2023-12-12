# Server Guide

## Installation

1. Navigate to the `server` directory using `cd server`.
   
2. For the very first installation, run the command `python -m venv venv` ( **NOTE** : Skip this step if you have already done this, and are able to see `venv` folder in the project folder)
   
3. Activate the server by executing:
   
  * When using Git Bash : `source venv/Scripts/activate` (Note: This command may or may not work for you; please refer to Stack Overflow for system-specific configurations.)

  * Using VS Code or Mac : `source venv/bin/activate`

4. Install the required dependencies with: `pip install -r requirements.txt`

5. Navigate to the `app` directory and run `uvicorn main:app --port 8000 --host 0.0.0.0 --reload` to activate the server

