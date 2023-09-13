import {Routes, Route } from 'react-router-dom'
import Home from 'src\Components\Pages\Home\Home.jsx'


const Routes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      
    </Routes>
    </>
  )
}

export default Routes