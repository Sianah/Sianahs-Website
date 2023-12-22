import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home/>
      <Projects/> */}
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>  {/*use index to begin on the main landing page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
