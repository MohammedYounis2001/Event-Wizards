import React, { useState } from "react";
import "../Component/Filecss/Sign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Cookies } from "react-cookie";

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fullname, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignIn = async () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/posts", {
        email: email,
        password: password,
      });

      // Assuming the API returns a token
      const token = response.data.token;
      const user_id = response.data.user_id;
      console.log("I am here>>>>>>>>>>>>>>>>>>>>>>>>>>>", response.data);
      Cookies.set("token", token);
      Cookies.set("user_id", user_id);
      // const id = Cookies.get("user_id")
      setError("Sign-in successful");
      history("/");

      // Handle successful sign-in, e.g., redirect or show a success message
      alert("Sign-in successful:", response.data);
      console.log("Sign-in successful:", response.data);
    } catch (error) {
      // Delay the error message and handle it
      setTimeout(() => {
        console.error("Sign-in error:", error);
        setError("Sign-in failed. Email or password is invalid");
      }, 300);
    }
  };

  const handleSignUp = async (e) => {
  // e.preventDefault();

    // Validation
    // if (!validateEmail(email)) {
    //   setError("Please enter a valid email.");
    //   return;
    // } else{
    //     setError("");
    // }

    // if (!validatePassword(password)) {
    //   setError(`Password must contain at least one lowercase letter, one uppercase letter, \n
    //   one digit,\n one special character (@#$%^&!), and be between 6 and 30 characters in length.`);
    //   return;
    // }   else {
    //     setError("");
    // }
    // if(!validateFirstName(first_name))
    // {
    // setError("First Nmae must be between 3 and 20 characters in length.");
    //   return;
    // }else {
    //    setError("");
    // }

    // if(!validateLastName(last_name))
    // {
    // setError("Last Name must be between 3 and 20 characters in length.");
    //   return;
    // }else {
    //    setError("");
    // }

    try {
      const response = await axios.post("  http://localhost:3001/posts", {
        email: email,
        fullname: fullname,
        password: password
      });

      console.log(response.status);
      if (response.status === 201) {
        alert("Sign Up successful!");
        history("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Email is already taken. Please use a different email.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleLoginClick = () => {
    setIsLogin(true);
    document.querySelector(".veen .wrapper").classList.remove("move");
    document.querySelector(".body").style.background =
      'url("https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center / cover';
    document
      .querySelector(".veen .rgstr-btn button")
      .classList.remove("active");
    document.querySelector(".veen .login-btn button").classList.add("active");
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    document.querySelector(".veen .wrapper").classList.add("move");
    document.querySelector(".body").style.background =
      'url("https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center / cover';
    document
      .querySelector(".veen .login-btn button")
      .classList.remove("active");
    document.querySelector(".veen .rgstr-btn button").classList.add("active");
  };

  return (
    <div className="body">
      <div className="veen">
        <div className="login-btn splits">
          <p>Already a user?</p>
          <button
            className={isLogin ? "active" : ""}
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
        <div className="rgstr-btn splits">
          <p>Don't have an account?</p>
          <button
            className={isLogin ? "" : "active"}
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
        </div>
        <div className="wrapper">
          <form
            id={isLogin ? "login" : "register"}
            tabIndex={isLogin ? "500" : "502"}
          >
            <h3>{isLogin ? "Login" : "Register"}</h3>
            <div className="email">
              <input
                type="email"
                name=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>{isLogin ? "Email or Username" : "Email"}</label>
            </div>
            {!isLogin && (
              <div className="name">
                <input
                  type="text"
                  name=""
                  required
                  value={fullname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Full Name</label>
              </div>
            )}
            {/* {!isLogin && (
              <div className="uid">
                <input type="text" name="" />
                <label>User Name</label>
              </div>
            )} */}
            <div className="passwd">
              <input
                type="password"
                name=""
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="submit">
              <button
                className="dark"
                onClick={() => {
                  isLogin ? handleSignIn() : handleSignUp();
                }}
              >
                {" "}
                {isLogin ? "Login" : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
