import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, TextField } from "@material-ui/core";
import { login } from "../services";
import useStyles from "../theme/forms.css";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleClick = async (e) => {
    const response = await login(username, password);
    localStorage.setItem("token", response.data.token);
    history.push('/Dashboard')
  };

  const classes = useStyles();

  return (
    <div>
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
