import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Footer from "../components/Footer";
import foto from "../img/malaga.png"
import Mapa from '../components/Map';


const HomeScreen = () => {
    const dispatch = useDispatch();

    const location = useLocation();
    let keyword = location.search;
    //console.log('keyword in home', keyword);

    // useEffect(() => {
    //     dispatch(listProducts(keyword))

    // }, [dispatch, keyword])

    return (
        <div>
            <h1>Ultimos noticias </h1>
            <p>Aqui podemos meter el mapa</p>
            <Mapa />
            {/* <img src={foto} alt="Malaga" style={{ width: '840px', height: '420px' }} /> */}

            <Footer />
        </div>
    )
}

export default HomeScreen