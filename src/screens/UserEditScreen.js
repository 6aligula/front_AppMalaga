import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUser } from '../actions/userActions';
import { USER_UPDATE_RESET } from '../constants/userConstants';

const UserEditScreen = () => {
    const { id } = useParams();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const userDetails = useSelector(state => state.userDetails);
    const { error, loading, user } = userDetails;

    const userUpdate = useSelector(state => state.userUpdate);
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate;

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET });
            navigate('/admin/userList');
        } else {
            if (!user.name || user._id !== Number(id)) {
                dispatch(getUserDetails(id))
            } else {
                setName(user.name);
                setEmail(user.email);
                setIsAdmin(user.isAdmin);
            }
        }


    }, [user, id, successUpdate, navigate, dispatch])


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ _id: user._id, name, email, isAdmin }))
        //console.log('submitted')
    }

    return (
        <div>

            <Link to='/admin/userlist'>
                Atras
            </Link>

            <FormContainer >
                <h1>Editar Usuario</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Introduzca nombre'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Dirección de correo electrónico</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Introduzca email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >

                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='isAdmin' className='py-3'>
                                <Form.Label>¿Es administrador?</Form.Label>
                                <Form.Check
                                    type='checkbox'
                                    placeholder='Is Admin'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                >
                                </Form.Check>
                            </Form.Group>

                            <Button type='submit' variant='primary'> Actualizar</Button>

                        </Form>

                    )}

            </FormContainer>
        </div>

    )
}

export default UserEditScreen