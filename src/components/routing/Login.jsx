import React from 'react';
import { NavLink } from 'react-router-dom';
// import FormDemo from './FormDemo';
import HookFormDemo from './HookFormDemo';
// import Uncontrolled from './Uncontrolled';

export default function Login() {
  return (
    <div>
      <div className='primary-nav'>
        <ul>
          <li><NavLink to="/">Logo</NavLink></li>
          {/* <li><NavLink to="/dashboard/home">Login</NavLink></li> */}
        </ul>
      </div>
      <div id="card">
        <div id="card-content">
          <div id="card-title">
            <h2>LOGIN</h2>
            <div class="underline-title"></div>
          </div>
          <HookFormDemo />
        </div>
      </div>
      
      {/* <HookFormDemo /> */}
      {/* <Uncontrolled /> */}
    </div>
  );
}