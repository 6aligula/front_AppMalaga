// components/FaseCultivoDetails.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFaseCultivoDetails } from '../actions/cultivoActions';
import Loader from './Loader';
import Message from './Message';

const FaseCultivoDetails = ({ cultivoId }) => {
    const dispatch = useDispatch();

    const faseCultivoDetails = useSelector((state) => state.faseCultivoDetails);
    const { loading, error, faseCultivo } = faseCultivoDetails;

    useEffect(() => {
        if (cultivoId) {
            dispatch(getFaseCultivoDetails(cultivoId));
        }
    }, [dispatch, cultivoId]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                faseCultivo && (
                    <div>
                        <h3>Fase de Cultivo: {faseCultivo.fase}</h3>
                        <p>Kc: {faseCultivo.kc}</p>
                        <p>NAP: {faseCultivo.nap}</p>
                        <p>Prof. Rad: {faseCultivo.prof_rad}</p>
                        <p>DAS Inicio: {faseCultivo.das_inicio}</p>
                        <p>Porcentaje de Almacen: {faseCultivo.porcentaje_almacen}</p>
                    </div>
                )
            )}
        </>
    );
};

export default FaseCultivoDetails;
