import React from 'react'
import { Form } from 'react-bootstrap'

export const CustomerContentForm = ({model, setModel}) => {

    const handleChange = (evt) =>{
        setModel({
            ...model,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="name" value={model.name} onChange={handleChange} placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" name="email" value={model.email} onChange={handleChange} placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="rfc" value={model.rfc} onChange={handleChange} placeholder="RFC" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="address" value={model.address} onChange={handleChange} placeholder="Dirección" />
            </Form.Group>
        </Form>
    )
}
