import React from "react";
import signup from "./signup.png";

export default class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      return (
          <div className="success">
              <img src={signup} alt="gobears" />
              <h1>Password Accepted</h1>
              <h2>Thank you, <span className="nametag">{this.props.name}</span>!</h2>
          </div>
      )
  }
}
