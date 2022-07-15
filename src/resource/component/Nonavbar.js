import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Brand from '../../assets/img/brand.png';
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { mdiBasket } from '@mdi/js';
import { mdiInformation } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';

function Navbar() {

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
                            Home
                        </Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link to="/category" className="nav-link" id="category">
                            Kategori
                        </Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link to="/about" className="nav-link" id="about">
                            Tentang Kami
                        </Link>
                    </li>
                    <li className="nav-item p-2">
                        <Button href="/masuk">Masuk</Button>
                    </li>
                    <li className="nav-item p-2">
                        <Button href="/daftar" style={{ borderWidth: 1, borderColor: '#546de5', backgroundColor: '#fff', color: '#546de5' }}>Daftar</Button>
                    </li>
                </ul>
            </div>
        </Nav>

        <Nav className="navbar navbar-light bg-navbar-theme navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none">
            <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                    <Link to="/" className="nav-link" id="home">
                        <Icon path={mdiHome} size={1} />
                        <br/>
                        Home
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/product" className="nav-link" id="category">
                        <Icon path={mdiBasket} size={1} />
                        <br/>
                        Category
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link" id="about">
                        <Icon path={mdiInformation} size={1} />
                        <br/>
                        About
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/masuk" className="nav-link" id="login">
                        <Icon path={mdiAccountBox} size={1} />
                        <br/>
                        Account
                    </Link>
                </li>
            </ul>
        </Nav>
        </React.Fragment>
  );
}

export default Navbar;