import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Brand from '../../assets/img/brand.png';
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';
import { mdiSprout } from '@mdi/js';
import { mdiAccountBox } from '@mdi/js';

function Yesnavbar() {

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
                        <Link to="/user/dashboard" className="nav-link" id="dashboard">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link to="/user/category" className="nav-link" id="category">
                            Kategori
                        </Link>
                    </li>
                    <li className="nav-item p-3">
                        <Link to="/user/akun" className="nav-link" id="akun">
                            Akun
                        </Link>
                    </li>
                </ul>
            </div>
        </Nav>

        <Nav className="navbar navbar-light bg-navbar-theme navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none">
            <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                    <Link to="/user/dashboard" className="nav-link" id="dashboard">
                        <Icon path={mdiHome} size={1} />
                        <br/>
                        Home
                    </Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/user/category" className="nav-link" id="category">
                        <Icon path={mdiSprout} size={1} />
                        <br/>
                        Category
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/user/akun" className="nav-link" id="login">
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

export default Yesnavbar;