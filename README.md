# Product Management Application

This React application allows users to add products and view product details and profit records. It uses Material-UI for a modern and user-friendly interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/suhailkv/product-app.git
```

2. Install Dependencies
Make sure you have Node.js and npm installed. Then, run the following command to install the project dependencies:
cd to frontend direcctory
```
cd frontend
```
install all the dependencies
```
yarn
``` 
cd to backend
```
cd backend
```
install all the dependencies
```
yarn
``` 
3. Set Up Environment Variables
modify constants.js file in src in frontend directory if necessory:
modify constants.js file backend directory if necessory:
add a <strong>.env.development</strong> file in backend directory by checking with example file:

## Usage
1. Start the Development Server
Run the following command to start the development server:
goto frontend folder:

```
npm start
```
This will open the application in your default web browser. By default, it runs on http://localhost:3000.

goto backend folder:
```
npm start
```
This will serve the application on the port 5000. By default
2. Access the Application
Add Product: Navigate to the home page to add a new product. Enter the product details, and the profit will be calculated automatically.
Product Details: After adding a product, you can view its details and profit records by navigating to /product/:id, where :id is the ID of the product.

## API Endpoints

POST /product: Adds a new product to the database. The request body should include name, purchase_price, sales_price.</br>
GET /product/:id : Fetches details of a product and its profit records. Replace :id with the actual product ID.
