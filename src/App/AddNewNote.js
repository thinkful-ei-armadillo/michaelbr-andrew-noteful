import React from 'react';

export default class AddNewNote extends React.Component{
    static contextType = NotefulContext;
  handleFolderSubmit = e => {
    e.preventDefault();
    const newFolder = { name: document.getElementById("folder-name").value };
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
      .then(() => {
        this.context.addFolder(newFolder);
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div>
        <h2>Create a note</h2>
        <form onSubmit={this.handleFolderSubmit}>
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