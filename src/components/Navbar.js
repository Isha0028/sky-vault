import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
 
  let location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SkyVault
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {!localStorage.getItem("token") ? (""):(
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/notes" ? "active" : ""
                    }`}
                  to="/notes"
                >
                  Notes
                </Link>
              </li>
              )}
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""
                    }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="d-flex">
                <Link
                  className="btn  mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn   mx-1"
                  to="/signUp"
                  role="button"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <ul className="navbar-nav ms-auto profile-menu">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link  d-flex align-items-center "
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <h6 className="mx-1">{localStorage.getItem("user")}</h6>
                    <div className="profile-pic1">
                      <img
                        src={localStorage.getItem("profileImage") && "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" id="navbarImage"
                        className="img-circle"
                      />
                    </div> 
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        onClick={handlelogout}
                        className="dropdown-item"
                        href="/"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
