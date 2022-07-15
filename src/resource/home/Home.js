import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Header from '../../assets/img/header.png';

import Navbar from '../component/Nonavbar';
import Category from './Category';
import Latest from './Latestprod';
import Footer from '../component/Footer';

function Home() {

  return (
    <React.Fragment>
    <Navbar/>
    <div className="App">
        <div className='container'>
          <div className='row'>

            <div className='col-md-6' style={{paddingTop : '3%'}}>
                <Image src={Header} alt="Brand-Image" className="img-fluid" />
            </div>
            
            <div className='col-md-6' style={{padding : '5%', paddingTop: '8%'}}>
                <p style={{ fontSize: 50 }}>" Dolan "</p>
                <h2 style={{ marginTop: -15 }}>Dodolan Online</h2>
                <p>Platform UKM Virtual Expo yang diselenggarakan oleh Pemerintah Kabupaten Tegal, untuk mengenalkan produk-produk pelaku usaha lokal.</p>
                <Button href="/category" style={{ width : '70%' }}>Cari Produk</Button>
            </div>
            
          </div>
        </div>

        <Category/>

        <Latest/>

    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default Home;