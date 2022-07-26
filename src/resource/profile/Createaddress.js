import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

function Createaddress() {

    let params = useParams();
    const apiUrl = useSelector(state => state.ApiReducer);

    const token = localStorage.getItem('passport');
    const pisah = token.split('#');
    const idUser = pisah[2];
    const mytoken = pisah[3];
    const token_auth = {
      headers: { Authorization: `Bearer ${mytoken}` }
    };

    // New data start
    const [selectprov, setSelectprov] = useState('');
    const [selectkabkot, setSelectkabkot] = useState('');
    const [selectkec, setSelectkec] = useState('');
    const [selectdesa, setSelectdesa] = useState('');
    // New data start

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
            setSelectprov(event.nama);
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
            setSelectkabkot(event.nama);
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
            setSelectkec(event.nama);
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
        setSelectdesa(event.nama);
    }

    useEffect(() => {

        if (mytoken !== null && params.id == idUser) {
          axios.get(
            apiUrl.url+'user-setting/'+params.id, token_auth
          ).then(function (response) {
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

        }

    }, []);

    return (
        <div className='pt-2 mb-5'>
        <div className='row'>
            <div className='col-md-6'>
                <div className="mb-3">
                    <label className="form-label">Provinsi</label>
                    <Select
                    isSearchable='true'
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.nama}
                    options={provinsi}
                    onChange={submit_prov}
                    />
                </div>
            </div>
            <div className='col-md-6'>
            {kabkot !== '' &&
                <div className="mb-3">
                <label className="form-label">Kabupaten / Kota</label>
                <Select
                isSearchable='true'
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
                {kecamatan !== '' &&
                    <div className="mb-3">
                    <label className="form-label">Kecamatan</label>
                    <Select
                    isSearchable='true'
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.nama}
                    options={kecamatan}
                    onChange={submit_kec}
                    />
                    </div>
                }
            </div>
            <div className='col-md-6'>
                {desa !== '' &&
                    <div className="mb-3">
                    <label className="form-label">Desa / Kelurahan</label>
                    <Select
                    isSearchable='true'
                    getOptionValue={option => option.id}
                    getOptionLabel={option => option.nama}
                    options={desa}
                    onChange={submit_desa}
                    />
                    </div>
                }
            </div>
        </div>
        </div>
    );
}

export default Createaddress;