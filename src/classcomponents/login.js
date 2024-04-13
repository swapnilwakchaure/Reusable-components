import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [login, setLogin] = useState(false);

  // console.log('login location: ',location);
  console.log('previous location: ', location.state);
  console.log('current location: ', location.pathname);

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
        setLogin(true);
    }
  }, [login]);

  const handleLogin = () => {
    localStorage.setItem("isAuth", true);
    setLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setLogin(false);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!login ? (
        <button onClick={() => handleLogin()}>click here to login</button>
      ) : (
        <button onClick={() => handleLogout()}>logout</button>
      )}
    </div>
  );
};

export default Login;
