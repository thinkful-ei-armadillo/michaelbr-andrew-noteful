import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import NoteList from './NoteList';
import NotefulFolder from './NotefulFolders';

export default class NotefulMainPage extends React.Component{
    
    render(){
        
        return(
            <div>
                <NotefulMainHeading />
                <NotefulFolder folders={this.props.folders}/>
                <NoteList notes={this.props.notes} />
            </div>
        )
    }
}