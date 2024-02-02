import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      localStorage.setItem("user", credentials.name);
      localStorage.setItem("email", credentials.email);
      navigate("/");
      props.showAlert("SignUp successfull!!", "success");
    } else {
      props.showAlert("Please enter with correct credentials ", "danger");
    }
  };
  return (
    <div className="container card">
      <h2 className="my-3 mb-0 text-center">Create an account</h2>
      <p className="text-center">To store your notes on cloud</p>
      <form onSubmit={handleClick}>
        <div className="form-group my-4">
          <input
            type="text"
            className="form-control my-3"
            id="name"
            name="name"
            placeholder="Your name"
            value={credentials.name}
            minLength={3}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group my-4">
          <input
            type="email"
            className="form-control my-3"
            id="email"
            name="email"
            placeholder="Your email address"
            aria-describedby="emailHelp"
            value={credentials.email}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group my-4">
          <input
            type="password"
            className="form-control my-3"
            id="password"
            name="password"
            placeholder="Your password"
            value={credentials.password}
            minLength={8}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group my-4">
          <input
            type="password"
            className="form-control my-3"
            id="cpassword"
            name="cpassword"
            placeholder="Repeat your password"
            value={credentials.cpassword}
            minLength={8}
            required
            onChange={onChange}
          />
        </div>
        <div className="text-center">
        <button type="submit" className="btn btn-primary btn-dark my-3">
          Register
        </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
