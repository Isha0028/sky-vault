import { useState } from "react";
import NoteContext from "./NotesContext";

const NoteState=(props)=>{
    const notesInitials=
        [
            {
              "_id": "64e2226222a270420a4e6bd66",
              "user": "64e1a3bbecddaad6b312db15",
              "title": "Work to do-updated1",
              "description": "test tomorrow---done-----2",
              "tag": "personal",
              "date": "2023-08-20T14:25:38.531Z",
              "__v": 0
            },
            {
              "_id": "64e2226222a420420a4e6bd66",
              "user": "64e1a3bbecddaad6b312db15",
              "title": "Work to do-updated1",
              "description": "test tomorrow---done-----2",
              "tag": "personal",
              "date": "2023-08-20T14:25:38.531Z",
              "__v": 0
            },
            {
              "_id": "64e2226222a20420a44e6bd66",
              "user": "64e1a3bbecddaad6b312db15",
              "title": "Work to do-updated1",
              "description": "test tomorrow---done-----2",
              "tag": "personal",
              "date": "2023-08-20T14:25:38.531Z",
              "__v": 0
            },
            {
              "_id": "64e2226g222a20420a4e6bd66",
              "user": "64e1a3bbecddaad6b312db15",
              "title": "Work to do-updated1",
              "description": "test tomorrow---done-----2",
              "tag": "personal",
              "date": "2023-08-20T14:25:38.531Z",
              "__v": 0
            },
            {
              "_id": "650c7076f66035f936b20h184",
              "user": "64e1a3bbecddaad6b312db15",
              "title": "Work to do",
              "description": "test tomorrow",
              "tag": "General",
              "date": "2023-09-21T16:33:58.899Z",
              "__v": 0
            }
          ];

        const [notes,setNotes]= useState(notesInitials);

        //Add notes
        const addNotes=(title,description,tag)=>{
          //TODO: API CALL
          const note=   {
            "_id": "650c7076f6896035f936b20h184",
            "user": "64e1a3bbecddaad6b312db15",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-09-21T16:33:58.899Z",
            "__v": 0
          };

          setNotes(notes.concat(note));
        }

        //Delete notes
        const deleteNotes=(id)=>{
          const newNotes= notes.filter((note)=>{return note._id !==id});
          setNotes(newNotes);
        }

        //Update notes
        const updateNotes=()=>{
          
        }

    
 return ( 
     <NoteContext.Provider value={{notes, addNotes,deleteNotes,updateNotes}}>
        {props.children}
    </NoteContext.Provider>)
}

export {NoteState};