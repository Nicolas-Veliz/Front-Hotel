import Carousel from 'react-bootstrap/Carousel';

import './../Carousel/style.css'
import './../Carousel/Carousel.jsx'


function Carrusel() {

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Frente Hotel.jpg'
            alt='Imagen Frente Hotel'
          />
          <Carousel.Caption>
          
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Habitacion Hotel.jpg'
            alt='Imagen Habitacion Hotel'
          />
          <Carousel.Caption>
          
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Restaurante Hotel.jpg'
            alt='Imagen Restaurante Hotel'
          />
          <Carousel.Caption>
          
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>  
    );
  }
  
  export default Carrusel;
