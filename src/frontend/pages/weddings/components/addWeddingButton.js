import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form, Col, Row, FloatingLabel } from 'react-bootstrap';
import { resetFieldes, handleImageChange, handleSubmit } from '../utiles/addEditFunctions'

const AddWedding = ({ show, handleClose, setWeddings, weddings, weddingToEdit }) => {
    const [groomName, setGroomName] = useState('');
    const [groomFather, setGroomFather] = useState('');
    const [groomFamily, setGroomFamily] = useState('');
    const [brideName, setBrideName] = useState('');
    const [brideFather, setBrideFather] = useState('');
    const [brideFamily, setBrideFamily] = useState('');
    const [weddingLocation, setWeddingLocation] = useState('');
    const [weddingDate, setWeddingDate] = useState('');
    const [weddingImage, setWeddingImage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [validated, setValidated] = useState(false);


    // Editing Effect
    useEffect(() => {
        if (weddingToEdit) {
            setIsEditing(true);
            setGroomName(weddingToEdit.groomName);
            setGroomFather(weddingToEdit.groomFather);
            setGroomFamily(weddingToEdit.groomFamily);
            setBrideName(weddingToEdit.brideName);
            setBrideFather(weddingToEdit.brideFather);
            setBrideFamily(weddingToEdit.brideFamily);
            setWeddingLocation(weddingToEdit.location);
            setWeddingDate(`${weddingToEdit.year}-${weddingToEdit.month.toString().padStart(2, '0')}-${weddingToEdit.day.toString().padStart(2, '0')}`);
            setWeddingImage(weddingToEdit.image);
        } else {
            setIsEditing(false);
            resetFieldes(setGroomName, setGroomFather, setGroomFamily, setBrideName, setBrideFather,
                setBrideFamily, setWeddingLocation, setWeddingDate, setWeddingImage);
        }
    }, [weddingToEdit]);



    return (
        <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{ width: '100%', textAlign: 'center' }}>Add New Wedding</Modal.Title>
            </Modal.Header>
            <Form noValidate
                validated={validated}
                onSubmit={(event) => handleSubmit(event, {
                    setValidated, setGroomName, setGroomFather, setGroomFamily, setBrideName, setBrideFather,
                    setBrideFamily, setWeddingLocation, setWeddingDate, setWeddingImage, setWeddings
                }, isEditing,
                    {
                        groomName, groomFather, groomFamily, brideName, brideFather, brideFamily,
                        day: new Date(weddingDate).getDate(), month: new Date(weddingDate).getMonth() + 1,
                        year: new Date(weddingDate).getFullYear(), location: weddingLocation,
                        image: weddingImage || null

                    }, weddings,
                    weddingToEdit, handleClose)} id="addWeddingForm">

                <Modal.Body>
                    <Container>

                        <Row>

                            {/*groom info */}
                            <Col>
                                <h5 style={{ textAlign: 'center', color: '#0096FF' }}>Groom</h5>
                                <FloatingLabel label="Groom's Name" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter groom's name"
                                        value={groomName}
                                        onChange={(e) => setGroomName(e.target.value)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel label="Groom's Father" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter groom's father"
                                        value={groomFather}
                                        onChange={(e) => setGroomFather(e.target.value)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel label="Groom's Family" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter groom's family"
                                        value={groomFamily}
                                        onChange={(e) => setGroomFamily(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>


                            <Col>
                                {/*bride info */}
                                <h5 style={{ textAlign: 'center', color: '#FF69B4' }}>Bride</h5>
                                <FloatingLabel label="Bride's Name" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter bride's name"
                                        value={brideName}
                                        onChange={(e) => setBrideName(e.target.value)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel label="Bride's Father" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter bride's father"
                                        value={brideFather}
                                        onChange={(e) => setBrideFather(e.target.value)}
                                    />
                                </FloatingLabel>
                                <FloatingLabel label="Bride's Family" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter bride's family"
                                        value={brideFamily}
                                        onChange={(e) => setBrideFamily(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>

                        {/*wedding info */}
                        <Row>
                            <Col>
                                <FloatingLabel label="Wedding Location" className="mb-3">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter wedding location"
                                        value={weddingLocation}
                                        onChange={(e) => setWeddingLocation(e.target.value)}
                                    />

                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="floatingWeddingDate" label="Wedding Date" className="mb-3">
                                    <Form.Control
                                        required
                                        type="date"
                                        placeholder="Enter wedding date"
                                        value={weddingDate}
                                        onChange={(e) => setWeddingDate(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FloatingLabel label="Wedding Image (optional)" className="mb-3">
                                    <Form.Control
                                        type="file"
                                        onChange={(e) => handleImageChange(e, setWeddingImage)}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" type="submit" form="addWeddingForm">Save</Button>
                </Modal.Footer>
            </Form>

        </Modal >
    );
};

export default AddWedding;
