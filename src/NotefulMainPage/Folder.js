import React from "react";
import NotefulMainHeading from "./NotefulMainHeading";
import { Link } from "react-router-dom";
import NotefulContext from "../App/NotefulContext";

export default class Folder extends React.Component {
  static contextType = NotefulContext;
  handleDelete = id => {
    fetch(`http://localhost:9090/notes/${id}`, {
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
        this.context.delete(id);
        this.props.history.push("/");
      })

      .catch(err => console.error(err.message));
  };
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
          <button
            onClick={() => {
              this.handleDelete(note.id);
            }}
          >
            Remove
          </button>
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
