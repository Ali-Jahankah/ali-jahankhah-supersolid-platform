# SuperSolid task - Ali Jahankhah

## Overview

This project sets up an Express server with in-memory score management using NodeCache. It provides an API for submitting word entries and retrieving top scores, leveraging basic string validation to determine points. It uses AngularJS for the front end to interact with the API.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v18 or higher, Node 20 recommended)
- npm (v10)
- Docker (optional, if you prefer to run the application in a container)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ali-Jahankah/ali-jahankhah-supersolid-platform.git
cd ali-jahankhah-supersolid-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Make Sure of the npm and Node Version

Ensure you are using Node 18 or higher and npm 10.

### 4. Running the Project

You will see that the project will run on port 3000. Make sure your port 3000 is not in use. Also make sure that you are in branch 'main' and to start the server, run:

```bash
npm start
```

### 4. Running with Docker

You can also run this application using Docker. Follow these steps:

```bash
docker build -t your-image-name .
```

```bash
docker run -p 3000:3000 your-image-name
```

### Explanation of the Project

For this project:

- We are using Node and Express for the server.
- We are using dotenv to manage environment variables.
- We are using NodeCache to store high scores in memory.
- We are using AngularJS for the front end to submit entries and display scores.
- We have implemented basic validation functions to check if a word is alphabetic and a palindrome.
- We are using nodemon to run the server during the development environment.

### -------Project aim-------

After running the project, users can submit a name and a word through the front end. The application will validate the word, calculate points based on its length (if it's a palindrome), and store the scores in memory.

### Running Tests

It runs the tests using Jasmine. To run the tests, make sure you have installed all the dependencies, then run:

```bash
npx jasmine
```

### --------Contact--------

If you have any questions, feel free to contact me via email or phone:

- Phone: 07576790138
- Email: alijahankhah8@gmail.com

Also, feel free to find me on GitHub, Medium, and LinkedIn:

- GitHub: https://github.com/Ali-Jahankah
- LinkedIn: https://www.linkedin.com/in/uaral/
- Medium: https://medium.com/@ali-jahankah

Thanks!
Ali Jahankhah
