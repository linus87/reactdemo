import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
  return (
    <>
      <nav className="site-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/hooks/useState">Hooks/useState</Link>
          </li>
          <li>
            <Link to="/hooks/useCallback">Hooks/useCallback</Link>
          </li>
          <li>
            <Link to="/redux">Redux Store</Link>
          </li>
        </ul>
      </nav>

      <div className="mainarea">
        <Outlet />
      </div>
      
    </>
  )
};

export default Layout;