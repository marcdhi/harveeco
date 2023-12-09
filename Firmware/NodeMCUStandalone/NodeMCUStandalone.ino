#include <Wire.h>
#include <Adafruit_BMP280.h>
#include "MAX30105.h"
#include "heartRate.h"

#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

MAX30105 oxySensor;
Adafruit_BMP280 bmp;

// Constants and Variables
const byte RATE_SIZE = 4; //averaging
byte rates[RATE_SIZE]; 
byte rateSpot = 0;
long lastBeat = 0;

const int16_t SlaveNode = 0x12;

float beatsPerMinute;
int beatAvg;

long globalLastUpdate = millis();
int updateInterval = 5000;

int moisture = 250;

// Wifi Creds
const char* ssid = "OnePlus Nord CE 3 Lite 5G";
const char* password = "";

// Endpoints
const char* serverName = "http://192.168.158.28:8000/crop_iot";

void setup() {
  // Initialize Serial Communication
  Serial.begin(9600);

  // Moisture Sensor
  pinMode(A0,INPUT);

  // Initialize BMP280
  bmp.begin(BMP280_ADDRESS_ALT, BMP280_CHIPID);
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     
                  Adafruit_BMP280::SAMPLING_X2,     
                  Adafruit_BMP280::SAMPLING_X16,    
                  Adafruit_BMP280::FILTER_X16,      
                  Adafruit_BMP280::STANDBY_MS_500); 

  // Initialize MAX30100 Pulse Oxymeter
  oxySensor.begin(Wire, I2C_SPEED_FAST);
  // Configure sensor with default settings
  oxySensor.setup();
  oxySensor.setPulseAmplitudeRed(0x0A);
  oxySensor.setPulseAmplitudeGreen(0); 

  // Initialize Wifi Connection
  WiFi.begin(ssid, password);
  Serial.println("Connecting");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP()); 
}

void loop() {
  // Get Readings from Moisture Sensor 
  int raw_moisture = analogRead(A0);
  moisture = map(raw_moisture,10,700,0,255);
  if (moisture <= 0) moisture = 255;

  // Get readings from BMP280
  float temperature = bmp.readTemperature();
  float pressure = bmp.readPressure();
  float altitude = bmp.readAltitude();

  // Get Heartrate data from MAX30100 
  long irValue = oxySensor.getIR();
  if (checkForBeat(irValue) == true)
  {
    long delta = millis() - lastBeat;
    lastBeat = millis();

    beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20)
    {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;
      //Take average of readings
      beatAvg = 0;
      for (byte x = 0 ; x < RATE_SIZE ; x++)
        beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
  }
  if((millis()-globalLastUpdate) >= updateInterval){
    Serial.print(temperature);
    Serial.print("\t");
    Serial.print(pressure);
    Serial.print("\t");
    Serial.print(altitude);
    Serial.print("\t");
    Serial.print(moisture);
    Serial.print("\t");
    Serial.print("BPM=");
    Serial.print(beatsPerMinute);
    Serial.print("\t");
    Serial.print("Avg BPM=");
    Serial.print(beatAvg);
    Serial.print("\t");
    
    if (irValue < 50000)
      Serial.print(" No finger?");
    Serial.println();
    
    //Check WiFi connection status
  if(WiFi.status()== WL_CONNECTED){
    WiFiClient client;
    HTTPClient http;
    // initiate http instance
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    String json_data = String("{\"temperature\":\"") + temperature + String("\",\"pressure\":\"") + pressure + String("\",\"moisture\":\"") + moisture + String("\",\"altitude\":\"") + altitude + String("\"}");
    int httpCode = http.POST(json_data);
    // int httpCode = http.GET();
    Serial.print("HTTP Response code: ");
    Serial.println(httpCode);
    
    // Terminate http instance
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }
  globalLastUpdate = millis();
  }
}
