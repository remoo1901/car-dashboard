import React, { useState } from "react";
import "./SignIn.scss";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function SignIn() {
  const { register, handleSubmit, errors } = useForm();
  const [signInError, setSignInError] = useState(false);
  const history = useHistory();

  const onSubmit = (data) => {
    if (data.password === process.env.REACT_APP_PASSWORD) {
      localStorage.setItem("token", "12345678")
      setSignInError(false)
      history.push('/dashboard')
    } else {
      setSignInError(true) 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="username"
        name="username"
        ref={register({ required: true, pattern: /^[a-z0-9_-]*$/i })}
      />
      {errors.username && "Username is Required"}

      <input
        placeholder="password"
        name="password"
        type="password"
        ref={register({ required: true, pattern: /^(?=.*\d).{4,8}$/ })}
      />
      {errors.password &&
        "Password Must contain a letter and number and be between 4 and 8  Characters"}
      <input type="submit" />
      {signInError && "Username Or Password Don't Match"}
    </form>
  );
}

export default SignIn;
