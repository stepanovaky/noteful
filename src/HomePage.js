import React, { useContext } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import NoteContext from './NoteContext';
import FolderContext from './FolderContext';
import ModifiedDate from './ModifiedDate';



function HomePage() {

    const notes = useContext(NoteContext);
    const folders = useContext(FolderContext);

   
   const listNotes = 
       notes.map(note => 
       <li key={note.id}><Link to={`/note/${note.id}`} >{note.name} date modified <ModifiedDate modifiedDate = {note.modified} /></Link></li>)

    const listFolders = folders.map(folder =>
        <li key={folder.id}><Link to={`/folder/${folder.id}`} >{folder.name}</Link></li>)
   

    return (
        <div className="home-page" >

            <ul>
                {listFolders}
            </ul>
            <ul>
                {listNotes}
            </ul>
        </div>
    )
}

export default HomePage;