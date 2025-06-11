# Basic CRUD API with Mock Data

This is a simple RESTful API built with Node.js and Express to demonstrate basic CRUD operations (Create, Read, Update, Delete) using mock data from a JSON file.  

---

## Why this project?

If you're just starting to learn how to design REST APIs and feel overwhelmed by databases and complex setups, this project is for you.  

It uses a mock data file (`MOCK_DATA.json`) instead of a database so you can focus on understanding the API basics.  

---

## Features

- Get all users (`GET /users`)
- Get a user by ID (`GET /users/:id`)
- Create a new user (`POST /users`)
- Update a user fully (`PUT /users/:id`)
- Update a user partially (`PATCH /users/:id`)
- Delete a user (`DELETE /users/:id`)

---

## How to use

1. Clone this repo  
2. Run `npm install` to install dependencies  
3. Start the server: `node index.js`  
4. Use Postman or any API client to interact with the endpoints  

---

## Notes

- No database setup required — uses a JSON file to store data  
- No error handling added intentionally to keep it simple  
- Great for beginners to get a quick start on CRUD operations  

---

## Tech stack

- Node.js  
- Express  
- File system (fs) to read/write JSON data  

---

Feel free to use this to kickstart your REST API learning journey!  

---

### GitHub repo link  
[Insert your repo link here]

---

If you find this helpful, please leave a star ⭐️ and share it with others learning backend development!
