import React from "react";
import NotefulContext from "../App/NotefulContext";
import PropTypes from 'prop-types';

export default class AddNewNote extends React.Component {
  static contextType = NotefulContext;
  state = { noteName: "", noteNameValid: true, validationMessages: {} };

  validateNoteName = e => {
    e.preventDefault();
    const noteName = {
      name: document.getElementById("note-name").value,
      content: document.getElementById("note-content").value,
      folderId: document.getElementById("note-folder-id").value,
      modified: new Date().toDateString()
    };
    const validationMessages = { ...this.state.validationMessages };
    let noteNameValid = true;

    if (noteName.name.length === 0) {
      validationMessages.noteName =
        "Note name must be at least 1 character long.";
      noteNameValid = false;
      this.setState({ validationMessages, noteNameValid });
    }
    if (noteName.content.length === 0) {
      validationMessages.noteName = "Content must be filled in.";
      noteNameValid = false;
      this.setState({ validationMessages, noteNameValid });
    } else {
      noteNameValid = true;
      this.setState({ noteNameValid });
      this.handleNewNoteSubmit(noteName);
    }
  };

  handleNewNoteSubmit = newNote => {
    fetch("http://localhost:9090/notes", {
      method: "POST",
      headers: {
        "content-type": "application/JSON"
      },
      body: JSON.stringify(newNote)
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.addNote(newNote);
        this.props.history.push(`/folder/${newNote.folderId}`);
      });
  };
  render() {
    const { validationMessages } = this.state;
    const { folders = [] } = this.context;
    return (
      <div>
        <h2>Create a note</h2>
        <form onSubmit={this.validateNoteName}>
          <label>
            Name
            <input type="text" id="note-name" />
          </label>
          <label>
            Content
            <input type="text" id="note-content" />
          </label>
          <label>
            <select id="note-folder-id">
              <option value={null}>...</option>
              {folders.map(folder => (
                <option key={folder.id} value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Submit</button>
          {validationMessages.noteName && (
            <p className="error">{validationMessages.noteName}</p>
          )}
        </form>
      </div>
    );
  }
}
AddNewNote.propTypes = {
  noteName: PropTypes.string.isRequired,
  noteNameValid: PropTypes.bool.isRequired,
  validationMessages: PropTypes.object
}