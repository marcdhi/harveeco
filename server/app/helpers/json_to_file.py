import json

def json_to_file(data: dict, filename: str):

    with open(filename, 'w') as outfile:
        
        json.dump(data, outfile)