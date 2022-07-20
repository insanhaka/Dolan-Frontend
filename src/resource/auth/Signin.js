import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import Img from '../../assets/img/Login.png';
import Form from 'react-bootstrap/Form';
import {
    Link,
    useNavigate,
  } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Signin() {

    const apiUrl = useSelector(state => state.ApiReducer);
    const apiHeader = useSelector(state => state.HeaderReducer);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const submit = () => {

        if (email === '' || password === '') {
            Swal.fire({
                icon: 'warning',
                text: 'Mohon isi form dengan lengkap',
                showConfirmButton: false,
                timer: 2500
            })
        }else {
            axios.post(apiUrl.url+'postlogin',
            {
                email: email,
                password: password
            },
            {
                headers: {
                  'dolan-key': apiHeader.key 
            }
            })
            .then(function (response) {
                var res = response.data.message;
                var token = response.data.token;
                if (res === "success") {
                    localStorage.setItem('passport', token);
                    Swal.fire({
                        icon: 'success',
                        title: 'Selamat Datang',
                        text: response.data.user,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    navigate("/", { replace: true });
                }else if (res === "empty") {
                    Swal.fire({
                        icon: 'error',
                        text: 'Kamu belum terdaftar, Silahkan mendaftar terlebih dahulu',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }else if (res === "error") {
                    Swal.fire({
                        icon: 'error',
                        text: 'Email atau Password yang anda masukan salah',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }else if (res === "block") {
                    Swal.fire({
                        icon: 'error',
                        text: 'Autorisasi Data Bermasalah',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }else {
                    Swal.fire({
                        icon: 'warning',
                        text: 'Akun ini sedang tidak aktif',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }
            })
            .catch(function (error) {
                console.log("error nih");
                Swal.fire({
                    icon: 'error',
                    text: 'Mohon maaf, sedang ada gangguan pada server',
                    showConfirmButton: false,
                    timer: 2500
                })
            });
        }
    }

    useEffect(() => {
        const topNavActive = document.getElementById('account').classList.add('top-active');
    }, []);

  return (
    <React.Fragment>
    <Navbar/>
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
                            <h3 className="mb-2">Selamat Datang</h3>
                            <p className="mb-4" style={{fontSize: 12}}>Silahkan lengkapi email username / email serta password untuk masuk</p>

                            <div className="mb-3">
                                <label className="form-label">Email Atau Username</label>
                                <Form.Control type="text" placeholder="email atau username" onChange={(event)=> setEmail(event.target.value)} />
                            </div>
                            <div className="mb-3 form-password-toggle">
                                <label className="form-label" >Password</label>
                                <Form.Control type="password" placeholder="password" onChange={(event)=> setPassword(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <button onClick={submit} className="btn btn-primary d-grid w-100 mt-4">Masuk</button>
                            </div>

                            <p className="text-center">
                                <span>Belum mempunyai akun ?</span>
                                <Link to="/daftar">
                                    <span> Buat Akun</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
        <Footer/>
    </div>
    </React.Fragment>
  );
}

export default Signin;