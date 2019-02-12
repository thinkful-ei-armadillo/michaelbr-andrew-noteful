import React, { Component } from 'react';
import NotefulMainPage from '../NotefulMainPage/NotefulMainPage';
import {Route, Link} from 'react-router-dom';
import store from '../store'
import Note from '../NotefulMainPage/Note';
import Folder from '../NotefulMainPage/Folder';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: store.notes,
      folders: store.folders,
      
    }
  }

  updateCurrentId(id){
    this.setState({
      currentItem: id
    })

  }

  render() {
    return (
      <div className="app-container">
        <Route 
          exact path='/' 
          render={() => <NotefulMainPage notes={this.state.notes} folders={this.state.folders}/>}
        />
        <Route exact path='/note/:noteId' 
        render={(rProps) => {
          const {noteId} = rProps.match.params
          const note = this.state.notes.find(val => val.id === noteId)
          //const folder = this.state.folders.find(val => val.id === note.id)
          return (
          <Note {...rProps} note={note} />
          )}}
        />

        <Route exact path='/folder/:folderId'
        render={(rProps) => {
          const {folderId} = rProps.match.params
          const filteredNotes = this.state.notes.filter(val => val.folderId === folderId)
          // const folder = this.state.folders.find(val => val.id === note.id)
          return (
            <Folder {...rProps} filteredNotes={filteredNotes} folderId={folderId} />
          )}}
         />

      </div>
    );
  }
}

export default App;
