import React, { Component } from "react";

function Input( {name} ) {
  return (
    <div>
      <input class="input firstName" type="text" placeholder="First Name" />
      {/* <!-- <span class="error-message">First Name cannot be empty.</span> --> */}

      <input class="input lastName" type="text" placeholder="Last Name" />
      {/* <!-- <span class="error-message">Last Name cannot be empty.</span> --> */}

      <input class="input email" type="email" placeholder="Email Address" />
      {/* <!-- <span class="error-message">Email Address cannot be empty.</span> --> */}

      <input class="input password" type="password" placeholder="Password" />
      {/* <!-- <span class="error-message">Password cannot be empty.</span> --> */}
    </div>
  );
}

export default Input;