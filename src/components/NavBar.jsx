// This component renders the top navigation bar for the application,
// using NavLink for client-side routing between main pages.

import { NavLink } from 'react-router-dom';

// Defines the NavBar component with links to Home, Shop, and Admin Portal.
function NavBar() {
  return (
    // Navigation structure using an unordered list for layout
    <nav>
      <ul>
        {/* Link to Home page */}
        <li><NavLink to="/">Home</NavLink></li>

        {/* Link to Shop page */}
        <li><NavLink to="/shop">Shop</NavLink></li>

        {/* Link to Admin Portal page */}
        <li><NavLink to="/admin">Admin Portal</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;