Star Wars Characters Voting App
Introduction
This mobile application is built using React Native CLI for both iOS and Android platforms. It provides users with the ability to indicate the total amount of male, female, and other favorite characters across the Star Wars Universe. The application makes API requests to retrieve information from the Star Wars API and displays a list of characters. Users can view additional information about a selected character on a dedicated screen. They can also add characters to their favorites, which recalculates the total votes and marks the selected character as liked. The application displays the total amounts of male, female, and other characters based on the user's selections. Additionally, a "Reset" button is provided to flush all previously added favorite characters and reset all total values to zero.

Requirements
Main screen with a scrollable and paginated list of elements
Screen for displaying additional information about the selected entity
Ability for users to add list elements to favorites and calculate totals based on gender
"Reset" button to flush all statistics to the initial state
Use of any state management approach
Allowed usage of any UI library/framework for styling
Recommended to follow referenced stylings or customize it according to preferences and/or best UX/UI practices
Installation
Clone this repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run the app on your preferred platform using:
npx react-native run-android for Android
npx react-native run-ios for iOS
Usage
Upon launching the app, users will be presented with a list of Star Wars characters.
Scroll through the list and click on a character to view additional information on a dedicated screen.
To add a character to favorites, click on the "Add to favorites" link/icon against the character. This action recalculates the total votes and marks the character as liked.
The total amounts of male, female, and other characters are displayed based on user selections.
To reset the statistics and flush all favorite characters, click on the "Reset" button.
Folder Structure
/src: Contains the source code of the application.
/components: Reusable components used across the application.
/screens: Individual screens of the application.
/services: API service and related utilities.
/styles: Global stylesheets for consistent styling.
/utils: Utility functions used throughout the application.
App.tsx: Entry point of the application.
/assets: Static assets such as images and fonts.
Technology Stack
React Native CLI
TypeScript
Redux (or any state management library)
Axios (or any HTTP client for API requests)
