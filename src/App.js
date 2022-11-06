import logo from './logo.svg';
import './App.css';
import Section1 from './Section1'
import Contact from './Contact'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Section1 />}/>
      <Route path='/contact' element={<Contact />}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
