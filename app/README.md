# MyApp - React Application with Vite

This is a React application built using Vite for fast development and optimized builds. The project includes a `Navbar` component, a `FormPage` for user input, and a `HomePage` with a button that redirects to an external link.

## Features

- **Navbar**: A responsive navigation bar with icons for Home, Search, Notifications, Profile, and a link to the form page.
- **FormPage**: A simple form with a success message that appears after submission.
- **HomePage**: Includes a "Click Me" button that redirects to [Dribbble Homepage Tags](https://dribbble.com/tags/homepage).
- **React Router**: Used for navigation between pages.
- **CSS Styling**: Custom CSS for styling components.

## Project Structure
companyd1/ ├── app/ │ ├── src/ │ │ ├── components/ │ │ │ ├── Navbar.jsx │ │ │ ├── FormPage.jsx │ │ │ ├── HomePage.jsx │ │ │ ├── Navbar.css │ │ │ ├── FormPage.css │ │ │ └── HomePage.css │ │ ├── App.jsx │ │ └── main.jsx │ ├── public/ │ └──README.md 


## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd companyd1/app

   npm install

   npm run dev

   Open the application in your browser at http://localhost:5173. 



## Components
Navbar
Located in src/components/Navbar.jsx.
Displays navigation icons and a link to the form page.
FormPage
Located in src/components/FormPage.jsx.
A simple form with a success message that appears for 3 seconds after submission.
HomePage
Located in src/components/HomePage.jsx.
Includes a "Click Me" button that redirects to Dribbble Homepage Tags.

## Scripts
npm run dev: Start the development server.
npm run build: Build the application for production.
npm run preview: Preview the production build.

## Technologies Used
React: JavaScript library for building user interfaces.
Vite: Fast build tool for modern web projects.
React Router: For routing between pages.
CSS: For styling components.
