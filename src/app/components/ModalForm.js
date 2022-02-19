import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export const ModalForm = ({title, handleClose, handleSave,show, children}) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-3'>
                {children}
            </Modal.Body>
            <Modal.Footer>
                <Button className='mx-auto' variant="primary" onClick={handleSave}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
