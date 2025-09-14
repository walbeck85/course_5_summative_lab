// This file defines the root component of the React application.
// It sets up client-side routing using React Router and applies global layout elements like the navigation bar.

// Import routing components for navigation between pages
import { Routes, Route, Link } from "react-router-dom";
// Import individual page components for each route
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/Admin";
// Import global styles specific to the layout and navigation bar
import "./App.css";

// Define the App component that renders the navigation and route-based views
function App() {
  return (
    <div className="app-container">
      {/* Navigation bar containing links to major pages */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/admin">Admin Portal</Link></li>
        </ul>
      </nav>

      {/* Define client-side routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </div>
  );
}

// Export the App component for use in main.jsx
export default App;