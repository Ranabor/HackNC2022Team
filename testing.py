import requests
import json

# set up the request parameters
params = {
  'api_key': 'demo',
  'type': 'product',
  'tcin': '78025470'
}

# make the http GET request to RedCircle API
api_result = requests.get('https://api.redcircleapi.com/request', params)

# print the JSON response from RedCircle API
print(json.dumps(api_result.json()))