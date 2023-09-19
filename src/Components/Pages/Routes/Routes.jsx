import {Route, Routes as Ruta} from 'react-router-dom'
import Home from '../home/Home.jsx'
import About from "./../About/About.jsx";
import Contact from './../Contact/Contact.jsx';

const Routes = () => {
  return (
    <>
    <Ruta>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={< About/>}/>
      <Route path='/Contact' element={< Contact/>}/>
    </Ruta>
    </>
  )
}

export default Routes;
