// import React from 'react'
// import {Link} from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-solid-svg-icons'

// export default function Login() {
//     return (
//         <div className="login-wrapper">
//           <h3 className="login__title">
//             KORFLIX
//           </h3>
//           <div className="login__form">
//             <div className="login__input-field">
//               <input type="text" placeholder="Email" className="login__input"/>
//             </div>
//             <div className="login__input-field">
//               <input type="password" placeholder="Password" className="login__input"/>
//               <FontAwesomeIcon clasName="login__input-icon" icon={faEye}/>
//             </div>
//           </div>
//           <div className="login__input-field">
//           <Link to="/recover">
//             <span>Forget password?</span>
//           </Link>
//           </div>
//           <div className="login__btn">
//             <button>Login</button>
//           </div>
//           <div className="login__input-field">
//             <span>Don't have an account? </span>
//             <Link to="/register">
//              Sign up here
//             </Link>
//           </div>
//         </div>
//     )
// }
import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async event => {
    //Prevent page reload
    event.preventDefault();

    //Form validation
    
    //Integrate Auth here on valid form submission
    //Integrate Auth here on valid form submission
fetch('https://korflixapi.azurewebsites.net/Auth/Login', {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      Email: this.state.email,
      Password: this.state.password
  })
})
// Response received.
.then(response => response.json())
// Data retrieved.
.then(json => {
  console.log(JSON.stringify(json));
  // Store token with session data.
  if(json["status"]=="OK") {
      sessionStorage.setItem('bearer-token', json["token"]);
      console.log(sessionStorage.getItem('bearer-token'))
  }
  else {
      // error message handling
      console.log('Error in Auth/Login');
  }
})
// Data not retrieved.
.catch(function (error) {
  console.log(error);
})
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    return (
      <section className="section auth">
        <div className="container">
          <h1>Log in</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="text"
                  id="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <input 
                  className="input" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Login;