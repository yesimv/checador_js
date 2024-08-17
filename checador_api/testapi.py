import requests
import argparse

def test_api(endpoint, data=None, headers=None):
    url = f"http://localhost/{endpoint}"
    
    if data:
        response = requests.post(url, data=data, headers=headers)
    else:
        response = requests.get(url, headers=headers)

    return response

def main():
    parser = argparse.ArgumentParser(description='Test the API located in checador_api.')
    parser.add_argument('endpoint', type=str, help='API endpoint to test, relative to api.php (e.g., api.php?id_empleado=1)')
    parser.add_argument('--data', type=str, help='Data to send in POST request (e.g., "key1=value1&key2=value2")')
    parser.add_argument('--headers', type=str, help='Optional headers for the request in JSON format')

    args = parser.parse_args()

    headers = None
    if args.headers:
        import json
        headers = json.loads(args.headers)
    
    response = test_api(args.endpoint, data=args.data, headers=headers)

    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")

if __name__ == "__main__":
    main()
