# Star Wars Characters App

## Introduction

This mobile application is built using React Native CLI for Android platforms. It provides users with the ability to indicate the total amount of male, female, and other favorite characters across the Star Wars Universe. The application makes API requests to retrieve information from the Star Wars API and displays a list of characters. Users can view additional information about a selected character on a dedicated screen. They can also add characters to their favorites, which recalculates the total votes and marks the selected character as liked. The application displays the total amounts of male, female, and other characters based on the user's selections. Additionally, a "Reset" button is provided to flush all previously added favorite characters and reset all total values to zero.

## Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run the app on your preferred platform using:
   - `npx react-native run-android` for Android

## Usage

- Upon launching the app, users will be presented with a list of Star Wars characters.
- To add a character to favorites, click on the "Add to favorites" icon against the character. This action recalculates the total votes and marks the character as liked.
- The total amounts of male, female, and other characters are displayed based on user selections.
- To reset the statistics and flush all favorite characters, click on the "Reset" button.

## Folder Structure

- `/src`: Contains the source code of the application.
  - `/components`: Reusable components used across the application.
  - `/screens`: Individual screens of the application.
  - `/services`: API service and related utilities.
  - `/styles`: Global stylesheets for consistent styling.
  - `/utils`: Utility functions used throughout the application.
  - `/assets`: Static assets such as images and fonts.

## Technology Stack

- **@react-navigation/native**: ^6.1.9
  - React Navigation library for navigation in React Native applications.
- **@react-navigation/native-stack**: ^6.9.17
  - Stack navigator for React Navigation, used for navigation between screens.
- **@reduxjs/toolkit**: ^2.1.0
  - Redux Toolkit library for efficient Redux usage, providing utilities for simplifying Redux store setup and reducing boilerplate code.
- **@types/react-redux**: ^7.1.33
  - Type definitions for React Redux, enabling TypeScript support when using React with Redux.
- **react-redux**: ^9.1.0
  - Official React bindings for Redux, enabling integration of Redux state management with React components.
