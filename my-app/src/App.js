import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleClaimFreeTrial = () => {
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");

    let hasError = false;

    if (!firstName.trim()) {
      setFirstNameError("First Name cannot be empty");
      hasError = true;
    }

    if (!lastName.trim()) {
      setLastNameError("Last Name cannot be empty");
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError("Email cannot be empty");
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError("Password cannot be empty");
      hasError = true;
    }
  };

  return (
    <>
      <main className="main">
        <section className="section">
          <article className="section_guide">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </article>

          <article className="section_use">
            <p className="use_add">
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </p>

            <div className="use_input">
              <input
                type="text"
                className="input_firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
              {firstNameError && (
                <p className="error-message">{firstNameError}</p>
              )}
              <input
                type="text"
                className="input_lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              {lastNameError && (
                <p className="error-message">{lastNameError}</p>
              )}
              <input
                type="email"
                className="input_email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              {emailError && <p className="error-message">{emailError}</p>}
              <input
                type="password"
                className="input_password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}

              <button type="button" onClick={handleClaimFreeTrial}>
                CLAIM YOUR FREE TRIAL
              </button>

              <p className="use_input_p">
                By clicking the button, you are agreeing to our{" "}
                <span className="font-red">Terms and Services</span>
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
