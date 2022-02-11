import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feladat1">1. Feladat</Link>
          </li>
          <li>
            <Link to="/feladat2">2. Feladat</Link>
          </li>
          <li>
            <Link to="/feladat3">3. Feladat</Link>
          </li>
          <li>
            <Link to="/feladat4">4. Feladat</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;