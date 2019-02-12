import React from "react";
import { Link } from "react-router-dom";

export default class NotefulMainHeading extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Noteful</h1>
        </Link>
      </div>
    );
  }
}
