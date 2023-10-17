

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';
//import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
