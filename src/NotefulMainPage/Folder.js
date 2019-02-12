import React from "react";
import NotefulMainHeading from "./NotefulMainHeading";
import { Link } from "react-router-dom";

export default class Folder extends React.Component {
  generateFilteredNotes = () => {
    return this.props.filteredNotes.map(note => {
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
        <ul>
            {this.generateFilteredNotes()}
        </ul>
      </div>
    );
  }
}
