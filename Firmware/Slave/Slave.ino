#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>
#include <Wire.h>

// WIFI Creadentials
const char* ssid = "OnePlus Nord CE 3 Lite 5G";
const char* password = "";


// Server Details
const char* serverName = "http://192.168.158.214:8000/crop_iot";


void setup() {
  Serial.begin(9600);

  // Initialize Slave I2C with 0x12 Address
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
  Wire.onRequest(requestHandler); 
}

void loop() {
  // Check WiFi connection status
  if(WiFi.status()== WL_CONNECTED){
    WiFiClient client;
    HTTPClient http;
    // initiate http instance
    http.begin(client, serverName);
    http.addHeader("Content-Type", "application/json");
    String json_data = String("{\"temperature\":\"") + 12.5 + String("\",\"pressure\":\"") + 94865.22 + String("\",\"moisture\":\"") + 200 + String("\"}");
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
}

void requestHandler(){
  String data = "";
  while(Wire.available()>0){
    char c = Wire.read();
    data += c;
  }
  Serial.println(data);
}