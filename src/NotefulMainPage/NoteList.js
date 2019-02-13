import React from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";
import NotefulContext from "../App/NotefulContext";

export default class NoteList extends React.Component {
  static contextType = NotefulContext;

  handleDelete(param){
    
    fetch(`http://localhost:9090/notes/${param}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    this.context.notes = this.context.notes.filter(i => i.id !== param);
    console.log(this.context.notes);
    

    
    
  }

  generateNoteList = () => {
    return this.context.notes.map(note => {
      return (
        <li key={note.id}>
          <Link to={`/note/${note.id}`}>
            <p>{note.name}</p>
          </Link>
          <button onClick ={(e) => this.handleDelete(note.id)}>Remove</button>
        </li>
      );
    });
  };

  render() {
    return <ul className="notes-list">{this.generateNoteList()}</ul>;
  }
}
