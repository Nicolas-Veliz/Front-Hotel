import { Button, Container, Table } from 'react-bootstrap';


const Customer = () => {
  return (
    <body data-bs-theme="dark" style={{ height: '94vh'}}>
    <Container data-bs-theme="dark" >
      
    <h1 className="text-center" style={{ padding: '100px'}} >Reservaciones</h1>
        <>
      <Table responsive="sm" data-bs-theme="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Habitacion</th>
            <th>Número</th>
            <th>Desde</th>
            <th>Hasta</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td><Button variant='danger'>Eliminar</Button></td>
          </tr>
        </tbody>
      </Table>
      </>
    </Container>
    </body>
  );
}

export default Customer;