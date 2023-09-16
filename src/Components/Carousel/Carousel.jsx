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
            alt='Primer slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Habitacion Hotel.jpg'
            alt='Segundo slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Restaurante Hotel.jpeg'
            alt='Tercer slider'
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
