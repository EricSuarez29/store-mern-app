import React, { useState, useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { CustomerContentForm } from '../components/CustomerContentForm';
import { CustomerTableRow } from '../components/CustomerTableRow';
import { ModalForm } from '../components/ModalForm';
import { TableContainer } from '../components/TableContainer'
import { TableMain } from '../components/TableMain';

let initialState = {
    _id: null,
    name: "",
    email: "",
    rfc: "",
    address: ""
}

let initialData = {
    totalPages: 0,
    page: 0,
    perPage: 0,
    content: []
}

export const Customers = () => {
    let [data, setData] = useState(initialData);
    let [customer, setCustomer] = useState(initialState);
    let [show, setShow] = useState(false);
    let [currentPage, setCurrentPage] = useState(0);

    const handleClose = () => {
        setShow(false)
        setCustomer(initialState)
    };

    const handleShow = () => setShow(true);


    useEffect(() => {
        fetch(`/api/customers?offset=${currentPage}`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => setData(json))
    }, [currentPage]);

    const create = (data) => {
        return fetch("/api/customers", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
    }

    const update = (id, data) => {
        return fetch(`/api/customers/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.ok ? res.json(): Promise.reject(res));
    }

    const removeById = (id) => {
        return fetch(`/api/customers/${id}`,
            {
                method: 'DELETE'
            }).then(res => res.ok? res.json(): Promise.reject(res))
            .then(() => setCurrentPage(0));
    }

    const setDataToEdit = (id) => {
        let currentCustomer = data.content.find(el => el._id === id);
        setCustomer(currentCustomer);
        handleShow();
    }

    const handleSave = () => {
        try {
            if (!customer._id) {
                console.log(customer);
                delete customer._id;
                create(customer)
                    .then(handleClose)
                    .then(() => setCurrentPage(0));
            } else {
                let id = customer._id;
                delete customer._id;
                delete customer.__v;
                console.log(id)
                console.log(customer)
                update(id, customer)
                    .then(handleClose)
                    .then(() => setCurrentPage(0));
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <ModalForm show={show} handleSave={handleSave} children={<CustomerContentForm model={customer} setModel={setCustomer} />} title="Cliente" handleClose={handleClose} />

            <Row className='mt-5 justify-content-center'>
                <TableContainer title="Clientes" children={
                    <>
                        <Button variant="outline-dark" onClick={handleShow}>
                            Nuevo
                        </Button>
                        <TableMain
                            headers={["Nombre", "Email", "RFC", "dirección"]}
                            data={data}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            removeById={removeById}
                            setDataToEdit={setDataToEdit}
                            TableRow={CustomerTableRow}
                        />
                    </>
                } />
            </Row>
        </Container>
    )
}
