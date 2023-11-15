import {Form, Route, Routes as Ruta} from 'react-router-dom';
import Home from '../Pages/Home/Home.jsx';
import Login from '../Components/Login/Login.jsx';
import Record from '../Components/Record/Record.jsx';
import Form from '../Components/Booking/Form.jsx'
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx'
import Administrator from '../Components/Administrator/Administrator.jsx';
import Inventory from '../Components/Administrator/Inventory/Inventory.jsx';

const Routes = () => {
  return (
    <>
    <Ruta>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element= {<Login />}/>
      <Route path="/Record" element={<Record />} />
      <Route path='/Form' element={<Form />}/>
      <Route path='/Inventory' element={< Inventory/>}/>
      <Route path='/Administrator' element={<Administrator/>}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/About' element={<About />}/>
    </Ruta>
    </>
  )
}

export default Routes;
