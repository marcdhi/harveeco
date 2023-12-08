#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Wire.h>

// WIFI Creadentials
const char* ssid = "OnePlus Nord CE 3 Lite 5G";
const char* password = "<password>";


// Server Details
const char* serverName = "http://e297-14-195-9-98.ngrok-free.app/crop_iot";


void setup() {
  Serial.begin(9600);
  Wire.begin(0x12);
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
  
  // Set Event Handler for the I2C connection
  // Wire.onRequest(requestEvent); 
}

void loop() {
// Send Post Request at specified time intervals    
  //Check WiFi connection status
  if(WiFi.status()== WL_CONNECTED){
    WiFiClient client;
    HTTPClient http;
    // initiate http instance
    http.begin(client, serverName);

    http.addHeader("Content-Type", "application/json");
    // String json_data = String("{\"Data\":\"Temperature\",\"sensor_name\":\"") + sensor_name + String("\",\"location\":\"") + location + String("\",\"temp\":\"") + temp +String("\",\"type\":\"") + type+String("\",\"user\":\"") + user +String("\"}");
    String json_data = String("{\"temperature\":\"") + 12.5 + String("\",\"pressure\":\"") + 94865.22 + String("\",\"moisture\":\"") + 200;
    int httpResponseCode = http.POST(json_data);
    // int httpCode = http.GET();
    Serial.print("HTTP Response code: ");
    Serial.println(httpResponseCode);
    
    // Terminate http instance
    http.end();
  }
  else {
    Serial.println("WiFi Disconnected");
  }
  delay(5000);
}