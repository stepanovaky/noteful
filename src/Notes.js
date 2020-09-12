import React, { useState, useEffect, useContext } from 'react';
import NoteContext from './NoteContext';
import FolderContext from './FolderContext';
import ModifiedDate from './ModifiedDate';

function Notes({ match }) {
    const notes = useContext(NoteContext);
    const folders = useContext(FolderContext);

    const [ note, setNote ] = useState([]);
    const [ folder, setFolder ] = useState([]);
    const [ date, setDate ] = useState([]);


    useEffect(() => {
        findNoteThroughParams();
    }, [])


    const findNoteThroughParams = () => {
        const noteID = (match.params.noteid);
        
        const foundNote = notes.find(note => note.id === noteID);
        setNote(foundNote)

        const foundFolder = folders.find(folder => folder.id === foundNote.folderId)
        setFolder(foundFolder);

        const modifiedDate = foundNote.modified;
        console.log(foundNote);
        setDate(modifiedDate)
    }

    return (
        <div className="single-note" >
            <h2>{folder.name}</h2>
            <h2>{note.name}</h2>
            {console.log(date)}
            <ModifiedDate modifiedDate = {date} />
            <p>{note.content}</p>
        </div>
    )
}

export default Notes;