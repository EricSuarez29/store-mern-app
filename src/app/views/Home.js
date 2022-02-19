import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export const Home = () => {
    return (
        <Container>
            <Row className='mt-5 justify-content-center'>
                <Col md={8} xl={6}>
                    <Card className='bg-light bg-opacity-50'>
                        <Card.Body className='p-5'>
                            <Card.Title>MERN Stack</Card.Title>
                            <hr />
                            <Card.Text>
                                En un lugar de la mancha de cuyo nombre...
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
