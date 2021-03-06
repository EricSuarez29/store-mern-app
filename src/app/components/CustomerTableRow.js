import React from 'react'
import { Button } from 'react-bootstrap';

export const CustomerTableRow = ({ data, setDataToEdit, removeById }) => {
  let {name, email, rfc, address} = data;
  return (
        <tr key={data._id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rfc}</td>
            <td>{address}</td>
            <td>
              <Button 
                variant="outline-success"
                onClick={() => setDataToEdit(data._id)}>
                E
              </Button>
              <Button 
                variant="outline-danger"
                onClick={() => removeById(data._id)}>
                X
              </Button>
            </td>
        </tr>
  )
}
