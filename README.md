# Frontend CRUD

![Frontend img](./public/images/frontend-img.png)

## Description 
This project is a CRUD (Create, Read, Update, Delete) application for managing user records. It provides a user-friendly interface for viewing, adding, updating, and deleting user information.

## Features

- **User Listing Screen**: Displays a list of registered users.
- **User Management Modal**: Allows users to add, update, or delete user records using a modal.
- **Search by Name**: Includes a search bar on the user listing screen to filter users by name.
- **Creation Date Filter**: Enables filtering users based on the date of creation. Users can filter by ascending or descending order and within a specific date range

## Application Structure
The project structure follows a modular approach for better organization and scalability.

```
frontend-crud/
|-- src/
|   |-- public/
|-- src/
|   |-- apiServices/
|   |-- components/
|   |-- modals/
|   |-- style/
|   |-- App.tsx
|   |-- index.tsx
|-- .eslintrc.js
|-- tsconfig.json
|-- tsconfig.node.json
|-- package.json
|-- ..others configurations
```

- apiServices/: Manages API requests using Axios.
- components/: Contains React components for the application.
- modals/: Modal components used for user interactions.
- style/: Styled Components for styling.
- App.tsx: Main application component.
- main.tsx: Entry point of the application.

## Run the project
Clone the repository:
```
git clone https://github.com/mayoliveii/frontend-crud.git
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

Open the browser and navigate to:
```
http://localhost:5173/
```

## Backend Integration
- The application communicates with a [backend](https://github.com/mayoliveii/backend-crud) to perform user-related operations.
- Backend endpoints handle user creation, retrieval, updating, and deletion.
- Backend queries support searching users by name and filtering by creation date.