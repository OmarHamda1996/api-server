# Food and Medical Record Management App

This application is a simple API server for managing food items and medical records. It provides RESTful endpoints for creating, retrieving, updating, and deleting food items and medical records. The API server is built using Node.js and Express.js framework.


GitHub Repository: [OmarHamda1996/api-server](https://github.com/OmarHamda1996/api-server)

Pull Requests: [Closed Pull Requests](https://github.com/OmarHamda1996/api-server/pulls?q=is%3Apr+is%3Aclosed)


## Features

- **Food Management**:
  - Create a new food item by providing the name, description, and price.
  - Retrieve a list of all food items.
  - Retrieve a specific food item by ID.
  - Update the details of a specific food item.
  - Delete a specific food item.

- **Medical Record Management**:
  - Create a new medical record by providing the patient's name, date of birth, medical history, allergies, and medications.
  - Retrieve a list of all medical records.
  - Retrieve a specific medical record by ID.
  - Update the details of a specific medical record.
  - Delete a specific medical record.
  
### Food Endpoints

- **POST /food**: Create a new food item.
- **GET /food**: Retrieve all food items.
- **GET /food/:id**: Retrieve a specific food item by ID.
- **PUT /food/:id**: Update the details of a specific food item.
- **DELETE /food/:id**: Delete a specific food item.

### Medical Record Endpoints

- **POST /medicalrecord**: Create a new medical record.
- **GET /medicalrecord**: Retrieve all medical records.
- **GET /medicalrecord/:id**: Retrieve a specific medical record by ID.
- **PUT /medicalrecord/:id**: Update the details of a specific medical record.
- **DELETE /medicalrecord/:id**: Delete a specific medical record.

## Implementation Notes

The API server is implemented using an Express.js framework and Sequelize ORM for working with a SQL database. It follows the MVC (Model-View-Controller) architecture pattern.

The application includes the following files and directories:

- **src/models**: Contains Sequelize models for food and medical records.
- **src/controllers**: Implements the CRUD operations for food and medical records.
- **src/routes**: Defines the RESTful routes for food and medical records.
- **src/server.js**: The main entry point of the application where the server is initialized.
- **src/error-handlers**: Custom error handlers for handling 404 and 500 errors.
- **config/config.json**: Configuration file for database connection.
- **.eslintrc.json**: ESLint configuration for linting the code.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **index.js**: The main file to start the application.
- **package.json**: Contains project metadata and dependencies.

