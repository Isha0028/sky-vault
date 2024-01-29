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
      navigate("/");
      props.showAlert("SignUp successfull!!", "success");
    } else {
      props.showAlert("Please enter with correct credentials ", "danger");
    }
  };
  return (
    <div className="container">
      <h2 className="my-3">Create your new account</h2>
      <form onSubmit={handleClick}>
        <div className="form-group my-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control my-2"
            id="name"
            name="name"
            value={credentials.name}
            minLength={3}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control my-2"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={credentials.email}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="password"
            name="password"
            value={credentials.password}
            minLength={8}
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control my-2"
            id="cpassword"
            name="cpassword"
            value={credentials.cpassword}
            minLength={8}
            required
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-dark my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
