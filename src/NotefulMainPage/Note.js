import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import { Link } from 'react-router-dom';
import NotefulContext from '../App/NotefulContext';

export default class Note extends React.Component{
   static contextType = NotefulContext;
    generateBackButton = () => {
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Back</button>
            </div>
        );
    }
    
    
    render(){
        const notes = this.context.notes;
        const note = notes.find((item) => item.id === this.props.id);

        return(
            <div>
                <NotefulMainHeading />
                {this.generateBackButton()}
                <h3><Link to= {`/note/${note.id}`}>
                {note.name}
                </Link></h3>
                <p>{note.modified}</p>
                <p>{note.content}</p>
            </div>

        )
    }
}