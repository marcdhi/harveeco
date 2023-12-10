#include <Wire.h>
#include <Adafruit_BMP280.h>
#include "MAX30105.h"
#include "heartRate.h"

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

void setup() {
  // Initialize Serial Communication
  Serial.begin(9600);

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
}

void loop() {

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
    Serial.print("BPM=");
    Serial.print(beatsPerMinute);
    Serial.print("\t");
    Serial.print("Avg BPM=");
    Serial.print(beatAvg);
    Serial.print("\t");
    
    if (irValue < 50000)
      Serial.print(" No finger?");
    Serial.println();
    
    String temperatureStr = String(temperature);
    String pressureStr = String(pressure);
    String altitudeStr = String(altitude);
    String data = temperatureStr + "/" + pressureStr + "/" + altitudeStr;
    const char* dataBuffer = data.c_str();
    Wire.beginTransmission(SlaveNode);
    Wire.write((const uint8_t*)dataBuffer, strlen(dataBuffer));
    Wire.endTransmission();
 
    globalLastUpdate = millis();
  }
}
