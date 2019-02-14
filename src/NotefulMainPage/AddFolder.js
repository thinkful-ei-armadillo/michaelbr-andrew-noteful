import React from "react";
import NotefulContext from "../App/NotefulContext";
import propTypes from 'prop-types';

export default class AddFolder extends React.Component {
  static contextType = NotefulContext;
  state = { folderName: "", folderNameValid: true, validationMessages: {} };

  validateFolderName = e => {
    e.preventDefault();
    const folderName = { name: document.getElementById("folder-name").value };
    console.log(folderName.name.length);
    const validationMessages = { ...this.state.validationMessages };
    let folderNameValid = true;

    if (folderName.name.length === 0) {
      validationMessages.folderName =
        "Folder name must be at least 1 character long.";
      folderNameValid = false;
      this.setState({ validationMessages, folderNameValid });
    } else {
      folderNameValid = true;
      this.setState({ folderNameValid });
      this.handleFolderSubmit(folderName);
    }
  };

  handleFolderSubmit = newFolder => {
    fetch("http://localhost:9090/folders", {
      method: "POST",
      headers: {
        "content-type": "application/JSON"
      },
      body: JSON.stringify(newFolder)
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(newFolder => {
        this.context.addFolder(newFolder);
        this.props.history.push("/");
      });
  };
  render() {
    const { validationMessages } = this.state;
    return (
      <div>
        <h2>Create a folder</h2>
        <form onSubmit={e => this.validateFolderName(e)}>
          <label>
            Name
            <input type="text" id="folder-name" />
          </label>
          <button type="submit">Submit</button>
          {validationMessages.folderName && (
            <p className="error">{validationMessages.folderName}</p>
          )}
        </form>
      </div>
    );
  }
}
AddFolder.propTypes = {
  folderName: propTypes.string.isRequired,
  folderNameValid: propTypes.bool.isRequired,
  validationMessages: propTypes.object
}
