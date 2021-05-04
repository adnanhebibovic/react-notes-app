import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import NotesContext from '../context/notes-context'

const NoteForm = () => {

    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
    
        dispatch({
          type: 'ADD_NOTE', 
          note: {
            id: uuidv4(),
            title: title,
            body: body
          }
        })

        setTitle('')
        setBody('')
    }

    return (
        <form onSubmit={(e) => addNote(e)}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
            <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
            <button type="submit">Add note</button>
        </form>
    )
}

export default NoteForm