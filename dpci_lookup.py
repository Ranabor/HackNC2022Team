import requests
import json

def dpci_title_lookup(dpci: str) -> str:
  # set up the request parameters
  params = {
    'api_key': '6C7B23038BF54E3AAB67F70E03EBBA13',
    'type': 'product',
    'dpci': dpci
  }
  # make the http GET request to RedCircle API
  api_result = requests.get('https://api.redcircleapi.com/request', params)
  return api_result.json()["product"]["title"]
  # print the JSON response for price