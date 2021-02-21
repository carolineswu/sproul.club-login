import React from "react";
import Success from "./Success";
import resetpwd2 from "./resetpwd2.png";
const correctPassword = "password";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: "",
      passwordError: "",
      loginSuccessful: false,
    };
  }
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value, usernameError: "" });
    // if there was a usernameError, get rid of it once user starts to fill in a username
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
    if (!this.state.username) {
      this.setState({ usernameError: "Field left incomplete!" });
    }
    // username field gives a warning if user starts to fill in password without giving a username
  };
  checkPassword = (event) => {
    if (this.state.password !== correctPassword) {
      this.setState({ passwordError: "Password is incorrect!" });
    } // if password is incorrect, password field gives a warning
    else if (!this.state.username) {
      this.setState({ usernameError: "Field left incomplete!" });
      // if no username, username field gives a warning
    } else {
      this.setState({ loginSuccessful: true });
    }
  };
  render() {
    var errorTextStyle = {
      display: "flex",
      justifySelf: "start",
      position: "relative",
      marginLeft: "10px",
      marginTop: "5px",
      fontSize: "12px",
      color: "#DD0000",
    };
    var formErrorStyle = {
      borderColor: "#DD0000",
    };
    // if there is a valid username and correct password, show the success page
    // otherwise, stay on login page:
    return this.state.loginSuccessful ? (
      <Success name={this.state.username} />
    ) : (
      <div>
        <img src={resetpwd2} alt="gobears" />
        <h1>sproul.club login</h1>
        <div className="login">
          <div className="input">
            <input
              type="text"
              placeholder="Your Name (maximum 40 characters)"
              maxlength="40"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              style={this.state.usernameError ? formErrorStyle : null}
            />
            <div style={errorTextStyle}>{this.state.usernameError}</div>
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              style={this.state.passwordError ? formErrorStyle : null}
            />
            <div style={errorTextStyle}>{this.state.passwordError}</div>
          </div>
          <input
            type="button"
            value="Send"
            className="btn btn-primary"
            onClick={this.checkPassword}
          />
        </div>
      </div>
    );
  }
}
