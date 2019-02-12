import React from "react";
import { Link } from "react-router-dom";
import './NotefulMainHeading.css'

export default class NotefulMainHeading extends React.Component {
  render() {
    return (
      <div className="main-header">
        <Link to="/">
          <h1>Noteful</h1>
        </Link>
      </div>
    );
  }
}
