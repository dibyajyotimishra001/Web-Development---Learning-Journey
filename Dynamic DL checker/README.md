# DL Checker

## Live Preview
You can view the live, deployed version of this project here: 
https://raj-dl-checker.netlify.app/

## Overview
The DL Checker (Driving License Checker) is a web application that evaluates a user's age to determine their eligibility for various types of driving licenses. 

Initially, this project started as a Python terminal-based application. However, I have completely rebuilt and expanded it into a fully functional web user interface. This web version was entirely created by me from scratch, providing a much more intuitive and visual experience for the user.


## Features
* Age Validation: Prevents invalid inputs such as negative numbers, letters, or unrealistic ages (above 120).
* Dynamic Feedback: Displays specific eligibility messages based on the entered age bracket:
  - Under 16: Not eligible for any driving license.
  - 16 to 17: Eligible for a Learning License.
  - 18 to 19: Eligible for a standard Driving License.
  - 20 to 64: Eligible for both Commercial and Personal Driving Licenses.
  - 65 and above: Advises the user that they are no longer eligible and to stay healthy.
* Keyboard Accessibility: Users can submit their age by clicking the "Submit" button or simply by pressing the "Enter" key.
* Responsive Design: The application adapts to smaller screen sizes and mobile devices.

## Technology Stack
* HTML5: Structures the web page and input forms.
* CSS3: Custom styling, including a modern dark-mode aesthetic with custom color variables.
* JavaScript (Vanilla): Handles the core logic, DOM manipulation, event listeners, and age calculation.
* Bootstrap & Bootstrap Icons: Used for typography scaling and visual indicators alongside the warning messages.

## How to Run Locally
1. Clone or download the repository to your local machine.
2. Ensure you have all three files in the same directory: `index.html`, `style.css`, and `script.js`.
3. Open `index.html` in any modern web browser to use the application.