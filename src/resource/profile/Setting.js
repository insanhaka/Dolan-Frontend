import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../../assets/css/homecategory.css';
import axios from 'axios';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button'

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const genderOptions = [
  { value: 'pria', label: 'Pria' },
  { value: 'wanita', label: 'Wanita' },
]

function Setting() {

    let params = useParams();
    const apiUrl = useSelector(state => state.ApiReducer);

    const token = localStorage.getItem('passport');
    const pisah = token.split('#');
    const idUser = pisah[2];
    const mytoken = pisah[3];
    const token_auth = {
      headers: { Authorization: `Bearer ${mytoken}` }
    };

    // Old Data start
    const [name, setName] = useState('');
    const [nik, setNik] = useState('');
    const [oldgender, setOldgender] = useState('');
    const [olddomprov, setOlddomprov] = useState('');
    const [olddomkab, setOlddomkab] = useState('');
    const [olddomkec, setOlddomkec] = useState('');
    const [olddomdesa, setOlddomdesa] = useState('');
    const [oldktpprov, setOldktpprov] = useState('');
    const [oldktpkab, setOldktpkab] = useState('');
    const [oldktpkec, setOldktpkec] = useState('');
    const [oldktpdesa, setOldktpdesa] = useState('');
    // Old Data end

    // Address master start
    const [provinsi, setProvinsi] = useState('');
    const [kabkot, setKabkot] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [desa, setDesa] = useState('');
    // Address master end

    const submit_prov = (event) => {
      axios.post(apiUrl.url+'get-kab', { prov_id: event.id }, token_auth
      ).then(function (response) {
        const getkab = response.data.data;
        setKabkot(getkab);
        setOlddomprov([event]);
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
    const submit_kab = (event) => {
      axios.post(apiUrl.url+'get-kec', { kab_id: event.id }, token_auth
      ).then(function (response) {
        const getkec = response.data.data;
        setKecamatan(getkec);
        setOlddomkab([event]);
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
    const submit_kec = (event) => {
      axios.post(apiUrl.url+'get-desa', { kec_id: event.id }, token_auth
      ).then(function (response) {
        const getdesa = response.data.data;
        setDesa(getdesa);
        setOlddomkec([event]);
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
    const submit_desa = (event) => {
      setOlddomdesa([event]);
    }

    const submit_prov_ktp = (event) => {
      axios.post(apiUrl.url+'get-kab', { prov_id: event.id }, token_auth
      ).then(function (response) {
        const getkab = response.data.data;
        setKabkot(getkab);
        setOldktpprov([event]);
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
    const submit_kab_ktp = (event) => {
      axios.post(apiUrl.url+'get-kec', { kab_id: event.id }, token_auth
      ).then(function (response) {
        const getkec = response.data.data;
        setKecamatan(getkec);
        setOldktpkab([event]);
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
    const submit_kec_ktp = (event) => {
      axios.post(apiUrl.url+'get-desa', { kec_id: event.id }, token_auth
      ).then(function (response) {
        const getdesa = response.data.data;
        setDesa(getdesa);
        setOldktpkec([event]);
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
    const submit_desa_ktp = (event) => {
      setOldktpdesa([event]);
    }

    useEffect(() => {
        const topNavActive = document.getElementById('account').classList.add('top-active');

        if (mytoken !== null && params.id == idUser) {
          axios.get(
            apiUrl.url+'user-setting/'+params.id, token_auth
          ).then(function (response) {
            const res = response.data.data[0];
            const nama = res.name;
            setName(nama);
            const nikuser = res.nik;
            setNik(nikuser);
            const genderuser = [{ value : res.gender, label: res.gender}]
            setOldgender(genderuser);
            const domprovuser = [{ id : res.domisili_loc_province, nama: res.domisili_loc_province}]
            setOlddomprov(domprovuser);
            const domkabuser = [{ id : res.domisili_loc_regency, nama: res.domisili_loc_regency}]
            setOlddomkab(domkabuser);
            const domkecuser = [{ id : res.domisili_loc_district, nama: res.domisili_loc_district}]
            setOlddomkec(domkecuser);
            const domdesauser = [{ id : res.domisili_loc_village, nama: res.domisili_loc_village}]
            setOlddomdesa(domdesauser);
            const ktpprovuser = [{ id : res.ktp_loc_province, nama: res.ktp_loc_province}]
            setOldktpprov(ktpprovuser);
            const ktpkabuser = [{ id : res.ktp_loc_regency, nama: res.ktp_loc_regency}]
            setOldktpkab(ktpkabuser);
            const ktpkecuser = [{ id : res.ktp_loc_district, nama: res.ktp_loc_district}]
            setOldktpkec(ktpkecuser);
            const ktpdesauser = [{ id : res.ktp_loc_village, nama: res.ktp_loc_village}]
            setOldktpdesa(ktpdesauser);

            // Data Address
            const province = response.data.provinsi;
            setProvinsi(province);
            
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

        }else {
          Swal.fire({
            icon: 'error',
            text: 'Emmm.., Ada yang aneh',
            showConfirmButton: false,
            timer: 2500
          })
        }

    }, []);

    const submit = () => {
      const data = {
        name : name,
        user_id : idUser,
        nik : nik,
        gender : oldgender[0].value,
        domisili_loc_province : olddomprov[0].nama,
        domisili_loc_regency : olddomkab[0].nama,
        domisili_loc_district : olddomkec[0].nama,
        domisili_loc_village : olddomdesa[0].nama,
        ktp_loc_province : oldktpprov[0].nama,
        ktp_loc_regency : oldktpkab[0].nama,
        ktp_loc_district : oldktpkec[0].nama,
        ktp_loc_village : oldktpdesa[0].nama,
      }

      axios.post(apiUrl.url+'user-setting/save', data, token_auth
      ).then(function (response) {
        const res = response.data.data;
        console.log(res);
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
              <Card className='pb-5'>
                <Card.Body>

                    <div className='row'>
                      <div className='col-md-12'>
                        <div className="mb-3">
                          <label className="form-label">Nama</label>
                          <Form.Control type="text" placeholder="Nama kamu" value={name} onChange={(event)=> setName(event.target.value)}/>
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
                        {oldgender[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Jenis Kelamin</label>
                            <Select 
                            options={genderOptions}
                            isSearchable='true'
                            defaultValue={oldgender[0]}
                            onChange={(event)=> setOldgender([event])}
                            />
                          </div>
                        }
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
                        {olddomprov[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Provinsi</label>
                            <Select
                            isSearchable='true'
                            defaultValue={olddomprov[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={provinsi}
                            onChange={submit_prov}
                            />
                          </div>
                        }
                      </div>
                      <div className='col-md-6'>
                        {olddomkab[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Kabupaten / Kota</label>
                            <Select
                            isSearchable='true'
                            defaultValue={olddomkab[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={kabkot}
                            onChange={submit_kab}
                            />
                          </div>
                        }
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        {olddomkec[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Kecamatan</label>
                            <Select
                            isSearchable='true'
                            defaultValue={olddomkec[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={kecamatan}
                            onChange={submit_kec}
                            />
                          </div>
                        }
                      </div>
                      <div className='col-md-6'>
                        {olddomdesa[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Desa / Kelurahan</label>
                            <Select
                            isSearchable='true'
                            defaultValue={olddomdesa[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={desa}
                            onChange={submit_desa}
                            />
                          </div>
                        }
                      </div>
                    </div>
                    <div className='row mt-4'>
                      <div className='col-md-12'>
                        <h6 style={{ color: '#546de5' }}>Alamat Sesuai KTP</h6>
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
                        {oldktpprov[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Provinsi</label>
                            <Select
                            isSearchable='true'
                            defaultValue={oldktpprov[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={provinsi}
                            onChange={submit_prov_ktp}
                            />
                          </div>
                        }
                      </div>
                      <div className='col-md-6'>
                        {oldktpkab[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Kabupaten / Kota</label>
                            <Select
                            isSearchable='true'
                            defaultValue={oldktpkab[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={kabkot}
                            onChange={submit_kab_ktp}
                            />
                          </div>
                        }
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        {oldktpkec[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Kecamatan</label>
                            <Select
                            isSearchable='true'
                            defaultValue={oldktpkec[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={kecamatan}
                            onChange={submit_kec_ktp}
                            />
                          </div>
                        }
                      </div>
                      <div className='col-md-6'>
                        {oldktpdesa[0] !== undefined &&
                          <div className="mb-3">
                            <label className="form-label">Desa / Kelurahan</label>
                            <Select
                            isSearchable='true'
                            defaultValue={oldktpdesa[0]}
                            getOptionValue={option => option.id}
                            getOptionLabel={option => option.nama}
                            options={desa}
                            onChange={submit_desa_ktp}
                            />
                          </div>
                        }
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='col-md-9'>
                        
                      </div>
                      <div className='col-md-3'>
                        <div className="d-grid gap-2">
                          <Button variant="primary" onClick={submit}>
                            Simpan
                          </Button>
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