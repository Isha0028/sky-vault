import React from "react";
import Notes from "./Notes";
import { NoteState } from "../contextApi/notes/NotesState";


const Home = () => {
  return (
    <div>
      <NoteState>
      <Notes />
      </NoteState>
    
    </div>
  );
};

export default Home;
