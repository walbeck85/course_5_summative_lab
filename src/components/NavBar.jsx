import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/admin">Admin Portal</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;