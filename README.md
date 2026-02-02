A full-stack web application built to manage restaurant operations such as menu handling, order processing, and billing.
This project focuses on understanding real-world full-stack development using Python backend and Vanilla JavaScript + Tailwind CSS frontend without relying on heavy frameworks.

▶️ How to Run the Project
python app.py


Visit in browser:

http://localhost:8000

🌐 Live Deployment

The application is deployed at:

🔗 https://restaurant-30kt.onrender.com

⚡ Performance Optimizations Used

Implemented Single Page Application (SPA) behavior to avoid full page reloads.

Used a threaded Python HTTP server to handle multiple requests efficiently.

Optimized static file serving for faster asset delivery.

Reduced unnecessary database calls by loading data only when required.

Modular backend design to improve maintainability and debugging.

🧩 Project Description

This is a mini full-stack restaurant management system built with:

Python (backend)

Vanilla JavaScript + Tailwind CSS (frontend)

The project helps understand how real restaurant software works internally, including:

routing

APIs

HTTP request handling

frontend–backend communication

database integration

state management

modular project structure

🚀 What This Project Demonstrates
🔹 Full Stack Fundamentals

How a backend serves data via RESTful APIs

How the frontend consumes APIs and updates the UI dynamically

Separation of concerns between UI, API, and database layers

Real-world project folder organization

🎨 Frontend Concepts Used

Single Page Application (SPA) basics

Dynamic page routing without reload

Modular JavaScript architecture

Tailwind CSS for responsive UI

DOM manipulation (tables, forms, cards)

UI state management (editing mode, reload state)

Components such as:

Header

Footer

Menu Form

Menu Table

Billing View

Alerts & Notifications

🖥️ Backend Concepts Used

Python HTTP server using BaseHTTPRequestHandler

Manual routing logic (no Flask / FastAPI)

Serving static files manually

REST API design

CRUD operations

JSON request/response handling

SQLite database integration

Custom error handling and 404 pages

🏗️ Project Structure
restaurant_management_system/
│
├── app.py                     # Starts the Python server
├── router.py                  # Handles UI + API routing
│
├── controllers/               # API logic (business rules)
│   ├── menu.py
│   ├── orders.py
│   └── billing.py
│
├── services/                  # Database interaction
│   ├── menu_service.py
│   ├── order_service.py
│   └── billing_service.py
│
├── database/
│   ├── connection.py          # SQLite connection
│   └── queries.py             # SQL queries
│
├── frontend/
│   ├── pages/                 # SPA pages
│   ├── assets/
│   │   ├── css/
│   │   └── js/
│   │       ├── router/
│   │       ├── components/
│   │       ├── controllers/
│   │       ├── services/
│   │       └── utils/
│   └── env.js
│
└── restaurant.db              # SQLite database

🔌 How the Application Works (Big Picture)
1️⃣ User visits a page (Menu / Orders / Billing)

Browser loads index.html (SPA shell)

SPA router injects the required page dynamically

2️⃣ Frontend Controller Executes

Initializes UI events

Calls backend APIs

Fetches menu or order data

Renders tables/cards dynamically

3️⃣ When User Performs Actions

Examples:

Add menu item

Update price

Place order

Generate bill

Flow:

JS collects input data

Sends request to backend API

Backend processes logic

Database is updated

UI refreshes without page reload

🔁 Edit / Delete Operations

Edit → loads data into form

Delete → triggers API call

UI updates instantly using SPA logic

🧱 Frontend Key Files
✔ viewRouter.js

Handles SPA navigation

Updates URL without reload

Injects page HTML dynamically

✔ Controllers

Handle user events

Call APIs

Update UI state

✔ Services

All fetch() API calls

Safe JSON parsing

Error handling

✔ Components

MenuForm

MenuTable

OrderView

BillingComponent

Alert & Loader

🗄️ Backend Key Files
✔ router.py

Separates:

UI routes

API routes

Static asset routes

Prevents invalid requests

Sends proper 404 responses

✔ Controllers

Business logic

Validates data

Calls database services

✔ Database Layer

SQLite database

SQL queries separated cleanly

Persistent data storage

🔌 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/menu	Get all menu items
POST	/api/menu	Add new menu item
PUT	/api/menu/:id	Update menu item
DELETE	/api/menu/:id	Delete menu item
POST	/api/billing	Generate bill
🧠 Backend Architecture (Why No Frameworks?)

The backend is built without Flask or FastAPI to deeply understand:

How HTTP works internally

How routing is implemented

How APIs process requests

How frontend and backend communicate

This approach builds strong fundamentals.

🔄 Request Cycle Example

When user adds a menu item:

Frontend sends POST /api/menu

Backend:

Parses JSON

Inserts data into SQLite

Sends success response

Frontend reloads menu list dynamically

This completes the full-stack loop.

📚 Learning Outcomes

Real-world full-stack application structure

REST API design

SPA architecture

Backend debugging & optimization

Database CRUD operations

Deployment using Render

Git & GitHub workflow

👩‍💻 Author

Alisha Rani Patro
📧 Email: rpalisha86@gmail.com

🔗 GitHub: https://github.com/mealisha20

🔗 LinkedIn: https://www.linkedin.com/in/mealisha20

