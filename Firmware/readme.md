# NodeMCU - ESP8266 Firmware
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-code">About The Code</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#schematic">Schematic</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#further-developement-plans">Developement Plans</a></li>
  </ol>
</details>

## About The Code
`NodeMCUStandalone.ino`

The Code revolves around the WiFi capabilities of the `ESP8266 module`.
The module serves as a client and `POST`s data to a backend server.

Data is gathered from the following Sensors:
- BMP280 - Atmospheric Pressure, Temperature and Altitude
- MAX30100 - Heart Rate (**Note:** This reading is not currently used for any computation - couldn't be implemented due to time constraints)
- Soil Moisture Sensor - A value corresponding to soil moisture

The interaction between ESP8266, BMP280, and MAX30100 is facilitated by the `I2C communication` protocol which also provides a scope for further expansion in the diversity and number of sensor interactions

The code also features a control logic for the 16x2 LDC display which provides the user with the values being transmitted to the backend server and other useful data
### Built With
The following components and technologies were used:
- ESP8266 module
- BMP280
- MAX30100
- C++ programming
- I2C communicaiton Protocol

### Schematic
![NodeMCU drawio](https://github.com/marcdhi/harveeco/assets/95867745/05eb248f-58e3-4cce-93ff-5b6b4d1b5f3d)

## Getting Started
### Prerequisites
- [Arduino IDE](https://www.arduino.cc/en/software)
- [ESP8266 board manager](https://arduino.esp8266.com/stable/package_esp8266com_index.json)

### Installation
- Add the ESP8266 Board Manager link in the `Additional Boards Manager URLs` field under File > Preferences > Settings

## Usage
- Replace the SSID and password with the appropriate credentials for the network you want to connect to
    ```cpp
    // Wifi Creds
    const char* ssid = "<SSID>";
    const char* password = "<password>";
    ```
- Add the endpoints as required, the current implementation supports **HTTP** only
    ```cpp
    // Endpoints
    const char* serverName = "http://<BaseURL>/<path/query params>";
    ```
- Modify the updateInterval to a suitable value
    ```cpp
    int updateInterval = 10000;  //10 secs
    ```
- Select the appropriate COMM Port and Device, then the code can be flashed

## Further Development Plans
- Due to the time constraint certain parameters have been hardcoded. A keypad input can be taken to initialize these values
- In continuation with the above point thresholds can also be customised either via physical inputs or via a web interface
- `10Bit I2C addressing` allows for upto `1024 devices` on the same I2C line. This opens up swarm implementations and physically distributed implementations.
