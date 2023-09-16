import {Route, Routes as Ruta} from 'react-router-dom'
import Home from '../home/Home.jsx'
import About from "../About/About.jsx";

const Routes = () => {
  return (
    <>
    <Ruta>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={< About/>}/>
    </Ruta>
    </>
  )
}

export default Routes;
