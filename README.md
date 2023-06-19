# Food and Medical Record Management App

This application is a simple API server for managing food items and medical records. It provides RESTful endpoints for creating, retrieving, updating, and deleting food items and medical records. The API server is built using Node.js and Express.js framework.

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
