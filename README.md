# Book Store

A full-stack CRUD web application for managing a collection of books. The application allows users to create, view, update, and delete books through a responsive React frontend backed by an Express and MongoDB REST API.

---

## Features

- Create, Read, Update and Delete (CRUD) books
- Responsive user interface
- Table and card view for books
- RESTful API
- MongoDB database using Mongoose
- Environment variable configuration

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Notistack

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

---

## Environment Variables

### Backend (`backend/.env`)

```env
PORT=5555
MONGODB_URL=<your_mongodb_connection_string>
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:5555
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/sahil-beck/book-store.git
cd bookStore
```

### Backend

```bash
cd backend
npm install
npm start
```

The backend will run on:

```
http://localhost:5555
```

### Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get a single book |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

---

## Author

**Sahil Beck**