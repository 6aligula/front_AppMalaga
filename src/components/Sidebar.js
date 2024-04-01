import React from 'react';
import { Nav } from 'react-bootstrap';
import './styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <Nav.Link className='navSidebar' href="/inicio">INICIO</Nav.Link>
                <Nav.Link className='navSidebar' href="/blog">BLOG</Nav.Link>
                <Nav.Link className='navSidebar' href="/junta-andalucia">JUNTA ANDALUCIA</Nav.Link>
                <Nav.Link className='navSidebar' href="/consejeria">CONSEJERIA</Nav.Link>
                <Nav.Link className='navSidebar' href="/el-tiempo">EL TIEMPO</Nav.Link>
                <Nav.Link className='navSidebar' href="/catastro">CATASTRO</Nav.Link>
                <Nav.Link className='navSidebar' href="https://www.google.es/maps/@41.3134109,2.0175253,15z?entry=ttu" target="_blank">GOOGLE MAPS</Nav.Link>
                <Nav.Link className='navSidebar' href="/enlaces-interes">PONER ENLACES DE INTERÉS RELACIONADOS</Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
