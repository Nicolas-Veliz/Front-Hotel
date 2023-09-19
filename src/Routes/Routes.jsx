import {Route, Routes as Ruta} from 'react-router-dom'
import Home from '../Pages/Home/Home.jsx'
import About from "../Pages/About/About.jsx";
import Contact from '../Pages/Contact/Contact.jsx';

const Routes = () => {
  return (
    <>
    <Ruta>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Ruta>
    </>
  )
}

export default Routes;
