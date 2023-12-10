<div align="center">
  
<img src="./harveeco_logo.png" alt="harveeco" border="1" width="100"/>

  <p align="center">
    Empowering farmers with comprehensive solutions
  </p>
</div>

## Table of Contents

1. [Project Idea](#project-idea)
2. [Our Approach](#our-approach)
3. [Challenges We Faced](#challenges-we-faced)
4. [Technologies We Used](#technologies-we-used)
5. [Network Diagram](#network-diagram-and-schematics)
6. [Installation and Setup Guide](#installation-and-setup-guide)
7. [Team Members](#team-members)

## Project Idea

Harveeco aims to improve the lives of Indian farmers by leveraging the transformative power of blockchain technology, machine learning, and the Internet of Things (IoT). By integrating these technologies, we can create a more transparent, efficient, and profitable agricultural ecosystem for Indian farmers.

Indian farmers face numerous challenges that significantly impact their livelihood and well-being. These include:

* Unpredictable crop yields: Due to limited access to accurate information about weather patterns, soil conditions, and optimal crop selection, farmers often experience unpredictable and inconsistent yields. This leads to financial instability and vulnerabilities.
  
* Exploitative market practices: Middlemen and intermediaries often exploit the lack of market access and information asymmetry, leading to unfair pricing and a significant share of farmers' profits being siphoned off. This results in low income and hinders economic development in rural communities.

* Inefficient resource utilization: Traditional practices often lead to over-utilization of resources like water and fertilizers, contributing to environmental degradation and unsustainable agricultural practices.

* Limited access to finance and resources: Many farmers struggle to access financial resources and essential inputs like quality seeds, fertilizers, and technology, further hindering their productivity and profitability.
  
## Our Approach
* Data Gathering with NodeMCU: Our project utilizes NodeMCU microcontrollers equipped with various sensors to collect real-time data from the environment. These sensors capture temperature, pressure, altitude, and moisture levels, providing crucial insights into the agricultural conditions. The collected data undergoes rigorous processing to ensure accurate and calibrated readings.
  
* Data Storage on Lighthouse: The processed data is securely stored on the Lighthouse network, a decentralized storage platform built on blockchain technology. This ensures data integrity and immutability, preventing any tampering or manipulation.
  
* ML-powered Predictions: The stored data is then analyzed by powerful machine learning algorithms. These algorithms identify patterns and predict future trends, enabling farmers to make informed decisions about their crops and optimize resource utilization. This predictive analysis helps farmers maximize yields, minimize losses, and improve overall efficiency.

* Enhanced Transparency with ZKML: Our project utilizes Zero-Knowledge Machine Learning (ZKML) to further enhance transparency and trust in our predictions. ZKML enables us to verify the correctness of model predictions without revealing the underlying model itself.
  
## Challenges We Faced
Developing a project that comprises Blockchain, Machine Learning and the Internet Of Things does pose a challenge when integrating all three. Following are the challenges we faced:

Blockchain:

- Scalability: Managing the high volume of data generated by sensors on the blockchain network required careful design and optimization. This involved exploring various consensus mechanisms and sharding techniques to ensure the network could handle the data load without compromising performance.

- Security: Ensuring data integrity and immutability on the blockchain was paramount. We implemented robust cryptographic protocols and access control mechanisms to prevent unauthorized access and data manipulation.

- Interoperability: Integrating the blockchain platform with other components of the system required overcoming technical hurdles related to data formats and communication protocols. This involved developing custom interfaces and adapters to ensure smooth data exchange between different technologies.

Machine Learning:

- Data Preprocessing: Preparing the raw sensor data for accurate machine learning model training was a complex task. This involved data cleaning, normalization, and feature engineering to ensure the model could extract meaningful insights from the data.

- Model Selection and Optimization: Identifying the best machine learning algorithms for our specific use case and optimizing their hyperparameters was crucial for achieving accurate predictions. We experimented with various algorithms and techniques like cross-validation to find the optimal configuration for our model.

- Explainability: Ensuring transparency and understanding of the model's predictions was essential for building trust with farmers. We implemented various explainability techniques like SHAP (SHapley Additive exPlanations) to help farmers understand the rationale behind the predictions.

IoT:

- Sensor Calibration: Accurately calibrating the sensors to obtain reliable and consistent data was critical for generating accurate predictions. This involved careful selection of sensor hardware, calibration procedures, and error correction techniques.

- Wireless Communication: Establishing stable and reliable wireless communication between sensors and the central server was crucial for real-time data transmission. We explored various communication protocols like LoRaWAN and NB-IoT to ensure data delivery with minimal latency and packet loss.

- Security: Protecting the network and data from potential cyberattacks was paramount. We implemented robust security measures like firewalls, encryption, and access control mechanisms to safeguard the system.

## Additional Challenges:

* Integrating ZKML for verifying predictions and enhancing transparency presented additional challenges related to computational overhead and model complexity.
  
* Developing a user-friendly platform for both farmers and Web3 users required careful design and consideration of user experience.
  
* Encouraging farmer participation and ensuring data privacy required implementing robust incentive mechanisms and data governance protocols.

## Technologies We Used

* ![Nextjs](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
* ![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white)
* ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white)
* ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
* ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)
* ![ESP8266](https://img.shields.io/badge/-ESP8266-00979D?style=for-the-badge&logo=Arduino&logoColor=white)
* ![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
* ![Filecoin](https://img.shields.io/badge/Filecoin-%2300599C.svg?style=for-the-badge&logoColor=white)
* ![Push Protocol](https://img.shields.io/badge/Push%20Protocol-%2300599C.svg?style=for-the-badge&logoColor=pink)
* ![1Inch](https://img.shields.io/badge/1Inch-%2300599C.svg?style=for-the-badge&logoColor=white)
  

## Network Diagram And Schematics
- Network Diagram

 ![blockchain drawio (1) (1)](https://github.com/marcdhi/harveeco/assets/95867745/c8e4cbcb-93a2-4850-8d1a-4f474539f670)


- ML Model

  ![WhatsApp Image 2023-12-10 at 03 25 28_86dd4f07](https://github.com/marcdhi/harveeco/assets/95867745/1ab1f743-b0ea-4bb1-bfbc-2bd73fb4eefc)

- IOT Schematic

![NodeMCU drawio](https://github.com/marcdhi/harveeco/assets/95867745/44cc038d-3acc-4481-a282-96d610caaa6e)

## Installation and Setup Guide
- Server
- Client
- IOT
    - For IOT Firmware Setup and Installation refer to [IOT Guide](https://github.com/marcdhi/harveeco/tree/main/Firmware#nodemcu---esp8266-firmware)


## Team Members
**Team: LossPerEpoch**
- [Shubham Rasal](https://devfolio.co/@bluequbits)
- [Hriday Mehta](https://devfolio.co/@outkast)
- [Vedant Tarale](https://devfolio.co/@vedant_tarale)
- [Ayush Kumar Singh](https://devfolio.co/@Ayush4345)
- [Mardav Gandhi](https://devfolio.co/@marcdhi)
