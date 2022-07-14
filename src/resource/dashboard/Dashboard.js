import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Navbar from '../component/Yesnavbar';
import Footer from '../component/Footer';

function Dashboard() {

  return (
    <div className="App">
      <Navbar/>
        <div className='container' style={{paddingTop : '5%'}}>
          <div className='row'>
            
            <div className='col-md-12' style={{paddingTop : '5%'}}>
              <h1>Dashboard Page</h1>
            </div>
            
          </div>
        </div>
      <Footer/>
    </div>
  );
  
}

export default Dashboard;