import React from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";
import NotefulContext from "../App/NotefulContext";

export default class NoteList extends React.Component {
  static contextType = NotefulContext;
  generateNoteList = () => {
    return this.context.notes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/note/${note.id}`}>
            <p>{note.name}</p>
          </Link>
          <button>Remove</button>
        </li>
      );
    });
  };

  render() {
    return <ul className="notes-list">{this.generateNoteList()}</ul>;
  }
}
