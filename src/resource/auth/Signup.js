import React, { useEffect, useState } from 'react'
import Image from 'react-bootstrap/Image';
import Img from '../../assets/img/Login.png';
import Form from 'react-bootstrap/Form';
import {
    useNavigate,
  } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Signup() {

    const apiUrl = useSelector(state => state.ApiReducer);
    const apiHeader = useSelector(state => state.HeaderReducer);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let navigate = useNavigate();

    const submit = () => {

        if (name === '' || username === '' || email === '' || password === '') {
            Swal.fire({
                icon: 'warning',
                text: 'Mohon isi form dengan lengkap',
                showConfirmButton: false,
                timer: 2500
            })
        }else {
            axios.post(apiUrl.url+'postsignup',
            {
                name: name,
                username: username,
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
                if (res === "success") {
                    Swal.fire({
                        icon: 'success',
                        text: 'Registrasi Berhasil, Silahkan Login',
                        showConfirmButton: false,
                        timer: 3000
                    })
                    navigate("/masuk", { replace: true });
                }else if (res === "duplicated") {
                    Swal.fire({
                        icon: 'error',
                        text: 'Email atau Username tersebut sudah terdaftar',
                        showConfirmButton: false,
                        timer: 2500
                    })
                }else if (res === "validation") {
                    Swal.fire({
                        icon: 'error',
                        text: response.data.data,
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
                        <h3 className="mb-2">Daftar</h3>
                        <p className="mb-4" style={{fontSize: 12}}>Silahkan lengkapi semua data yang dibutuhkan</p>

                            <div className="mb-3">
                                <label className="form-label">Nama Lengkap</label>
                                <Form.Control type="text" placeholder="Nama lengkap kamu" onChange={(event)=> setName(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <Form.Control type="text" placeholder="username" onChange={(event)=> setUsername(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <Form.Control type="email" placeholder="email" onChange={(event)=> setEmail(event.target.value)}/>
                            </div>
                            <div className="mb-3 form-password-toggle">
                                <label className="form-label" >Password</label>
                                <Form.Control type="password" placeholder="password" onChange={(event)=> setPassword(event.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <button onClick={submit} className="btn btn-primary d-grid w-100 mt-4" type="submit">Daftar</button>
                            </div>

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

export default Signup;