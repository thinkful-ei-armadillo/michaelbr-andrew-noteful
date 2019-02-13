import React, { Component } from "react";
import NotefulMainPage from "../NotefulMainPage/NotefulMainPage";
import { Route } from "react-router-dom";
import store from "../store";
import Note from "../NotefulMainPage/Note";
import Folder from "../NotefulMainPage/Folder";
import "./App.css";
import NotefulContext from "./NotefulContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: store.notes,
      folders: store.folders
    };
  }

  updateCurrentId(id) {
    this.setState({
      currentItem: id
    });
  }

  render() {
    return (
      <NotefulContext.Provider
        value={{ folders: this.state.folders, notes: this.state.notes }}
      >
        <div className="app-container">
          <Route exact path="/" render={() => <NotefulMainPage />} />
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
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default App;
