import {Route, Routes as Ruta} from 'react-router-dom'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Administrator from '../Components/Administrator/Administrator.jsx';

const Routes = () => {
  return (
    <>
    <Ruta>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Administrator' element={< Administrator/>}/>
    </Ruta>
    </>
  )
}

export default Routes;
