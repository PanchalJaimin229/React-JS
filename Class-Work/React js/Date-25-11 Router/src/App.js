import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App"> 

    

    <BrowserRouter>

    <Link to="/home" className='text-dark fw-bold me-3'>Home</Link>
    <Link to="/about">About</Link>
    <Link to="/Services">Services</Link>
    
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
    </Routes>
    </BrowserRouter>

    
   
    </div>
  );
}

export default App;
