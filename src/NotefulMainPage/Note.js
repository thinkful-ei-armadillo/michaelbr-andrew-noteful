import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import { Link } from 'react-router-dom';

export default class Note extends React.Component{
   
    
    render(){
        console.log(this.props.rProps)
        return(
            <div>
                <NotefulMainHeading />
                <h3><Link to= {`/note/${this.props.note.id}`}>
                {this.props.note.name}
                </Link></h3>
                <p>{this.props.note.modified}</p>
                <p>{this.props.note.content}</p>
            </div>

        )
    }
}