import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0.45em 0px 0px #df6d6d;
  padding: 25px;
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-top: 10px;
  font-weight: bold;
  &.warn { 
    border: 2px solid #ff7a7a;
  }
`;

const Button = styled.button`
  box-shadow: 0px 0.3em 0px 0px #2fb179;
  border-radius: 5px;
  background-color: #38cc8c;
  color: white;
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 15px 0;
`;

const Warn = styled.span`
  color: #ff7a7a;
  font-size: 12px;
  font-weight: 500;
  float: right;
  font-style: italic;
`;

const Form = () => { 
  const [val, setVal] = useState({firstName: "", lastName: "", email: "", password: ""});
  const [warn, setWarn] = useState({firstName: false, lastName: false, email: false, password: false});
  const [emailMsg, setEmailMsg] = useState("");

  useEffect(() => {
    console.log(warn);
  }, [warn]);

  const FirstName = (e) => {
    const value = e.target.value;
    setVal((prevState) => ({...prevState, firstName: value}));
    if (value === "") {
      setWarn((prevState) => ({...prevState, firstName: true}));
    } else {
      setWarn((prevState) => ({...prevState, firstName: false}));
    }
  }

  const LastName = (e) => {
    const value = e.target.value;
    setVal((prevState) => ({...prevState, lastName: value}));
    if (value === "") {
      setWarn((prevState) => ({...prevState, lastName: true}));
    } else {
      setWarn((prevState) => ({...prevState, lastName: false}));
    }
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const Email = (e) => {
    const value = e.target.value;

    setVal((prevState) => ({...prevState, email: value}));
    if (value === "") {
      setWarn((prevState) => ({...prevState, email: true}));
      setEmailMsg("Email Address cannot be empty.");
    } else if (!emailRegex.test(value)) {
      setWarn((prevState) => ({...prevState, email: true}));
      setEmailMsg("Looks like this is not an email.");
    } 
    else {
      setWarn((prevState) => ({...prevState, email: false}));
    }
  }

  const Password = (e) => {
    const value = e.target.value;
    setVal((prevState) => ({...prevState, password: value}));
    if (value === "") {
      setWarn((prevState) => ({...prevState, password: true}));
    } else {
      setWarn((prevState) => ({...prevState, password: false}));
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (val.firstName === "") {
      setWarn((prevState) => ({...prevState, firstName: true}));
    }
    if (val.lastName === "") {
      setWarn((prevState) => ({...prevState, lastName: true}));
    }
    if (val.email === "") {
      setWarn((prevState) => ({...prevState, email: true}));
      setEmailMsg("Email Address cannot be empty.");
    } else if (!emailRegex.test(val.email)) {
      setWarn((prevState) => ({...prevState, email: true}));
      setEmailMsg("Looks like this is not an email.");
    }
    if (val.password === "") {
      setWarn((prevState) => ({...prevState, password: true}));
    }
  }

  return(
    <Wrapper>
      <form>
        <Input className={warn.firstName ? "warn" : null} onChange={FirstName} type="text" placeholder="First Name" />
        {warn.firstName ? <Warn className="warn">First Name cannot be empty.</Warn> : null}
        <Input className={warn.lastName ? "warn" : null} onChange={LastName} type="text" placeholder="Last Name" />
        {warn.lastName ? <Warn className="warn">Last Name cannot be empty.</Warn> : null}
        <Input className={warn.email ? "warn" : null} onChange={Email} type="email" placeholder="Email Address" />
        {warn.email ? <Warn className="warn">{emailMsg}</Warn> : null}
        <Input className={warn.password ? "warn" : null} onChange={Password} type="password" placeholder="Password" />
        {warn.password ? <Warn className="warn">Password cannot be empty.</Warn> : null}
        <Button onClick={HandleSubmit}>CLAIM YOUR FREE TRIAL</Button>
        <p style={{color: "#bbb", fontSize: 12, textAlign: "center"}}>
          By clicking the button, you are agreeing to our 
          <a href="#!" style={{color: "#ff7a7a", fontWeight: "bold", textDecoration: "none"}}> Terms and Services</a>
        </p>
      </form>
    </Wrapper>
  );
}

export default Form;