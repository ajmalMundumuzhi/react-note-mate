import React, {useState, useEffect} from 'react';
import NoteItem from './NoteItem';

function NoteApp () {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');

    const addNote = () => {
        if(!input.trim()) return;
        setNotes([...notes, input]);
        setInput('');
    }

    const deleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Notes</h2>
            <input 
            type="text"
            value={input}
            placeholder='Add a new note'
            onChange={(e) => setInput(e.target.value)}
             />
            <button onClick={addNote}>Add Note</button>

            <ul>
                {notes.map((note, i ) => (
                    <NoteItem key={i} note = {note} onDelete = {() => deleteNote(i)} />
                ))}
            </ul>
            
        </div>
    )
}

export default NoteApp;