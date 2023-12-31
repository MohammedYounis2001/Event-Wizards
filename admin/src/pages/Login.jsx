import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { Cookies } from 'react-cookie';
import Swal from "sweetalert2";
// import { useCookies } from 'react-cookie';

function Log() {

  
      
    // const [cookies, setCookie] = useCookies(['token']);
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    
   
  });
 
  const handleSignIn = async () => {
    // if (!email || !password) {
    //   setError("Email and password are required.");
    //   return;
    // }
    if (!formData.password) {
        setError("Password is required.");
        return;
      }
      if (!formData.email) {
        setError("Email is required.");
        return;
      }

    axios.post('http://localhost:3004/login', formData)
      .then((response) => {
        
        if (response.status === 201) {
        
          console.log(response);
       
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'You have successfully logged in.',
                timer: 3000,
                iconColor: '#FE7A00',
              });
              // Assuming the API returns a token
    //   const token = response.data.token;

      // Set the token in a cookie
    //   setCookie('token', token, { path: '/' });
              navigate("/");
            }
           

        }
      )
      .catch((error) => {
        console.error('An error occurred while sending the message:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An error occurred while creating the event.',
        });
      });
  };

  return (
    <div className="flex h-screen w-screen items-center overflow-hidden px-2">
    {/* Login */}
    <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
      <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-[#FE7A00] sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
      <div className="mx-auto mb-2 space-y-3">
        <h1 className="text-center text-3xl font-bold text-[#FE7A00]">Login</h1>
        <p className="text-gray-500"></p>
      </div>
      <div>
        <div className="relative mt-2 w-full">
          <input
            type="email"
            id="email"
            defaultValue="email@gmail.com"
            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
             required
          />
          <label
            htmlFor="email"
            className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
          >
            {" "}
            Enter Your Email{" "}
          </label>
        </div>
      </div>
      <div>
        <div className="relative mt-2 w-full">
          <input
            type="password"
            id="password"
            className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <label
            htmlFor="password"
            className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
          >
            {" "}
            Enter Your Password
          </label>
        </div>
      </div>
      <div className="flex w-full items-center">
        <button className="shrink-0 inline-block w-36 rounded-lg bg-[#FE7A00] py-3 font-bold text-white"
        onClick={handleSignIn}>
          Login
        </button>
        <a
          className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
          href="#"
        >
          Forgot your password?
        </a>
      </div>
     
    </div>
    {/* /Login */}
  </div>
  
  );
}

export default Log;