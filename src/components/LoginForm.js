import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { Button, TextField } from "@material-ui/core";
import useStyles from "../theme/forms.css";
import { login } from "../services";
import authContext from "../store";

const LoginForm = () => {
  
  const checkAuth = useContext(authContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClick = async (e) => {
    try {
      const response = await login(username, password);
      localStorage.setItem("token", response.data.token);
      checkAuth.setToken(response.data.token);
      checkAuth.setIsAuth(true);
      history.push("/Dashboard");
    } catch (error) {
      setError(true);
    }
  };

  const classes = useStyles();

  return (
    <div>
      {error && "server error"}
      <div>
        <div className={`wrapper ${classes.loginForm}`}>
          <TextField
            className="input"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            className="input"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button
            variant="outlined"
            color="primary"
            onClick={(event) => handleClick(event)}
          >
            Se connecter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
