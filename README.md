# Download and run this app

**To run this app in any device, please download the Expo Go app from the Google PlayStore on Android or AppStore on iOS.**

Then scan the following QR Code:

![expo-go](https://user-images.githubusercontent.com/66321988/218197457-68ebb014-5423-4b38-830e-0bd7c02b346f.svg | width=100)

Or, open this link in your device:

[exp://exp.host/@nico99/zemoga-mobile-dev-react-test?release-channel=default](exp://exp.host/@nico99/zemoga-mobile-dev-react-test?release-channel=default)

The published project can be found at:

[https://expo.dev/@nico99/zemoga-mobile-dev-react-test?serviceType=classiic&distribution=expo-go](https://expo.dev/@nico99/zemoga-mobile-dev-react-test?serviceType=classiic&distribution=expo-go)

# Run this project

To open this project, is highly recommended to use Visual Code, as the project has settings for eslint, prettier format and typescript.

## Using docker-compose

Make sure to have installed Docker and Docker Compose in your machine.

Go into the docker-compose.yaml file, uncomment the variable REACT_NATIVE_PACKAGER_HOSTNAME and change its value to your local machine's IP address (the phone must be connected to the same network).

Save the changes and run in a new command-line

#### `docker-compose build`

Wait for it to build and then run

#### `docker-compose up`

A QR code will appear in the console. Scan it in your device and the app will build with Expo Go. Also you can enter manually the link provided to open the Metro Bundler, which should be something as *exp://<LOCAL_IP>:19000*.

With Docker the changes made in the code may not be reflected in the app. To see the changes in the code, run ```docker-compose down``` and start the project again with ```docker-compose up```

## Using yarn and expo

Make sure to have installed yarn. In a new command-line, go into the ```zemoga-mobile-react-dev-test/``` folder and run
#### ```yarn install```
Then run
#### ```yarn start```

A QR code will appear in the console. Scan it in your device and the app will build with Expo Go. Also you can enter manually the link provided to open the Metro Bundler, which should be something as *exp://<LOCAL_IP>:19000*

Changes in the code will refresh the app in the device.

## Running unit tests

In a command-line, go into the ```zemoga-mobile-react-dev-test/``` folder and run:

#### ```yarn test```

```
Test Suites: 13 passed, 13 total
Tests:       31 passed, 31 total
Snapshots:   13 passed, 13 total
Time:        9.486 s
Ran all test suites matching /./i.

Active Filters: filename /./
 › Press c to clear filters.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
 ```

## Proposed architecture and practices

### Wireframes design

A basic approach to the UI design was made with Figma. I created some wireframes of the screen to have a better idea of the functionality and the final design, although some changes were made when the app was developed. The Figma project can be found at:

[https://www.figma.com/file/qcjh7kvSol1KcsBJMsLi4y/Zemoga-Mobile-Test?node-id=0%3A1&t=0s60chKk9Yn7UURt-1](https://www.figma.com/file/qcjh7kvSol1KcsBJMsLi4y/Zemoga-Mobile-Test?node-id=0%3A1&t=0s60chKk9Yn7UURt-1)

### Screens 

#### Posts screen

Contains the ```posts``` data loaded by the API. These posts can be modified by adding them to favourites pressing the star icon, delete by pressing the trash icon, and reloading everything by pressing the spinning icon. Please note that you can delete either only selected posts or all unfavourite posts:

![01](https://user-images.githubusercontent.com/66321988/218205675-fde7a925-4a84-44a6-99d7-19d6d8b0b8e4.jpg)
![02](https://user-images.githubusercontent.com/66321988/218205698-edcab7ae-fbaa-4952-9107-a69f82464d4a.jpg)
![03](https://user-images.githubusercontent.com/66321988/218205704-82e2515c-7805-47f8-9ef8-ba1e046d7d7c.jpg)
![04](https://user-images.githubusercontent.com/66321988/218205720-dc3ff7f3-8480-42a1-bb3d-2cf4f6992fed.jpg)
![05](https://user-images.githubusercontent.com/66321988/218205731-0e9cda59-6a83-4a64-8468-4282b05c1c8c.jpg)
![06](https://user-images.githubusercontent.com/66321988/218205733-82ac2f52-b41c-4eb3-9ddc-0db98949bd2d.jpg)

#### Posts details screen

In this screen the data of the selected ```post``` will be displayed, as well as the user who posted it, known as ```author```. The Comments section opens as a modal by pressing the floating button on the right-bottom corner 

![Imagen de WhatsApp 2023-02-10 a las 16 52 06](https://user-images.githubusercontent.com/66321988/218205845-89b9a250-0bec-4e6e-9d09-c4b15103da27.jpg)
![07](https://user-images.githubusercontent.com/66321988/218205863-019dfba4-82df-4a1c-8a1e-58032e7e62dd.jpg)


### BONUS POINT: Off-line solution

The off line solution was achieved by persisting the data in the device local storage. You can test it by turning off the internet connection of the device (Wi-Fi and mobile data) and a message will appear at the top of the application, indicating the actions you can't perform and the data that's displayed.

![08](https://user-images.githubusercontent.com/66321988/218205888-0214f172-8b5e-4200-9361-87832c6985f3.jpg)
![09](https://user-images.githubusercontent.com/66321988/218205912-eb9b424d-8555-4f5e-9e98-fdf56171e890.jpg)


**Also notice that the application persists the posts information once the app is closed and opened again (as well as deleted posts and the ones selected as favourite)**

### Structure

For this project I structured it as a standard React Native application, having the ```src/``` folder as the container for ```components```, ```constants```, ```context```, ```navigation```, ```redux```, and ```screens``` sub-folders. Each component has its own ```@types``` and ```__tests__``` folders.

### Redux

The API requests and store management were made using redux, as it allowed to easily manage the data accross components and even persist it when there was no internet connection

### TypeScript

Most of the components and functions are typed correctly, although some are typed as ```any``` because I had no more time to check the types.

### eslint

To make sure of having a better code, ```eslint``` was used with ```Prettier``` in order to mantain more organized the project.

### Why Expo?

Because it allowed me to build an application for Android and iOS with almost no difference in the code and publish it in the same place.

### Unit testing with react-testing-library

All components were tested, covering the mounting, props passed, as well as more complex usage with React Custom Hooks and Providers.
