import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    return (
        <div className="login-wrapper">
          <h3 className="login__title">
            KORFLIX
          </h3>
          <div className="login__form">
            <div className="login__input-field">
              <input type="text" placeholder="Email" className="login__input"/>
            </div>
            <div className="login__input-field">
              <input type="password" placeholder="Password" className="login__input"/>
              <FontAwesomeIcon clasName="login__input-icon" icon={faEye}/>
            </div>
          </div>
          <div className="login__input-field">
          <Link to="/recover">
            <span>Forget password?</span>
          </Link>
          </div>
          <div className="login__btn">
            <button>Login</button>
          </div>
          <div className="login__input-field">
            <span>Don't have an account? </span>
            <Link>
             Sign up here
            </Link>
          </div>
        </div>
    )
}
