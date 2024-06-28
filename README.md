# Statxo

## Project Type

Frontend | Backend | FullStack

## Deplolyed App

Frontend: https://statxo-1.onrender.com

Backend: https://statxo.onrender.com

## Directory Structure

```
├─ .gitignore
├─ README.md
├─ backend
│  ├─ .gitignore
│  ├─ controller
│  │  └─ users.controller.js
│  ├─ index.js
│  ├─ logs
│  │  └─ temp.txt
│  ├─ middleware
│  │  └─ users.middleware.js
│  ├─ models
│  │  ├─ blacklistToken.model.js
│  │  ├─ task.model.js
│  │  └─ users.model.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ tasks.routes.js
│  │  └─ users.routes.js
│  └─ utils
│     └─ db.config.js
└─ frontend
   ├─ .eslintrc.cjs
   ├─ .gitignore
   ├─ README.md
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  └─ vite.svg
   ├─ src
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ Pages
   │  │  ├─ Dashboard.jsx
   │  │  ├─ Login.jsx
   │  │  └─ Register.jsx
   │  ├─ assets
   │  │  ├─ logo.png
   │  │  └─ react.svg
   │  ├─ components
   │  │  ├─ Navbar.jsx
   │  │  └─ Table.jsx
   │  ├─ context
   │  │  └─ AuthContext.jsx
   │  ├─ index.css
   │  ├─ main.jsx
   │  └─ routes
   │     └─ AllRoutes.jsx
   ├─ util
   │  └─ vars.js
   └─ vite.config.js
```

# Project Features

- Implemented user registration, login, and logout functionalities.
- Password hashing using bcrypt for enhanced security.
- Access tokens are provided to the frontend to verify user identity.
- Logout functionality includes blacklisting the access token to prevent unauthorized access.
- Logs the user data in the backend who changed the data.
- Updates data on the UI with the user's username and date and time when edited.
- Responsive layout for all types of screens.

  
## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

```bash
git clone https://github.com/ShubhKeshari/Statxo.git

```
To start Frontend

```bash
cd frontend

npm install

npm run dev

```
To start Backend

```bash
cd backend

npm install

npm run server
```

## API Endpoints

Backend Applications provide a list of your API endpoints, methods, brief descriptions.

<p>POST /users/register - create a new user with validation and registration logic</p>
<p>POST /users/login - authenticate a user with validation and authentication logic</p>
<p>POST /users/logout - logout a user</p>
<p>GET /tasks/task - Get all the data of tasks</p>
<p>PATCH /tasks/update/:id - To modify the data in the backend</p>

## Technology Stack

List and provide a brief overview of the technologies used in the project.

- React.js
- Chakra-ui
- Node.js
- Express.js
- MongoDB
