import { React, useContext, useEffect, useState } from "react";
import NoteContext from "../contextApi/notes/NotesContext";
import { useNavigate } from "react-router-dom";


const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNotes } = context;
  let navigate = useNavigate();
  const [note, setNotes] = useState({ title: "", description: "", tag:"" });

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
      addNotes()
    }
    else{
      navigate("/login")
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title,note.description,note.tag);
    setNotes({ title: "", description: "", tag:"" });
    props.showAlert("Note added successfully!!","success")
  };
  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
    <div  className="container my-4 text-center ">
      <h1>Hi {localStorage.getItem("user")}! Welcome to skyvault</h1>
      <p>Your Personal Notes on the cloud</p>
    </div>
    <div className="container my-3 card mb-3">
      <h2>Add your notes here-:</h2>
     

      <div className="container my-2 ">
        <form  onSubmit={handleClick}>
          <div className="form-group my-3">
            <label htmlFor="Input1">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={note.title}
              onChange={onChange}
              minLength={3} required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="Input2">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={note.description}
              onChange={onChange}
              minLength={8} required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="Input3">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn  my-3"
           
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddNote;
