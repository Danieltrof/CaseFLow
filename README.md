# CaseFlow

CaseFlow is a fullstack case management system built with **React (TypeScript)** and **ASP.NET Core Web API**.

The application allows users to manage customers and cases, track case progress, and interact with data through a clean UI connected to a real database.

## Overview

This project was built step-by-step to simulate how a real internal business system evolves:

- From a broken backend → to a structured API  
- From static UI → to fully connected frontend  
- From simple CRUD → to interactive data workflows  

The result is a complete system where users can **create, view, update, and delete cases**, with persistent data and a working dashboard.

## Tech Stack

### Frontend
- React (TypeScript)
- Material UI (MUI)
- React Query
- Axios

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- SQLite

## Features

### Customers
- Create customers
- View customer list
- Data stored in database

### Cases
- Create cases with:
  - title
  - description
  - priority
  - due date
  - linked customer
- View cases in structured table
- Update case status directly from UI
- Delete cases with confirmation dialog

### Dashboard
- Total customers
- Total cases
- Open cases
- High priority cases

### System Behavior
- Real-time UI updates using React Query
- Persistent data (SQLite)
- Relationship between entities (Case → Customer)

## What This Project Demonstrates

- Fullstack development (React + .NET)
- REST API design
- Database integration with EF Core
- DTO usage and separation of concerns
- State management with React Query
- Building interactive UI with real backend data
- Implementing full CRUD from the frontend

## Development Progress

### Step 1 — Foundation
- Fixed broken backend
- Set up project structure
- Connected React frontend to .NET backend
- Implemented routing and API client
- First working API endpoint

### Step 2 — Real Backend
- Integrated SQLite database
- Implemented EF Core with migrations
- Created Customer entity
- Built full CRUD API
- Introduced DTO pattern

### Step 3 — Frontend Integration
- Connected React to backend
- Displayed real data from database
- Implemented POST requests from UI
- Added React Query for automatic updates

### Step 4 — Case Entity
- Created Case model with relationship to Customer
- Built form with multiple fields
- Added validation (customer must exist)
- Displayed relational data in UI

### Step 5 — Navigation
- Introduced layout with sidebar
- Added routing between pages
- Improved structure and usability

### Step 6 — Dashboard
- Built summary endpoint in backend
- Displayed aggregated data in UI
- Introduced data overview cards

### Step 7 — Case UI Improvements
- Replaced list with table layout
- Added structured columns
- Improved readability

### Step 8 — Status Interaction
- Added inline status updates
- Synced UI changes with backend
- Enabled real-time updates

### Step 9 — Delete Cases
- Implemented delete functionality
- Added confirmation dialog
- Completed full CRUD from UI

## How to Run the Project

### Backend

cd backend/CaseFlow.Api
dotnet run

### Frontend

cd frontend
npm install
npm run dev

## What I Learned

- How to structure a fullstack application from scratch
- How frontend and backend communicate in real systems
- How to manage data flow using React Query
- How to design APIs and connect them to a UI
- The importance of small, incremental progress in larger projects

## Screenshots
<img width="1881" height="866" alt="image" src="https://github.com/user-attachments/assets/c1027e40-ea07-493c-b480-d325e665abbc" />
<img width="763" height="110" alt="image" src="https://github.com/user-attachments/assets/6f0cab81-03df-45a4-bc96-d9ddc8e72bd9" />
<img width="441" height="217" alt="image" src="https://github.com/user-attachments/assets/47b7381b-dfd7-4b0c-a0db-7b74bee172f5" />
<img width="1854" height="783" alt="image" src="https://github.com/user-attachments/assets/32fb8a96-f169-4aa0-ba54-21a38a0ade57" />
<img width="354" height="832" alt="image" src="https://github.com/user-attachments/assets/b999fbcc-0645-4731-8759-c82efbcd58d6" />
<img width="1268" height="568" alt="image" src="https://github.com/user-attachments/assets/653ce9a6-5c60-4a60-ae68-8dc400b2e2db" />
<img width="450" height="191" alt="image" src="https://github.com/user-attachments/assets/3f09f683-0523-492b-a069-6b2a3733c6e5" />
<img width="930" height="336" alt="image" src="https://github.com/user-attachments/assets/8c42546a-8f42-4cb2-9789-5e02a0ede264" />
<img width="1683" height="348" alt="image" src="https://github.com/user-attachments/assets/62b82924-9ef0-4dce-a0ae-bff9a0c3a947" />
<img width="1633" height="329" alt="image" src="https://github.com/user-attachments/assets/efae68e6-5522-471c-98c0-73ae903e600c" />
<img width="1645" height="446" alt="image" src="https://github.com/user-attachments/assets/b3bd3d4c-3d0d-4ccc-ad07-a4d5a098bd72" />
<img width="1502" height="340" alt="image" src="https://github.com/user-attachments/assets/d8c7cf73-9d81-48af-8fa7-4fe55ec70062" />
<img width="1585" height="294" alt="image" src="https://github.com/user-attachments/assets/a95e1a1e-b371-471f-aa91-02be95c0a634" />
<img width="1320" height="563" alt="image" src="https://github.com/user-attachments/assets/f2dff87a-51b9-4c7c-aafe-740f47068bba" />

## Final Note

This project started from a simple setup and evolved into a fully functional system with real-world patterns and workflows.

It reflects how applications are built step-by-step, focusing on structure, functionality, and interaction rather than just visuals.





