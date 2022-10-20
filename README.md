

In order to move forward with your application, kindly complete the assessment below as the next step of the hiring process, this step is a take-home coding challenge.

Test Scope: Incident reporting.
As part of this test, you are tasked to create endpoints to submit and list incident reports for insurance clients.

The required working flow:
A POST endpoint that receives the incident report.
The report should have the following data :
{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string }
The endpoint receives the report, adds weather data and stores it in a table “incidents”.
The weather report should be fetched from the API service of https://openweathermap.org/current
The stored object should be then as follow :
{ “client_id”: number, “incident_desc: string, “city”: string, “country”: string, “date”: date, “weather_report”: object }
A GET endpoint that lists all the incidents.
The required stack :
NodeJS and express.
PostgreSQL.
How to submit?
Setup the local environment conforming to the requirements.
Code, run and test in your local environment.Once confident the result is as per the test requirement, push to a GitHub repository and reply to this email with a link to the repo.
Bonus points if you also send a live url for the apiHow your work will be evaluated?
Special attention will be given to the code quality, error handling, and modules choice.Good luck ;) 
openweathermap.orgopenweathermap.org
Current weather data - OpenWeatherMap
Access current weather data for any location on Earth. We collect and process weather data from different sources such as global and local weather models, satellites, radars and a vast network of weather stations. Data is available in JSON, XML, or HTML format

PLEASE NOTE: Deadline for this is Friday 20th October, 2022 at 4:00PM prompt.

Thank you


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