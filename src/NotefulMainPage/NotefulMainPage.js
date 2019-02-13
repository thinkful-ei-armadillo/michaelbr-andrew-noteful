import React from 'react';
import NotefulMainHeading from './NotefulMainHeading';
import NoteList from './NoteList';
import NotefulFolder from './NotefulFolders';
import './NotefulMainPage.css';
import NotefulContext from '../App/NotefulContext';

export default class NotefulMainPage extends React.Component{
    
    static contextType = NotefulContext;
    
    render(){

        return(
            <div className="main-page">
                <NotefulMainHeading />
                <NotefulFolder />
                <NoteList />
            </div>
        )
    }
}