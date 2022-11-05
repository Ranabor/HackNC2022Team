import requests
import json

# set up the request parameters
params = {
  'api_key': '6C7B23038BF54E3AAB67F70E03EBBA13',
  'type': 'product',
  'dpci': '071180218'
}

# make the http GET request to RedCircle API
api_result = requests.get('https://api.redcircleapi.com/request', params)

# print the JSON response for price
#print(json.dumps(api_result.json()["product"]["buybox_winner"]["price"]["value"]))
print(api_result.json()["product"]["buybox_winner"]["price"]["value"])