# App published

To run this app in any device, please download Expo Go app from the Google PlayStore on Android or AppStore on iOS.

Scan the following QR Code:

## Using docker-compose

Go into the docker-compose.yaml file, uncomment the variable REACT_NATIVE_PACKAGER_HOSTNAME and change its value to your local machine's IP address (the phone must be connected to the same network).

## Using yarn and expo

Make sure to have installed yarn. In a new command-line, go into the zemoga-mobile-react-dev-test/ folder and run
yarn install
Then run
yarn start
