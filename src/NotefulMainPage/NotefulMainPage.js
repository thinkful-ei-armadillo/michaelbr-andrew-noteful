import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import NoteList from './NoteList';
import NotefulFolder from './NotefulFolders';
import './NotefulMainPage.css';

export default class NotefulMainPage extends React.Component{
    
    render(){
        
        return(
            <div className="main-page">
                <NotefulMainHeading />
                <NotefulFolder folders={this.props.folders}/>
                <NoteList notes={this.props.notes} />
            </div>
        )
    }
}