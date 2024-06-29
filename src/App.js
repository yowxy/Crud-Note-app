
import { useState } from 'react';
import './index.css'

function App() {
  const [notes, setNotes] = useState([
    {
      id:'1',
      textt:'Helloo',
    }
  ]);
  const [inputNote, setInputNote] = useState("")
  function handleInputChange(e){
   setInputNote(e.target.value);
  }

  function handleInputSubmit (e){

    e.preventDefault()

    if(inputNote.trim() !== ""){
      const newNote = {
        id: new Date().getTime(),
        textt: inputNote
      }

      setNotes([...notes, newNote]);
      setInputNote("")
    }
  }


  function handleDeleteNote (id){
      const updateNotes = notes.filter((note) => note.id !== id);
      setNotes(updateNotes);
  }
  return (
    <div className='App'>
      <h1>Notes</h1>
      <form className='note-input' onSubmit={handleInputSubmit}>
        <input type='text' placeholder='Add a some text' value={inputNote}  onChange={handleInputChange}/>
        <button >Add button</button>
      </form>
      <ul className='note-list'>
          {notes.map((note) => (
            <li key={note.id}>
            {note.textt}
            <button onClick={ ()=>  handleDeleteNote(note.id)}>Delete</button>
            
            </li>
         
          ))}
      </ul>
    </div>
  );
}

export default App;
