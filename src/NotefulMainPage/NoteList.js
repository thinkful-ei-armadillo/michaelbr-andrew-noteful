import React from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";
import NotefulContext from "../App/NotefulContext";

export default class NoteList extends React.Component {
  static contextType = NotefulContext;

  handleDelete(param) {
    fetch(`http://localhost:9090/notes/${param}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error(res.message);

        return res.json();
      })
      .then(data => {
        this.context.delete(param);
        this.props.history.push("/");
      })

      .catch(err => console.error(err.message));
  }

  generateNoteList = () => {
    return this.context.notes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/note/${note.id}`}>
            <p>{note.name}</p>
          </Link>
          <button onClick={e => this.handleDelete(note.id)}>Remove</button>
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul className="notes-list">{this.generateNoteList()}</ul>
        <Link to="/new-note">
          <button type="click">Add New Note</button>
        </Link>
      </div>
    );
  }
}
