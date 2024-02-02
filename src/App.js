
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Notes from './components/Notes';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Signup from './components/Signup';
import { useState } from 'react';
import { NoteState } from './contextApi/notes/NotesState';
import Profile from './components/Profile';


function App() {
  const [alert, setAlert]= useState(null);
 

  const showAlert=(message, type)=>{
     setAlert({
      msg:message,
      type: type
     })
  
     setTimeout(() => {
      setAlert(null)
     }, 2000);
  }

  return (
    <div className="App">
      <Router>
      <Navbar/>
     <Alert alert={alert}/>
      <div className='container'>
      <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>}>
          </Route>
          <Route exact path="/notes" element={<NoteState><Notes showAlert={showAlert}/></NoteState>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/profile" element={<Profile/>}>
          </Route>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}>
          </Route>
          <Route exact path="/signUp" element={<Signup showAlert={showAlert}/>}>
          </Route>
        </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
