
~ Use the git link to download the codes
~ Use git install to install all the required packeges
~ Create an account at home.openweathermap.org and copy your api keys.
~ Create a .env and set your ports and api_keys
~ Run npm run dev for development
~ Run npm start for production

~ Set your environment variable {longitute and latitude for current location and enable/accept it in your browser}
PORT = "####"
API_KEY = "90270b49*******************"
LONG = "00.00
LATI = "00.00"

~Setup postgres enviroment and add this tablle with feilds

CREATE TABLE incidents(
ID SERIAL PRIMARY KEY,
client_id INT,
incident_desc VARCHAR,
city VARCHAR,
country VARCHAR,
dates VARCHAR,
weather_project VARCHAR
);
