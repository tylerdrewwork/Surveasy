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

USAGE INSTRUCTIONS

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