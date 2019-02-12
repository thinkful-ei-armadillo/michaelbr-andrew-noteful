import React, { Component } from 'react';
import NotefulMainPage from '../NotefulMainPage/NotefulMainPage';
import {Route, Link} from 'react-router-dom';
import store from '../store'
import Note from '../NotefulMainPage/Note';
import Folder from '../NotefulMainPage/Folder';



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
      <div>
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
          const note = this.state.notes.find(val => val.id === folderId)
          const folder = this.state.folders.find(val => val.id === note.id)
          return (
            <Folder {...rProps} folder={folder} />
          )}}
         />

      </div>
    );
  }
}

export default App;
