import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SidebarUsers from '../components/SidebarUsers';
import EmitirCircular from '../components/EmitirCircular';

const CircularScreen = () => {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
    }, [dispatch, navigate, userInfo]);

    return (
        <Row>
            <Col md={3}>
                <SidebarUsers />
            </Col>
            <Col md={9}>
                <EmitirCircular />
            </Col>

        </Row>
    );
};

export default CircularScreen;
