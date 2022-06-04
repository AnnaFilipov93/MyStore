import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function LoginForm(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted , setSubmitted] = useState(false);
  const [buttonString, setButtonString] = useState('Submit')
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    setButtonString('Submit');
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
    setButtonString('Submit');
  }
  
  const handleSubmittedChange = (e) => {
    setSubmitted(!submitted);
    if (submitted){
      setButtonString('Your form is submitted!');
    }
    else{
      setButtonString('Your form is submitted!');
    }
  }

  return (
    <ValidatorForm
        onSubmit={handleSubmittedChange}
    >
        <h2>Simple form</h2>
        <TextValidator
            label="Email"
            onChange={handleEmailChange}
            name="email"
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
        />
        <br />
        <TextValidator
            label="Password"
            onChange={handlePasswordChange}
            name="password"
            type="password"
            value={password}
            validators={['required']}
            errorMessages={['this field is required']}
        />
        <br />
        <Button
            color="primary"
            variant="contained"
            type="submit"
            disabled={submitted}
            onClick={handleSubmittedChange}
        >
            {buttonString}
        </Button>
    </ValidatorForm>
);
}
export default LoginForm;