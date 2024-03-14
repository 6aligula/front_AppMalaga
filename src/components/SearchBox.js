import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    //console.log('keyword in serach:', keyword)

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`);
        } else {
            navigate(location.pathname);
        }
    }
    //mr-auto navbar-nav
    return (
        <div className='mr-auto p-2'>
            <form className="d-flex" onSubmit={submitHandler} >
                <input
                    type='text'
                    name='q'
                    className="form-control me-2"
                    placeholder='Buscar parcelas'
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <Button
                    type='submit'
                    variant='outline-success'
                    className='p-2'
                >
                    Buscar
                </Button>
            </form>
        </div>

    )
}

export default SearchBox