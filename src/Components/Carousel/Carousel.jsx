import Carousel from 'react-bootstrap/Carousel';
import './../Carousel/style.css';
import './../Carousel/Carousel.jsx'

import { useState } from 'react';
import Formm from '../Booking/Formm';


function Carrusel() {

  const [show, setShow] = useState(false);

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src/assets/img/Frente Hotel.jpg'
            alt='Fachada Hotel'
          />
          <Carousel.Caption>
          <Formm show={show} onHide={() => setShow(false)} />

        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src/assets/img/Habitacion Hotel.jpg'
            alt='Habitacion Hotel'
          />
          <Carousel.Caption>
          <Formm show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src/assets/img/Restaurante Hotel.jpg'
            alt='Restaurante'
          />
          <Carousel.Caption>
          <Formm show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>   
    );
  }
  
  export default Carrusel;
