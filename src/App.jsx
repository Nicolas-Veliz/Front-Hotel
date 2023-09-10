import {Carousel} from 'react-bootstrap';
import Navbar from './Components/Navbar/Navbar';
import './Components/Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Carousel />
        
      </div>
    </>
  )
}

export default App;