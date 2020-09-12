import React, { useState, useEffect} from 'react';
import Nav from './Nav';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import Folders from './Folders';
import Notes from './Notes';
import { FolderProvider } from './FolderContext';
import { NoteProvider } from './NoteContext';

function App () {

    const [ notes, setNotes ] = useState([]);
    const [ folders, setFolders ] = useState([]);

    useEffect( () => {
        fetchItems();

    }, [])

   const fetchItems = async () => {
       const fetchNotes = await fetch('http://localhost:9090/notes');
       const notesJSON = await fetchNotes.json();

       const fetchFolders = await fetch('http://localhost:9090/folders');
       const foldersJSON = await fetchFolders.json();

       setNotes(notesJSON);
       setFolders(foldersJSON);
   }


    return (
        <div className="App">
            <FolderProvider value = {folders}>
                <NoteProvider value={notes}>
                    <Nav />
                    <Route exact path = "/" component={HomePage} />
                    <Route path="/folder/:folderid" component={Folders} />
                    <Route path="/note/:noteid" component={Notes} />
                </NoteProvider>
            </FolderProvider>
                
            
            
        </div>
    )
}

export default App;