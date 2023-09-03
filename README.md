# example-store
## Description

This bakery eCommerce application is designed to allow users to browse and purchase a variety of bakery products quickly and easily. Users can explore products, add them to the shopping cart, and place orders. Additionally, the application includes the following additional features:

## Additional Features

### 1. User Data

The application allows users to:

- **Access the camera:** Users can use the camera to select a profile picture.

- **Save addresses:** Users can save addresses.

- **Select addresses on Google Maps:** Users can select addresses using Google Maps.

### 2. Authentication with Firebase

The application uses Firebase for user authentication, allowing users to register, log in, and securely manage their accounts.

### 3. Firebase Realtime Database

The application uses Firebase Realtime Database to store and retrieve data in real-time, facilitating the management of products, orders, and other critical information.

### 4. Local Storage with SQLite

In addition to Firebase, the application uses SQLite for local data storage, enabling fast and efficient access to relevant information without the need for an internet connection.

## Prerequisites

Before you can run the application on your mobile device or in a web browser, make sure you have the following tools installed:

- **Node.js and npm:** Make sure you have Node.js and npm installed on your system. You can download them from [nodejs.org](https://nodejs.org/).

- **Expo CLI:** If you don't have Expo CLI installed yet, you can do so using the following command:

  ```bash
  npm install -g expo-cli
  ```

- **Android Studio (Optional):** If you want to run the application in an Android emulator, install Android Studio by following the instructions at [developer.android.com/studio](https://developer.android.com/studio).

## Installation

1. Clone the repository:

   ```bash
   git clone <REPO_URL>
   cd example-store
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

You can run the application on your mobile device or in a web browser using Expo.

### Running on Mobile Device

1. Make sure you have the Expo Go app installed on your mobile device from the app store.

2. Run the application on your device:

   ```bash
   npm start
   ```

3. Open the Expo Go app and scan the QR code displayed in the terminal.

### Running on an Android Emulator (Optional)

If you have set up an Android emulator in Android Studio, you can run the application on the emulator using the following command:

```bash
npm run android
```

## Main Dependencies

- **@react-navigation/bottom-tabs:** Navigation library for tab navigation in the application.
- **@react-navigation/native:** Main navigation library for React Native.
- **@reduxjs/toolkit:** Used for state management in the application.
- **expo:** Platform for developing React Native applications.
- **react:** Core React library.
- **react-native:** Framework for mobile app development.
- **react-native-gesture-handler:** Library for handling touch gestures.
- **react-native-maps:** Map component for React Native.
- **react-native-safe-area-context:** Used for managing safe areas on devices with notches.
- **react-redux:** Library for managing the application's state.
- **firebase:** Firebase library for authentication and real-time storage.
- **react-native-sqlite-storage:** Library for local data storage using SQLite.

## Development

For the development of this application, the following tools and configurations were used:

- **@babel/core:** JavaScript code transpiler.
- **eslint:** Tool for static code analysis.
- **eslint-config-universe:** ESLint configuration for React Native projects.
- **prettier:** Tool for consistent code formatting.

## Contribution

If you would like to contribute to this application, please open an issue or submit a pull request (PR) on the repository.

---
