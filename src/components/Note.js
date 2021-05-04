import React, { useContext } from 'react'

import NotesContext from '../context/notes-context'

import useMousePosition from '../hooks/useMousePosition'

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext)

    const position = useMousePosition()

    const removeNote = (id) => {
        dispatch({
          type: 'REMOVE_NOTE',
          id
        })
      }
    
    return (
      <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={() => removeNote(note.id)}>Remove note</button>
        <p>{position.x}, {position.y}</p>
      </div>
    )
}

export default Note
