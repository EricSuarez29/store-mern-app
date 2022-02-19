import React from 'react'
import { Pagination, Row } from 'react-bootstrap';

export const PaginationMain = ({data, currentPage, setCurrentPage}) => {
    let {totalPages, page, perPage} = data;
    let active = page + 1;
    let items = [];

    const handleClick = (evt) => {
        if(evt.target.textContent.match(/current/i)) return;

        console.log(evt.target.textContent);
        setCurrentPage(parseInt(evt.target.textContent) - 1);
    }

    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item onClick={handleClick} key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Pagination className='justify-content-center'>{items}</Pagination>
    )
}
