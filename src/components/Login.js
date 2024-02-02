import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({name: "", email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        email: credentials.email,
        password: credentials.password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("user", credentials.name);
      localStorage.setItem("email", credentials.email);
      navigate("/");
      props.showAlert("Login successfull!!", "success");
    } else {
      props.showAlert("Please enter with correct details", "danger");
    }
  };
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-5 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="doddle"
              />
            </div>
            <div className="col-md-2 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleClick}>
                <div className=" d-flex align-items-center my-3">
                  <h1 className="text-center  mx-3 mb-10">Login to Skyvault</h1>
                </div>

                {/* <!-- username-input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={credentials.name}
                    required
                    onChange={onChange}
                    className="form-control form-control-lg "
                    placeholder="Enter your username"
                  />
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    value={credentials.email}
                    required
                    onChange={onChange}
                    className="form-control form-control-lg "
                    placeholder="Enter a valid email address"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    required
                    onChange={onChange}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center"></div>

                <div className="text-center text-lg-start mt-3 pt-2">
                  <button
                    type="submit"
                    className="btn  "
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="/signup" className="link-danger my-2">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
