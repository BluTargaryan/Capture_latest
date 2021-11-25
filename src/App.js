
import React from "react";
import GlobalStyle from "./components/GlobalStyle.js";
//Global style

//Import pages
import AboutUs from './pages/AboutUs.js';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

import MovieDetail from "./pages/MovieDetail.js";
//import nav
import Nav from "./components/Nav.js";
//Router
import {Routes, Route,useLocation} from 'react-router-dom';
//import animation
import {AnimatePresence, animatePresence} from 'framer-motion';



function App() {

  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
<AnimatePresence exitBeforeEnter>
<Routes location={location} key={location.pathname}>
      <Route path='/' element={<AboutUs/>} />
      <Route path='/work' element={<OurWork/>} />
      <Route path='/work/:id' element={<MovieDetail/>}/>
      <Route path='/contact' element={<ContactUs/>}/>

</Routes>
</AnimatePresence>
    </div>
  );
}

export default App;
