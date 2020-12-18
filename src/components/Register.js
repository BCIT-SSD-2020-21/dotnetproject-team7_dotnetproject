import React, { Component } from "react";
import validateForm from "./Validation";

 
class Register extends Component {
    //state variables for form inputs and errors
    state = {
        email: "",
        password: "",
        confirmpassword: "",
        //state variables
        errors: {
            blankfield: false,
            matchedpassword: false,
        },
    };
    clearErrors = () => {
        this.setState({
            errors: {
                blankfield: false,
                matchedpassword: false,
            },
        });
    };
    handleSubmit = async event => {
        //Prevent page reload
        event.preventDefault();
        this.clearErrors();
        //in the handleSubmit just before the fetch...
        const error = validateForm(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error },
            });
        } else {
            // do the fetch ...
            //Integrate Auth here on valid form submission
            fetch("https://korflixapi.azurewebsites.net/Auth/Register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Email: this.state.email,
                    Password: this.state.password,
                    ConfirmPassword: this.state.confirmpassword,
                }),
            })
                // Response received.
                .then(response => response.json())
                // Data retrieved.
                .then(json => {
                    console.log(JSON.stringify(json));
                    // Store token with session data.
                    if (json["status"] === "OK") {
                        sessionStorage.setItem("bearer-token", json["token"]);
                        console.log(sessionStorage.getItem("bearer-token"));
                    } else {
                        // error message handling
                        console.log("Error in Auth/Register");
                    }
                })
                // Data not retrieved.
                .catch(function (error) {
                    console.log(error);
                });
            //Perform Validation here
            //Integrate Auth here on valid form submission
        }
    };
    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
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
                    <div className="login-card__control">
                                <input
                                    className="login-card__input"
                                    type="password"
                                    id="confirmpassword"
                                    placeholder="Confirm password"
                                    value={this.state.confirmpassword}
                                    onChange={this.onInputChange}
                                />
                            </div>
                        </div>
                  <div className="login-card__field">
                    <div className="login-card__control">
                      <button type="submit" className="login-card__button login-card__button--success">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
                </div>
              </div>
           
            </section>
                    
        );
    }
}
export default Register;