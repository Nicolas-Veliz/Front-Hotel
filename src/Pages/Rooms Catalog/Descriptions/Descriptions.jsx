import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import { useContext, useState } from 'react'
import { ContextoInventario } from './../../../Contexto/ContextoDeInventario'
import Formulario from '../../../Componentes/Reserva/Formulario';
import './../Descripcion/styleDescripcion.css';
import { useParams } from 'react-router-dom';
import { alignPropType } from 'react-bootstrap/esm/types';
import { text } from '@fortawesome/fontawesome-svg-core';

const Descripcion = () => {
  
  const {id} = useParams();
  const {inventario} = useContext(ContextoInventario)
  const inventarioSeleccionado = inventario.find((inventarioSeleccionado) => inventarioSeleccionado.id === id);
  if (!inventarioSeleccionado) {
    return <div>¡No se encontró el elemento en el inventario!</div>;
  }

  //Abrir Modal
  const [show, setShow] = useState(false);

  return (
    <>
      <body data-bs-theme="dark">
    <br/>
    <h1>Habitacion {inventarioSeleccionado.nombre}</h1>
    
    <Container md="true">          
        <Row >  
        <Col md="5" xs="5">
            <Row border="primary" md="12" xs="12" style={{margin:'5px'}} >
            <Image className="d-block w-100 h-100" src={inventarioSeleccionado.img1} thumbnail />
            </Row>
        </Col> 
        <Col md="7" xs="7">
        <Row>
        <Table striped bordered hover responsive>
        <thead>
        <tr>
          <th>Detalles:</th>
        </tr>
        <tr>
        <td>
            {inventarioSeleccionado.descripcion}
        </td>
        </tr>       
        </thead>
        <Container style={{ margin:'10px', textAlign: 'center'}}>
          <Formulario 
              show={show} 
              onHide={() => setShow(false)} 
              />
        </Container>
        </Table>
      </Row>
        </Col>
        </Row>
        <Row md="6" xs="6">
        <Col md="5" xs="5">
            <Row className="w-100 h-75" md="6" xs="6" style={{margin:'5px'}} >
            <Image className="w-100 h-50" src={inventarioSeleccionado.img2} thumbnail />
            </Row>
        </Col>
        <Col md="5" xs="5">
            <Row className="w-100 h-75" md="6" xs="6">
            <Image className="w-100 h-50" src={inventarioSeleccionado.img3} thumbnail />
            </Row>
        </Col>
        
          
        </Row>
        
    </Container>
    </body>
    </>
  )
}

export default Descripcion