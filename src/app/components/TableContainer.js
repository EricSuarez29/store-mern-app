import React from 'react'
import { Card } from 'react-bootstrap'

export const TableContainer = ({title, children}) => {
    return (
        <Card className='p-0 bg-light bg-opacity-50'>
            <Card.Header>
                <Card.Title className='text-center display-5'>{title}</Card.Title>
            </Card.Header>
            <Card.Body className='p-5'>
                {children}
            </Card.Body>
        </Card>
    )
}
