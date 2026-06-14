import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaTruck,
  FaUserTie,
  FaRoute,
  FaGasPump,
  FaTools,
  FaTachometerAlt,
  FaSignOutAlt
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        <Link className="navbar-brand brand-logo" to="/dashboard">
          🚚 Fleet Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <div className="navbar-nav mx-auto">

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              <FaTachometerAlt className="me-2" />
              Dashboard
            </NavLink>

            <NavLink
              to="/drivers"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              <FaUserTie className="me-2" />
              Drivers
            </NavLink>

            <NavLink
              to="/vehicles"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              <FaTruck className="me-2" />
              Vehicles
            </NavLink>

            <NavLink
              to="/trips"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              <FaRoute className="me-2" />
              Trips
            </NavLink>

            <NavLink
              to="/fuel-records"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              <FaGasPump className="me-2" />
              Fuel Records
            </NavLink>

            <NavLink
              to="/maintenance"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              <FaTools className="me-2" />
              Maintenance
            </NavLink>

            <Link
    to="/routes"
    className="nav-link"
>
    Routes
</Link>

          </div>

          <button
            className="btn logout-btn"
            onClick={handleLogout}
          >
            <FaSignOutAlt className="me-2" />
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;