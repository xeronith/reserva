# Reserva Demo App

This React Native application is developed to demonstrate a basic structure for a reservation app and is for technical demonstration purposes only. Some of the key features include:

- Location based services using map
- Functional Components
- TypesScript
- Context API
- Using styled-components (Only for components in `/components` folder)
- Overall clean architecure and separation of concerns

To run the application using Expo you can install node 16 on your machine and then install Expo with `npm install -g expo-cli`. You can start the app with `expo start`. Make sure you have iOS Simulator or Android Emulator installed on your machine. You can also use Expo Go app to test the application directly on your device.

Note that this app relies on a NodeJS backend which can be found at https://github.com/xeronith/reserva-server

Before running the app you should change the `BASE_URL` in `/api/config.ts` to the running backend server address.

## iOS Screenshots
<table>
    <tr>
        <td><img src="/screenshots/ios/1.png" width=270></td>
        <td><img src="/screenshots/ios/2.png" width=270></td>
        <td><img src="/screenshots/ios/3.png" width=270></td>
    </tr>
    <tr>
        <td><img src="/screenshots/ios/4.png" width=270></td>
        <td><img src="/screenshots/ios/5.png" width=270></td>
        <td><img src="/screenshots/ios/6.png" width=270></td>
    </tr>
</table>

## Android Screenshots
<table>
    <tr>
        <td><img src="/screenshots/android/1.jpg" width=270></td>
        <td><img src="/screenshots/android/2.jpg" width=270></td>
        <td><img src="/screenshots/android/3.jpg" width=270></td>
    </tr>
    <tr>
        <td><img src="/screenshots/android/4.jpg" width=270></td>
        <td><img src="/screenshots/android/5.jpg" width=270></td>
        <td><img src="/screenshots/android/6.jpg" width=270></td>
    </tr>
</table>
