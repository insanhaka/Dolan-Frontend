import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import Img from '../../assets/img/Login.png';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import Footer from '../component/Footer';

function Signup() {

  return (
    <div className="App">
        <div className='container p-3'>
          <div className='row'>
            
            <div className='col-md-6'>
              <Image src={Img} alt="Login Image" className="img-fluid" />
            </div>
            <div className='col-md-6 p-5'>
                <div className="card p-4">
                    <div className="card-body">
                        <div className="app-brand justify-content-center">
                            {/* <p>Logo</p> */}
                        </div>
                        <h3 className="mb-2">Daftar</h3>
                        <p className="mb-4" style={{fontSize: 12}}>Silahkan lengkapi semua data yang dibutuhkan</p>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nama Lengkap</label>
                                <Form.Control type="text" placeholder="Nama lengkap kamu" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <Form.Control type="text" placeholder="username" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Form.Control type="email" placeholder="email" />
                            </div>
                            <div className="mb-3 form-password-toggle">
                                <label className="form-label" >Password</label>
                                <Form.Control type="password" placeholder="password" />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary d-grid w-100 mt-4" type="submit">Daftar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Signup;