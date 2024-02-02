import { React, useContext, useRef } from "react";
import NoteContext from "../contextApi/notes/NotesContext";
import Noteitem from "./Noteitem";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  let navigate = useNavigate();
  const context = useContext(NoteContext);
  const { notes, getNotes, updateNotes } = context;
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
       getNotes()
    }
    else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const ref =useRef(null);
  
  const updateNote = (currentNote) => {
    ref.current.click();
    setNotes({id: currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    
  };

  const [note, setNotes] = useState({id:"", etitle: "", edescription: "", etag:"" });

  const handleClick = (e) => {
    updateNotes(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Updated successfully!!","success")
  };

  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
     
      <button
      ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
   
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <div className="container my-3">
        <form>
          <div className="form-group my-3">
            <label htmlFor="Input1">Title</label>
            <input
              type="text"
              className="form-control"
              value={note.etitle}
              id="etitle"
              name="etitle"
              onChange={onChange}
              minLength={3} required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="Input2">Description</label>
            <input
              type="text"
              className="form-control"
              value={note.edescription}
              id="edescription"
              name="edescription"
              onChange={onChange}
              minLength={8} required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="Input3">Tag</label>
            <input
              type="text"
              className="form-control"
              value={note.etag}
              id="etag"
              name="etag"
              onChange={onChange}
            />
          </div>
        </form>
      </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button    disabled={note.etitle.length<3 || note.edescription.length<8} onClick={handleClick} type="button" className="btn btn-primary" data-bs-dismiss="modal" >
               Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div  className="container my-3 text-center ">
      <h1>Your Notes here</h1>
    </div>
      <div className="row my-3">
       
        <div className="container text-center">
        {notes.length===0 && 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem updateNote={updateNote} key={note._id} note={note} showAlert={props.showAlert} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
