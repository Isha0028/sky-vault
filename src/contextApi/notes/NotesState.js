import { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitials = [];
  const [notes, setNotes] = useState(notesInitials);

  //Fetch all notes
  const getNotes = async () => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  //Add notes
  const addNotes = async (title, description, tag) => {
    if (!title || !description) {
      return;
    }
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });

  

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Delete notes
  const deleteNotes = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    const json = await response.json();
    console.log(json)

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Update notes
  const updateNotes = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
   console.log(json)

    //logic to update in client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
        break;
      }
     
    }
    setNotes(notes);
    getNotes();
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNotes, deleteNotes, updateNotes, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteState };
