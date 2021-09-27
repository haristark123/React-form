import classes from "./InputForm.module.css";
import { useState } from "react";
import useInput from "./hooks/use-input";
const InputForm = () => {
  const { InputHandler, onBlurHandler, inputValid, InputInvalid,reset,enteredName } = useInput((value)=>value.trim()!=='');

  const {InputHandler:EmailHandler, onBlurHandler:onEmailBlurHandler, inputValid:EnteredEmailValid, InputInvalid:TouchedEmailInvalid,reset:emailreset,enteredName:enteredEmail}=useInput((value)=>value.includes('@'))
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [Emailtouched, setEmailTouched] = useState(false);
  // const EnteredEmailValid = enteredEmail.includes("@");x
  // const TouchedEmailInvalid = !EnteredEmailValid && Emailtouched;

  let formValid = true;
  if (!inputValid || !EnteredEmailValid) {
    formValid = false;
  }

  // const onEmailBlurHandler = () => {
  //   setEmailTouched(true);
  // };

  // const EmailHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    // setTouched(true);
    // setEmailTouched(true); 
    if (!inputValid || !EnteredEmailValid) {
      return;
    } 
    console.log({
      name:enteredName,
      email:enteredEmail
    });
    reset()
   
    emailreset()
  };
  return (
    <>
      <form className={classes["form-control"]} onSubmit={submitHandler}>
        <div
          className={`${classes.inputForm} ${InputInvalid && classes.invalid}`}
        >
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter UserName"
            name="username"
            onBlur={onBlurHandler}
            onChange={InputHandler}
            value={enteredName}
          />
          {InputInvalid && (
            <p className={classes.p}>Empty Field is not valid</p>
          )}
        </div>
        <div
          className={`${classes.inputForm} ${
            TouchedEmailInvalid && classes.emailinvalid
          }`}
        >
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Ur Mail"
            name="email"
            onBlur={onEmailBlurHandler}
            onChange={EmailHandler}
            value={enteredEmail}
          />
          {TouchedEmailInvalid && (
            <p className={classes.p}>Empty Field is not valid</p>
          )}
        </div>

        <div className={classes.action}>
          <button disabled={!formValid}>Submit</button>
        </div>
      </form>
    </>
  );
};
export default InputForm;
