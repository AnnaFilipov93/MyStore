import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useUsers, useCurrentUser } from "./appContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px"
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2)
    }
  }
}));

const LoginForm = () => {
  const users = useUsers();
  const { currentUser, setCurrentUser } = useCurrentUser();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    wrongEmail: "",
    wrongPassword: ""
  });

  const validateFields = () => {
    const user = users.find((u) => u.email === email);

    if (!user) {
      console.log("No such user");
      setErrors({ ...errors, wrongEmail: "No Such user" });
    } else if (user.password !== password) {
      setErrors({ wrongEmail: "", wrongPassword: "Passwords don't match" });
      return null;
    } else {
      setErrors({ wrongEmail: "", wrongPassword: "" });
    }
    return user;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    const user = validateFields();
    if (user) {
      setCurrentUser(user);
    } else {
      console.log("you shall not pass");
    }
    console.log(currentUser);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        error={Boolean(errors?.wrongEmail)}
        helperText={errors?.wrongEmail}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        error={Boolean(errors?.wrongPassword)}
        helperText={errors?.wrongPassword}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
