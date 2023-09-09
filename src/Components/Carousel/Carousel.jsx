import Carousel from 'react-bootstrap/Carousel';
import './../Carrusel/stylecarrusel.css';

import { useState } from 'react';
import Formulario from '../Reserva/Formulario';

function Carrusel() {


    //Abrir Modal
    const [show, setShow] = useState(false);

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\fernte hotel 1.jpg'
            alt='One slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />

        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\habitacion 2.jpg'
            alt='Two slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\restaurante 1.jpg'
            alt='There slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>  
    );
  }
  
  export default Carrusel;