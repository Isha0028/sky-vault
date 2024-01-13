import {React, useContext } from "react";
import NoteContext from "../contextApi/notes/NotesContext";

const Noteitem = (props) => {
  const context= useContext(NoteContext);
  const {deleteNotes}= context;
  const { note , updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNotes(note._id);
          props.showAlert("Deleted successfully!!","success")}}></i>
          <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
