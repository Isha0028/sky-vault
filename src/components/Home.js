import React from "react";
import { NoteState } from "../contextApi/notes/NotesState";
import AddNote from "./AddNote";


const Home = (props) => {
  const {showAlert}=props
  return (
    <div>
      <NoteState>
      <AddNote showAlert={showAlert} />
      </NoteState>
    
    </div>
  );
};

export default Home;
