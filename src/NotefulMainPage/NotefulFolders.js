import React from "react";
import { Link } from "react-router-dom";
import './NotefulFolders.css';
import NotefulContext from '../App/NotefulContext';

export default class NotefulFolder extends React.Component{
    static contextType = NotefulContext;
    generateFolderList = () => {
       return this.context.folders.map((folder) => {
            return(
                <li key = {folder.id}>
                <Link to= {`/folder/${folder.id}`}>
                {folder.name}
                </Link>
                </li>
        )})
    }

    render(){
        return(
            <div className="folders-list">
                <ul>
                    {this.generateFolderList()}
                </ul>
            </div>
        )
    }
}