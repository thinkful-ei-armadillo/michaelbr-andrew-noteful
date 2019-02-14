import React, { Component } from "react";
import NotefulMainPage from "../NotefulMainPage/NotefulMainPage";
import { Route } from "react-router-dom";
// import store from "../store";
import Note from "../NotefulMainPage/Note";
import Folder from "../NotefulMainPage/Folder";
import "./App.css";
import NotefulContext from "./NotefulContext";
import AddFolder from "../NotefulMainPage/AddFolder";
import AddNewNote from "./AddNewNote";
import ErrorPage from "./ErrorPage";
import propTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: []
    };
  }

  deleteNote(id) {
    const newNoteList = this.state.notes.filter(i => i.id !== id);
    this.setState({
      notes: newNoteList
    });
  }

  addNewFolder(id) {
    const newFolderList = [...this.state.folders];
    newFolderList.push(id);
    this.setState({
      folders: newFolderList
    });
  }

  addNewNote(note) {
    const newNotes = [...this.state.notes];
    newNotes.push(note);
    this.setState({
      notes: newNotes
    });
  }

  componentDidMount() {
    const folderUrl = "http://localhost:9090/folders";
    const noteUrl = "http://localhost:9090/notes";

    fetch(folderUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.message);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          folders: data
        });
      })
      .catch(err => console.log(err.message));

    fetch(noteUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.message);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          notes: data
        });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    return (
      <NotefulContext.Provider
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          delete: e => this.deleteNote(e),
          addFolder: e => this.addNewFolder(e),
          addNote: e => this.addNewNote(e)
        }}
      >
        <div className="app-container">
          <ErrorPage>
            <Route
              exact
              path="/"
              render={rProps => <NotefulMainPage history={rProps.history} />}
            />
            <Route
              exact
              path="/note/:noteId"
              render={rProps => {
                const { noteId } = rProps.match.params;
                return <Note {...rProps} id={noteId} />;
              }}
            />

            <Route
              exact
              path="/folder/:folderId"
              render={rProps => {
                const { folderId } = rProps.match.params;

                return <Folder {...rProps} folderId={folderId} />;
              }}
            />
            <Route
              exact
              path="/add-folder"
              render={rProps => {
                return <AddFolder {...rProps} />;
              }}
            />
            <Route
              exact
              path="/new-note"
              render={rProps => {
                return <AddNewNote {...rProps} />;
              }}
            />
          </ErrorPage>
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
