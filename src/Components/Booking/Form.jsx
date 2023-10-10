import { useState } from 'react';
import { Button, Modal, ToggleButton, ToggleButtonGroup, Container, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Form() {

    //Llamar a Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Reservar Ahora
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Disponibilidad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <span><label>Adultos: </label> </span>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                    <ToggleButton id="tbg-radio-1" value={1}>
                                        1
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-2" value={2}>
                                        2
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-3" value={3}>
                                        2+
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                            <Col>
                                <span><label>Niños: </label> </span>
                                <ToggleButtonGroup type="radio" name="options2" defaultValue={4}>
                                    <ToggleButton id="tbg-radio-4" value={4}>
                                        0
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-5" value={5}>
                                        1
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-6" value={6}>
                                        2
                                    </ToggleButton>
                                    <ToggleButton id="tbg-radio-7" value={7}>
                                        2+
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                    <>
                        <span style={{ margin: '10px' }}>
                            <label>
                                Fecha de ingreso:
                            </label>
                        </span>
                        <DatePicker
                            calendarIcon
                            minDate={startDate}
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            startDate={startDate}
                            endDate={endDate}
                            dateFormat="dd/MM/yyyy"
                        />
                        <br />
                        <br />
                        <span style={{ margin: '10px', marginRight: '14px' }}>
                            <label>
                                Fecha de egreso:
                            </label>
                        </span>
                        <DatePicker
                            default icon
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            selected={endDate}
                            endDate={endDate}
                            minDate={startDate}
                            dateFormat="dd/MM/yyyy"
                        />
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleClose}>
                        Consultar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Form;