import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import NoteList from './NoteList';

export default class NotefulMainPage extends React.Component{
    render(){
        return(
            <div>
                <NotefulMainHeading />
                <NoteList notes={this.props.notes}/>
            </div>
        )
    }
}