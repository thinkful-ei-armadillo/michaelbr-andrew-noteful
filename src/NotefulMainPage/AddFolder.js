import React from "react";
import NotefulContext from "../App/NotefulContext";

export default class AddFolder extends React.Component {
  static contextType = NotefulContext;
  state = { folderName: "", folderNameValid: false, validationMessages: {} };

  validateFolderName = e => {
    e.preventDefault();
    const folderName = { name: document.getElementById("folder-name").value };
    const validationMessages = {...this.state.validationMessages};
    let folderNameValid = true;

    if (folderName.length === 0) {
      validationMessages.folderName =
        "Folder name must be at least 1 character long.";
      folderNameValid = false;
    }
    this.setState({ validationMessages, folderNameValid });
    if(this.state.folderNameValid){
        this.handleFolderSubmit(folderName)
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
    return (
      <div>
        <h2>Create a folder</h2>
        <form onSubmit={e => this.validateFolderName(e)}>
          <label>
            Name
            <input type="text" id="folder-name" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
