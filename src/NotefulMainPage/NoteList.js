import React from "react";
import {Link} from 'react-router-dom';

export default class NoteList extends React.Component {
  generateNoteList = () => {
    return this.props.notes.map(note => {
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
    return <ul>{this.generateNoteList()}</ul>;
  }
}
