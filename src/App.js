import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <Projects/> */}
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>  {/*use index to begin on the main landing page */}
          <Route path = "/home" element = {<Home/>}/> {/*creates path home so that there is now a path that leads to home */}
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
