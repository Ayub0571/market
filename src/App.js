import React from "react";
import {Routes, Route } from 'react-router-dom';
import {Blog} from './Pages/Blog';
import About from './Pages/About';
import {Not} from './Pages/Not';
import {Layout} from './Routs/Layout';
import {Home} from './Pages/Home';
import Fish from './Pages/Fish'

function App() {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='posts' element={<Blog/>}/>
          <Route path='*' element={<Not/>}/>
          <Route path='fish' id="#fish" element={<Fish/>}/>
        </Route>
      </Routes>

          

      
      
    </div>
  );
}

export default App;





