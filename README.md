# node-api-postgres


APIs for Postgres DB of Wireless Network Sensors (WSN) Crossbow Mote works applications to enable any IoT applications to query data and work on it.

Crossbow IRIS moteworks
-----------------------
Memsic (formerly Crossbow)

1- Crossbow IRIS Sensor Nodes

- Radio communication on 2.4-2.48GHz ISM band, IEEE 802.15.4 compliant.
- 250kbps data rate.
- Range up to 50m indoors and 500m outdoors.
- Atmel ATmega1281 based.
- 128KB program flash, 512KB measurement flash, 8KB RAM.

2- MIB520 USB Gateway

- USB programming for IRIS and other sensor nodes.
- USB bus power.
- Usable as for base station purposes.

3- MDA100CB Sensor Board

- Light sensor: CdSe photocell
- Temperature sensor: YSI 44006 thermistor
- Prototyping area: For connecting further sensors and devices

OS: TinyOS

- It is written in the programming language nesC similar to c code
- free and open-source software 

Communication: ZigBee

- Used to create personal area networks with small, low-power digital radios, such as for home automation, medical device data collection, and other low-power low-bandwidth needs, designed for small scale projects -This technology also has a low-channel bandwidth of 1MHz. 
- It’s restricted to wireless personal area networks (WPAN) and reaches an average of 10 to 30 meters for usual applications. ZigBee’s data transfer speed is lower than WiFi’s, too. Its maximum speed is just 250kbps, much lower than the lowest speed WiFi offers.
- It’s a mesh networking standard, meaning each node in the network is connected to each other

More works are connected directly to the PC and send data to PostgreDB to connect it to other platforms. we use APIs

APIs with Node.js connected to Postgres DB of WSN 

The list of APIS: 
- /ConnectedNodes  -> to get number of connected nodes
- /node/{id}       -> to get readings from specific node
- /latest          -> get latest 10 readings
- /list/{id}       -> to list all readings of specific node
- /clear           -> clear all table
