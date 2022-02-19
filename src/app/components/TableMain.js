import React from 'react'
import { Table } from 'react-bootstrap'
import { PaginationMain } from './PaginationMain';

export const TableMain = ({headers, data, currentPage, setCurrentPage, setDataToEdit, TableRow}) => {
    return (
        <>
        <Table striped hover>
            <thead>
                <tr>
                    {
                        headers.map((el, index) => <th key={index}>{el}</th>)
                    }
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    data.content.map((el) => <TableRow setDataToEdit={setDataToEdit} key={el._id} data={el}/>)
                }
            </tbody>
        </Table>
        <PaginationMain data={data} currrentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </>
    )
}
