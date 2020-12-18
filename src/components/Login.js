import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
  if(json["status"] === "OK") {
      sessionStorage.setItem('bearer-token', json["token"]);

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
    <section className="login-bg">
      <div className="login-card">
        <div className="login-card__container">
          <h1 className="login-card__title">KORFLIX</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="login-card__field">
              <div className="login-card__control">
                <input 
                  className="login-card__input" 
                  type="text"
                  id="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="login-card__field">
              <div className="login-card__control">
                <input 
                  className="login-card__input" 
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="login-card__field">
              <p className="login-card__text">Don't have an account? <Link to="/register" className="login-card__link">Sign up here</Link></p>
            </div>
            <div className="login-card__field">
              <div className="login-card__control">
                <button type="submit" className="login-card__button login-card__button--success">
                  Login
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login;