import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import { Link } from 'react-router-dom';

export default class Folder extends React.Component{
    render(){
        return(
            <div>
                <NotefulMainHeading />
                <Link to= {`/folder/${this.props.folder.id}`}></Link>
            </div>
        )
    }
}
