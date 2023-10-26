import {Route, Routes as Ruta} from 'react-router-dom'
import Home from '../Pages/Home/Home.jsx'
import Login from '../Components/Login/Login.jsx'
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Record from '../Components/Record/Record.jsx';
import Administrator from '../Components/Administrator/Administrator.jsx';
import Inventory from '../Components/Administrator/Inventory/Inventory.jsx'

const Routes = () => {
  return (
    <>
    <Ruta>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element= {<Login />}/>
      <Route path="/Record" element={<Record />} />
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Administrator' element={<Administrator/>}/>
      <Route path='/Inventory' element={< Inventory/>}/>
    </Ruta>
    </>
  )
}

export default Routes;
