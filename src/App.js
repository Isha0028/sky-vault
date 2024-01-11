
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Alert message="SkyVault- your notes on clouds"/>
      <div className='container'>
      <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
        </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
