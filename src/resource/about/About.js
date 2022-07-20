import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function About() {

  useEffect(() => {
    const topNavActive = document.getElementById('about').classList.add('top-active');
  }, []);

  return (
    <React.Fragment>
    <Navbar/>
    <div className="App">
        <div className='container' style={{paddingTop : '5%'}}>
          <div className='row'>
            
            <div className='col-md-12' style={{paddingTop : '5%'}}>
              <h1>About Page</h1>
            </div>
            
          </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
}

export default About;