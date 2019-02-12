import React, { Component } from 'react';
import NotefulMainPage from '../NotefulMainPage/NotefulMainPage';
import {Route, Link} from 'react-router-dom';
import store from '../store'
import Note from '../NotefulMainPage/Note';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: store.notes,
      folders: store.folders,
      
    }
  }
  render() {
    return (
      <div>
        <Route 
          exact path='/' 
          render={() => <NotefulMainPage notes={this.state.notes} />}
        />
        <Route exact path='/note/:noteId' 
        render={() => <Note notes={this.state.notes} noteId={noteId}/>}
        />
      </div>
    );
  }
}

export default App;
