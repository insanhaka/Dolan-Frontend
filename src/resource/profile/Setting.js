import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../assets/css/homecategory.css';
import axios from 'axios';
import Select from 'react-select';
import { useSelector } from 'react-redux';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const genderOptions = [
  { value: 'pria', label: 'Pria' },
  { value: 'wanita', label: 'Wanita' },
]

function Setting() {

    let params = useParams();
    const apiUrl = useSelector(state => state.ApiReducer);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nik, setNik] = useState('');
    const [gender, setGender] = useState('');
    const [selectprov, setSelectprov] = useState('');

    // Address
    const [provinsi, setProvinsi] = useState('');

    useEffect(() => {
        const topNavActive = document.getElementById('account').classList.add('top-active');

        const token = localStorage.getItem('passport');
        if (token !== null) {

            const pisah = token.split('#');
            const mytoken = pisah[3];

            const token_auth = {
                headers: { Authorization: `Bearer ${mytoken}` }
            };

            axios.get(
              apiUrl.url+'user-setting/'+params.id, token_auth
            ).then(function (response) {
              const res = response.data.data[0];
              const nama = res.name;
              setName(nama);
              const emailuser = res.email;
              setEmail(emailuser);
              const nameuser = res.username;
              setUsername(nameuser);
              const nikuser = res.nik;
              setNik(nikuser);
              const genderuser = [{ value : res.gender, label: res.gender}]
              setGender(genderuser);

              // Data Address
              const province = response.data.provinsi;
              setProvinsi(province);
              
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });

        }

    }, []);

  return (
    <React.Fragment>
    <Navbar/>
    <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-md-12' style={{paddingTop : '5%'}}>
                <h2>Pengaturan Profil</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 p-3'>
              <Card>
                <Card.Body>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Nama</label>
                          <Form.Control type="text" placeholder="Nama kamu" value={name} onChange={(event)=> setName(event.target.value)}/>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <Form.Control type="email" placeholder="Email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Username</label>
                          <Form.Control type="text" placeholder="Username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <Form.Control type="password" placeholder="Password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">NIK</label>
                          <Form.Control 
                          type="number"
                          placeholder="NIK" 
                          maxLength={16} 
                          onInput={(e) => {
                              if (e.target.value.length > e.target.maxLength)
                              e.target.value = e.target.value.slice(0,e.target.maxLength);
                          }}
                          value={nik}
                          onChange={(event)=> setNik(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Jenis Kelamin</label>
                          <Select 
                          options={genderOptions}
                          isSearchable='true'
                          defaultValue={gender[0]}
                          onChange={(event)=> setGender(event.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row mt-4'>
                      <div className='col-md-12'>
                        <h6 style={{ color: '#546de5' }}>Alamat Domisili</h6>
                        <hr  style={{
                          color: '#778beb',
                          backgroundColor: '#778beb',
                          height: .5,
                          borderColor : '#778beb',
                        }}/>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Provinsi</label>
                          <Select 
                          options={provinsi}
                          isSearchable='true'
                          onChange={(event)=> setSelectprov(event.label)}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="mb-3">
                          <label className="form-label">Kabupaten / Kota</label>
                          <Select 
                          options={provinsi}
                          isSearchable='true'
                          onChange={(event)=> setSelectprov(event.label)}
                          />
                        </div>
                      </div>
                    </div>
                    
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
  
}

export default Setting;