import React, { useState } from 'react';
import '../Component/Filecss/Sign.css'
function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginClick = () => {
    setIsLogin(true);
    document.querySelector('.veen .wrapper').classList.remove('move');
    document.querySelector('.body').style.background = 'url("https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center / cover';
    document.querySelector('.veen .rgstr-btn button').classList.remove('active');
    document.querySelector('.veen .login-btn button').classList.add('active');
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
    document.querySelector('.veen .wrapper').classList.add('move');
    document.querySelector('.body').style.background = 'url("https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat center center / cover';
    document.querySelector('.veen .login-btn button').classList.remove('active');
    document.querySelector('.veen .rgstr-btn button').classList.add('active');
  };

  return (
    <div className="body">
      <div className="veen">
        <div className="login-btn splits">
          <p >Already a user?</p>
          <button className={isLogin ? 'active' : ''} onClick={handleLoginClick}>Login</button>
        </div>
        <div className="rgstr-btn splits">
          <p>Don't have an account?</p>
          <button className={isLogin ? '' : 'active'} onClick={handleRegisterClick}>Sign Up</button>
        </div>
        <div className="wrapper">
          <form id={isLogin ? 'login' : 'register'} tabIndex={isLogin ? '500' : '502'}>
            <h3>{isLogin ? 'Login' : 'Register'}</h3>
            <div className="mail">
              <input type="mail" name="" />
              <label>{isLogin ? 'Mail or Username' : 'Mail'}</label>
            </div>
            {!isLogin && (
              <div className="name">
                <input type="text" name="" />
                <label>Full Name</label>
              </div>
            )}
            {!isLogin && (
              <div className="uid">
                <input type="text" name="" />
                <label>User Name</label>
              </div>
            )}
            <div className="passwd">
              <input type="password" name="" />
              <label>Password</label>
            </div>
            <div className="submit">
              <button className="dark">{isLogin ? 'Login' : 'Register'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
