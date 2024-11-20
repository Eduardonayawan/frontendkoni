import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Hobbies from './pages/hobbies';
import Picture from './pages/picture';
import Education from './pages/education';



function App() {
  const [count, setCount] = useState(0)
  

  return (
    
     <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/picture" element={<Picture />} />
      </Routes>
    </div>
    </Router>
   
   
  
    
   
   
  )
}

export default App
