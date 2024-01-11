import {React, useContext } from "react";
import NoteContext from "../contextApi/notes/NotesContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context= useContext(NoteContext);
  const {notes}= context;
  
  return (
    <>
    <AddNote/>
      <div className="row my-3">
        <h2>Your Notes</h2>
       {notes.map((note)=>{
             return <Noteitem key={note._id} note={note}/>  
        })}
      </div>
    </>
  );
};

export default Notes;