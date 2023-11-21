import axios from 'axios'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'

const Inventory = () => {

    const [habitacion, setHabitaciones] = useState({
        nombre: "",
        numero: "",
        precio: "",
        descripcion: "",
        img1: "",
        img2: "",
        img3: "",
    })

    const handleChange = (e) => {
        setHabitaciones({
            ...habitacion,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await axios.post("http://localhost:3000/inventario",
            habitacion
            )
            console.log(respuesta, "Respuesta de habitaciones")
        } catch (error) {
            console.log(error, "Error de habitaciones")
        }
    }

    return (
        <>
        <Container>
            <Row>
                <Col>
                <br/>
                <h1 >Inventario de Habitaciones</h1>
                <Form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="selectToastPlacement" className="form-label">
                            Nombre
                        </label>
                        <Form.Select
                            id="selectToastPlacement"
                            value={habitacion.nombre} 
                            className="mt-2"
                            onChange={(e) => setPosition(e.currentTarget.value)}
                            name="nombre" 
                        >
                        {[
                            'Simple',
                            'Doble',
                            'Triple',
                            'Familiar',
                        ].map((p) => (
                        <option key={p} value={p}>
                         {p}
                        </option>
                        ))}
                        </Form.Select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numero" className="form-label">
                            Numero
                        </label>
                        <input 
                            type="number" 
                            value={habitacion.numero} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="numero" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="precio" className="form-label">
                            Precio por día
                        </label>
                        <input 
                            type="number" 
                            value={habitacion.precio} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="precio" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descripcion" className="form-label">
                            Descripción
                        </label>
                        <textarea 
                            type="text" 
                            value={habitacion.descripcion} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="descripcion" 
                            rows="3">
                        </textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagen1" className="form-label">
                            Url Imagen 1
                        </label>
                        <input 
                            type="text" 
                            value={habitacion.img1} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="img1" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagen2" className="form-label">
                            Url Imagen 2
                        </label>
                        <input 
                            type="texto" 
                            value={habitacion.img2} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="img2" 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imagen3" className="form-label">
                            Url Imagen 3
                        </label>
                        <input 
                            type="texto" 
                            value={habitacion.img3} 
                            onChange={handleChange} 
                            className="form-control" 
                            name="img3" 
                        />
                    </div>
                    <div>
                    <Button 
                            variant="primary" 
                            type="submit">
                            Agregar Habitacion
                    </Button>
                    </div>
                </Form>
                </Col>
            </Row>
        </Container>
        </>
  )
};

export default Inventory;