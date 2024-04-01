import './App.css';
import React from 'react';
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <div className='content'>
        <h1>Learn to code by <br></br>watching others</h1>
        <p>See how experienced developers solve problems in real-time.<br></br>
          Watching scripted tutorials is great,
          but understanding how <br></br> developers think is invaluable.</p>
      </div>
      <div className='signup'>
        <div className='signup__pricing'>
          <p className='Price'>
            <strong>Try it free 7 days</strong>
            then $20/mo. thereafter
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;