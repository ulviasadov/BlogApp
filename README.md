# BlogApp

BlogApp is a simple ASP.NET Core MVC blog application built for practicing authentication, authorization, database operations, and basic CRUD logic.

Users can create an account, sign in, create blog posts, and browse posts shared by other users.

## Features

- User registration and login with ASP.NET Core Identity
- Authentication and authorization
- Create new blog posts
- Discover posts from users
- Entity Framework Core integration
- SQL Server database support
- MVC structure with Controllers, Views, Models, and DTOs

## Technologies Used

- ASP.NET Core MVC
- C#
- Entity Framework Core
- ASP.NET Core Identity
- SQL Server
- HTML
- CSS
- JavaScript

## Project Structure

```bash
BlogApp/
│
├── Controllers/
│   ├── AccountController.cs
│   ├── DiscoverController.cs
│   ├── HomeController.cs
│   └── PostController.cs
│
├── Data/
│   └── AppDbContext.cs
│
├── Dtos/
│   ├── BlogCreateDto.cs
│   ├── UserCreateDto.cs
│   └── UserSignInDto.cs
│
├── Migrations/
├── Models/
├── Views/
├── wwwroot/
├── Program.cs
├── appsettings.json
└── BlogApp.csproj
