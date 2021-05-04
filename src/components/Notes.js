import React, { useEffect, useReducer } from 'react';

import notesReducer from '../reducers/notes'

import NoteList from './NoteList'
import NoteForm from './NoteForm'

import NotesContext from '../context/notes-context'

const Notes = () => {
  const [notes, dispatch] = useReducer(notesReducer, [])

  useEffect(() => {
    dispatch({ 
      type: 'POPULATE_NOTES', 
      notes: JSON.parse(localStorage.getItem('notes')) || [] 
    })
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <NoteForm></NoteForm>
      <NoteList></NoteList>
    </NotesContext.Provider>
  )
}

export default Notes