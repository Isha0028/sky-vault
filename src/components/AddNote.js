import { React, useContext, useState } from "react";
import NoteContext from "../contextApi/notes/NotesContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNotes } = context;

  const [note, setNotes] = useState({ title: "", description: "", tag:"" });

  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title,note.description,note.tag);
  };
  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>

      <div className="container my-3">
        <form>
          <div className="form-group my-3">
            <label htmlFor="Input1">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="Input2">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="Input3">Tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
