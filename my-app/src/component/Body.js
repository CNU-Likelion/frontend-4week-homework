import { useState } from "react";

function Body() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const submit = () => {
        let hasError = false;

        if (!firstName) {
            setFirstNameError('First Name cannot be empty.');
            hasError = true;
        } else {
            setFirstNameError('');
        }

        if (!lastName) {
            setLastNameError('Last Name cannot be empty.');
            hasError = true;
        } else {
            setLastNameError('');
        }

        if (!email) {
            setEmailError('Email Address cannot be empty.');
            hasError = true;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password cannot be empty.');
            hasError = true;
        } else {
            setPasswordError('');
        }

        if (!hasError) {
            // Submit form
        }
    };

    return (
        <section className="section2">
            <p className="box"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
            <form className="form">
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={{ borderColor: firstNameError ? 'hsl(0, 100%, 74%)' : '' }} />
                {firstNameError && <p style={{ color: 'hsl(0, 100%, 74%)', textAlign: 'right', fontSize: '0.8rem', margin: 0 }}>{firstNameError}</p>}
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ borderColor: lastNameError ? 'hsl(0, 100%, 74%)' : '' }} />
                {lastNameError && <p style={{ color: 'hsl(0, 100%, 74%)', textAlign: 'right', fontSize: '0.8rem', margin: 0 }}>{lastNameError}</p>}
                <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ borderColor: emailError ? 'hsl(0, 100%, 74%)' : '' }} />
                {emailError && <p style={{ color: 'hsl(0, 100%, 74%)', textAlign: 'right', fontSize: '0.8rem', margin: 0 }}>{emailError}</p>}
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderColor: passwordError ? 'hsl(0, 100%, 74%)' : '' }} />
                {passwordError && <p style={{ color: 'hsl(0, 100%, 74%)', textAlign: 'right', fontSize: '0.8rem', margin: 0 }}>{passwordError}</p>}
                <button type="button" onClick={submit}>CLAIM YOUR FREE TRIAL</button>
                <small>By clicking the button, you are agreeing to our <strong id="point">Terms and Services</strong></small>
            </form>
        </section>
    );
}

export default Body;

