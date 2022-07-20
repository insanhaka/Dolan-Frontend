import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav'
import Brand from '../../assets/img/brand.png';
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';
import { mdiViewGridOutline } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import '../../assets/css/topNavbarActive.css';

function Navbar() {

    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {

        const token = localStorage.getItem('passport');
        if (token !== null) {
            setAuth(true);
            const pisah = token.split('#');
            const nama = pisah[0];
            setName(nama);
        }

    }, []);

    if (auth === true) {
        return (
            <React.Fragment>
            <Nav
            className="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme nav-big"
            id="layout-navbar"
            >
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <Image src={Brand} alt="Brand-Image" className="w-px-40 h-auto" />
                            <h5 className="mt-3" style={{ marginLeft: 13 }}>DOLAN</h5>
                        </div>
                    </div>
    
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item p-3">
                            <Link to="/" className="nav-link" id="home">
                                <Icon path={mdiHomeOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Home
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/category" className="nav-link" id="category">
                                <Icon path={mdiViewGridOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Kategori
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/about" className="nav-link" id="about">
                                <Icon path={mdiInformationOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Tentang Kami
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/user/account" className="nav-link" id="account">
                                <Icon path={mdiAccountOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Hi, {name}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Nav>
            </React.Fragment>
        );
    }else {
        return (
            <React.Fragment>
            <Nav
            className="layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme nav-big"
            id="layout-navbar"
            >
                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <Image src={Brand} alt="Brand-Image" className="w-px-40 h-auto" />
                            <h5 className="mt-3" style={{ marginLeft: 13 }}>DOLAN</h5>
                        </div>
                    </div>
    
                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item p-3">
                            <Link to="/" className="nav-link" id="home">
                                <Icon path={mdiHomeOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Home
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/category" className="nav-link" id="category">
                                <Icon path={mdiViewGridOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Kategori
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/about" className="nav-link" id="about">
                                <Icon path={mdiInformationOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Tentang Kami
                            </Link>
                        </li>
                        <li className="nav-item p-3">
                            <Link to="/masuk" className="nav-link" id="account">
                                <Icon path={mdiAccountOutline} size={0.8} style={{ marginRight: 5, marginBottom: 2 }} />
                                Akun
                            </Link>
                        </li>
                    </ul>
                </div>
            </Nav>
            </React.Fragment>
        );
    }

}

export default Navbar;