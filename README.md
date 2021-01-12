<!-- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) -->

# SurvEasy

[surveasy.herokuapp.com](https://surveasy.herokuapp.com/)

## Description

SurvEasy is a solution for your survey needs. Create your survey, and share with your customer base. See your survey results in easy to follow graphs and charts.

<!-- ![SCREENSHOT](SCREENSHOT PATH) -->

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Technologies](#Technologies)
<!-- * [License](#License) -->
<!-- * [Contribution](#Contribution) -->
<!-- * [Tests](#Tests) -->
* [Contributors](#Contributors)

## Installation

##### Clone the Repository

Navigate to the [SurvEasy Repository](https://github.com/Sakiskid/Surveasy). Copy the SSH connection from Github. Clone the repository onto your machine from your terminal using:

    git clone [ENTER THE SSH CONNECTION HERE]

This will create the Surveasy directory.

##### Install Dependencies

In your terminal, navigate into the Surveasy directory. To install all required dependencies, use:

    npm install

This will install all dependencies, both for the front and back end. 

##### Create Environment Variables

SurvEasy uses environment variables. When running the application from your local machine, the application will search for an env.json file within the Surveasy directory. Create an env.json file with the following content:

    {
        "NODE_ENV": "development",
        "PORT": 3001,
        "JWT_SECRET": [YOUR JWT SECRET HERE],
        "MONGODB_URI": [YOUR MONGODB URI HERE]
    }

##### Running the application

Use the start script from the Surveasy directory to run the application:

    npm run start

In a dev environment, this will run the application on _localhost:3000_.

## Usage

##### Creating a User Account

From the landing page, click the _Sign Up_ link. This will direct you to a sign up form. Enter your email, username and password. Password requirements include:

* At least 8 characters
* At least 1 lowercase letter
* At least 1 uppercase letter
* At least 1 number

Click submit. If your user account is successfully created, you will be directed to the _Admin_ page.

##### Sign In with Existing User Account

From the landing page, click the _Sign In_ link. This will direct you to a sign in form. Enter your username and password. If successful, you will be directed to the _Admin_ page.

##### Creating a Survey

Using the navigation bar, click _Create Survey_.

You will be directed to a survey form. First, enter the survey name. Next fill in the question and options for your first survey question.

If you would like to add an additional question to your survey, click _Add A Question_.

When you are finished, click _Submit_.

##### Admin Page

You can view your surveys by navigating to _Admin_ from the top navigation bar. First you will see a list of your current surveys. Click on any of your surveys to view admin information.

From this view, you can view survey information, and a survey link. You will use this survey link when sharing your survey with others.

You can also set your survey as active and public.

##### Analytics Page

You can see your survey analytics by navigating to _Analytics_ from the top navigation bar. First you will see a list of your current surveys. Click on any of your surveys to view survey analytics.

From here you can view the surveys results as charts and graphs.

##### Sign Out

When you are finished, you can sign out of the application using the sign out link at the top right of the navigation bar. This will sign you out of the application. In order to access your account, you will need to sign in again from the landing page.

If you do not sign out of your account, the application will remember you for 12 hours.

## Technologies

##### Front End Technologies

* React
* Bootstrap
* Chart.js
* Axios

##### Back End Technologies

* Node JS
* Express
* Mongoose
* JWT

<!-- ## License

SurvEasy is licensed under the [MIT](https://opensource.org/licenses/MIT) license. -->

<!-- ## Contribution

N/A -->

<!-- ## Tests

N/A -->

## Contributors

##### Jesse J.
<a href="https://github.com/JesseJ713">![Profile Image](https://github.com/JesseJ713.png?size=50)</a> 
<a href="https://www.linkedin.com/in/jesse-jackson-atx/">![Badge](https://img.shields.io/badge/LinkedIn--3480eb)</a> <a href="https://github.com/JesseJ713">![Badge](https://img.shields.io/badge/Github--40c256)</a>

##### Nick B.
<a href="https://github.com/nbur4556">![Profile Image](https://github.com/nbur4556.png?size=50)</a> 
<a href="https://www.linkedin.com/in/nick-burt/">![Badge](https://img.shields.io/badge/LinkedIn--3480eb)</a> <a href="https://github.com/nbur4556">![Badge](https://img.shields.io/badge/Github--40c256)</a>


##### Shubhangi M.
<a href="https://github.com/smundhada">![Profile Image](https://github.com/smundhada.png?size=50)</a> 
<a href="https://www.linkedin.com/in/shubhi-mundhada/">![Badge](https://img.shields.io/badge/LinkedIn--3480eb)</a> <a href="https://github.com/smundhada">![Badge](https://img.shields.io/badge/Github--40c256)</a>

##### Tyler S.
<a href="https://github.com/Sakiskid">![Profile Image](https://github.com/Sakiskid.png?size=50)</a> 
<a href="https://www.linkedin.com/in/tyler-smith-atx/">![Badge](https://img.shields.io/badge/LinkedIn--3480eb)</a> <a href="https://github.com/Sakiskid">![Badge](https://img.shields.io/badge/Github--40c256)</a>