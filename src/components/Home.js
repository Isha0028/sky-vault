import React from "react";
import Notes from "./Notes";
import { NoteState } from "../contextApi/notes/NotesState";


const Home = (props) => {
  const {showAlert}=props
  return (
    <div>
      <NoteState>
      <Notes showAlert={showAlert} />
      </NoteState>
    
    </div>
  );
};

export default Home;
