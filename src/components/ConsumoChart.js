import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { listConsumos } from '../actions/consumoActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

// Registrar los componentes de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ConsumoChart = () => {
    const dispatch = useDispatch();

    const consumoEstadistic = useSelector(state => state.consumoEstadistic);
    const { loading, error, consumos } = consumoEstadistic;

    useEffect(() => {
        dispatch(listConsumos());
    }, [dispatch]);

    const data = {
        labels: consumos.map(consumo => consumo.periodo_facturacion),
        datasets: [
            {
                label: 'Volumen Medido (m³)',
                data: consumos.map(consumo => consumo.volumen_medido),
                fill: false,
                backgroundColor: 'blue',
                borderColor: 'blue',
            },
        ],
    };

    return (
        <div>
            <h2>Estadística de Consumo de Agua del Usuario</h2>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Line data={data} />
            )}
        </div>
    );
};

export default ConsumoChart;
