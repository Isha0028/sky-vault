const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const { body, validationResult } = require("express-validator");
const router = express.Router();

//ROUTE-1:  Get all the notes of  user using: GET "/api/notes/getuser". Login required.
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});


//ROUTE-2:  Add notes of user using: POST "/api/notes/addnotes". Login required.
router.post(
    "/addnotes", fetchuser,
    [
      body("title", 'Enter a valid title').isLength({ min: 3 }),
      body("description",'Description must be of atleast 8 characters').isLength({ min: 8 })
    ],
    async(req, res) => {

      try {
      const {title, description, tag}= req.body;
      //If there are errors ,then return bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
       return res.status(400).json({errors: errors.array()});
      }

        const note= new Notes({
          title, description,tag, user: req.user.id
        })
        const savedNotes= await note.save()
       res.json(savedNotes);
        
      } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
      }
    
    
    });


    
//ROUTE-3:  Update the notes of user using: PUT "/api/notes/updatenotes". Login required.
router.put(
  "/updatenotes/:id", fetchuser, async(req, res) => {

    const {title, description, tag}= req.body;
    try{
    //create a newNote object
    let newNote= {};
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}

    //find a note to be updated and update it
  let note = await Notes.findById(req.params.id);
  if(!note){
    return res.status(404).send('Not found')
  }

  if(note.user.toString() !== req.user.id){
    return res.status(401).send('Not allowed')
  }

note= await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
res.json({note});}

catch (error) {
  console.error(error.message);
  res.status(500).send("Internal server error");
}

  });


//ROUTE-4:  Delete notes of user using: DELETE "/api/notes/deletenotes". Login required.
router.delete(
  "/deletenotes/:id", fetchuser, async(req, res) => {
    try{
  //find a note to be deleted and delete it
  let note = await Notes.findById(req.params.id);
  if(!note){
    return res.status(404).send('Not found')
  }
// Allow  deletion only if note belongs to user
  if(note.user.toString() !== req.user.id){
    return res.status(401).send('Not allowed')
  }

note= await Notes.findByIdAndDelete(req.params.id)
res.json({"Success": "Note has been deleted",note:note});
}

catch (error) {
  console.error(error.message);
  res.status(500).send("Internal server error");
}

  });



module.exports = router;
