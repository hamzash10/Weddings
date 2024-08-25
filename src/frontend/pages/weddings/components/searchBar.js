import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { MdSearch } from 'react-icons/md';


export const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <InputGroup className="d-flex justify-content-end" style={{ width: '350px' }}>
            <Form.Control
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                    borderRadius: '8px',
                    border: '2px solid #d4af37',
                    paddingRight: '40px', // Ensure space for the icon
                    fontSize: '18px'
                }}
            />
            <InputGroup.Text style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'absolute',
                color: '#d4af37',
                cursor: 'pointer'
            }}>
                <MdSearch style={{ fontSize: '30px' }} />
            </InputGroup.Text>
        </InputGroup>
    )
}