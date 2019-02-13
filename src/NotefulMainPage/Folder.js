import React from "react";
import NotefulMainHeading from "./NotefulMainHeading";
import { Link } from "react-router-dom";
import NotefulContext from "../App/NotefulContext";

export default class Folder extends React.Component {
  static contextType = NotefulContext;
  generateFilteredNotes = () => {
    const filteredNotes = this.context.notes.filter(
      val => val.folderId === this.props.folderId
    );
    return filteredNotes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/note/${note.id}`}>
            <p>{note.name}</p>
          </Link>
          <p>{note.modified}</p>
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <NotefulMainHeading />
        <ul>{this.generateFilteredNotes()}</ul>
      </div>
    );
  }
}
