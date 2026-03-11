# BlogApp

BlogApp is a full-stack blog application built with **ASP.NET Core MVC + Web API** on the backend and **React + Vite** on the frontend.

Users can register, log in, create blog posts, and browse posts shared by other users. The backend uses **ASP.NET Core Identity** for authentication, **Entity Framework Core** for database access, and **SQL Server** as the database provider. The frontend communicates with the backend through REST API endpoints.

---

## Overview

This project was built to practice full-stack development concepts such as:

- Authentication and authorization
- ASP.NET Core Identity
- Entity Framework Core with SQL Server
- File upload handling
- Building API endpoints
- Connecting a React frontend to an ASP.NET Core backend
- Client-side routing with React Router

---

## Features

### Backend
- User registration
- User login and logout
- Profile image upload during registration
- Create blog posts
- Get all blog posts
- Cookie-based authentication with ASP.NET Core Identity
- MVC pages and API controllers in the same project

### Frontend
- React-based user interface
- Routing with React Router
- API requests with Axios
- Discover page for listing blog posts
- Login page
- Register page
- Create post page

---

## Technologies Used

### Backend
- ASP.NET Core MVC
- ASP.NET Core Web API
- ASP.NET Core Identity
- Entity Framework Core
- SQL Server
- C#

### Frontend
- React
- Vite
- React Router DOM
- Axios
- CSS

---

## Project Structure

```bash
BlogApp/
│
├── BlogApp/                     # ASP.NET Core backend
│   ├── Controllers/
│   │   ├── Api/
│   │   │   ├── AccountController.cs
│   │   │   └── PostController.cs
│   │   ├── AccountController.cs
│   │   ├── DiscoverController.cs
│   │   ├── HomeController.cs
│   │   └── PostController.cs
│   ├── Data/
│   ├── Dtos/
│   ├── Migrations/
│   ├── Models/
│   ├── Properties/
│   ├── Views/
│   ├── wwwroot/
│   ├── Program.cs
│   ├── appsettings.json
│   └── BlogApp.csproj
│
├── frontend/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── BlogApp.slnx
└── README.md
