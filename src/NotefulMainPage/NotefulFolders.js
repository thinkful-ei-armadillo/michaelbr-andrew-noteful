import React from "react";
import { Link } from "react-router-dom";

export default class NotefulFolder extends React.Component{

    generateFolderList = () => {
       return this.props.folders.map((folder) => {
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
            <div>
                <ul>
                    {this.generateFolderList()}
                </ul>
            </div>
        )
    }
}