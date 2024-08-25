import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";

function WeddingCard({ wedding, onDelete, onEdit }) {
    if (!wedding.image)
        wedding.image = '/backgrounds/save_the_date.png';
    return (
        <Card style={{ margin: '10px', width: '400px', paddingTop: '1px' }}>
            <Card.Img variant="top"
                src={wedding.image}
                alt="wedding card"
                style={{ height: 'auto', maxHeight: '225px' }} />
            <Button
                variant="danger"
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    zIndex: 1,
                    backgroundColor: 'rgba(255, 0, 0, 0.7)',
                    paddingTop: '12px',
                    lineHeight: '1'
                }}
                onClick={() => onDelete(wedding._id)}>
                <MdDelete />
            </Button>
            <Button

                style={{
                    border: 'none',
                    display: 'flex',
                    position: 'absolute',
                    top: '10px',
                    right: '60px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    zIndex: 1,
                    backgroundColor: 'rgba(212, 175, 55, 0.8)',
                    paddingTop: '12px',
                    lineHeight: '1'
                }}
                onClick={() => onEdit(wedding._id)}>
                <MdEdit />
            </Button>
            <Card.Body>
                <Container>
                    <Row>
                        {/* groom info */}
                        <Col xs={4} style={{ textAlign: 'center', color: '#0096FF' }} >
                            <h6>{wedding.groomName}</h6>
                            <h6>{wedding.groomFather}</h6>
                            <h6>{wedding.groomFamily}</h6>
                        </Col>
                        {/* date and location */}
                        <Col xs={4} style={{ textAlign: 'center' }}>
                            <h5>{wedding.day}-{wedding.month}-{wedding.year}</h5>
                            <p>{wedding.location}</p>
                        </Col>
                        {/* bride info */}
                        <Col xs={4} style={{ textAlign: 'center', color: '#FF69B4' }}>
                            <h6>{wedding.brideName}</h6>
                            <h6>{wedding.brideFather}</h6>
                            <h6>{wedding.brideFamily}</h6>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card >
    )

}

export default WeddingCard;