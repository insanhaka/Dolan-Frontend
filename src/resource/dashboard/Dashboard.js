import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Dashboard() {

  let params = useParams();

  return (
    <React.Fragment>
    <Navbar/>
    <div className="App">
        <div className='container'>
          <div className='row'>

            <div className='col-md-6' style={{paddingTop : '3%'}}>
                
            </div>
            
            <div className='col-md-6' style={{padding : '5%', paddingTop: '8%'}}>
                <h2 style={{ marginTop: -15 }}>User ID = {params.id}</h2>
            </div>
            
          </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
  );
  
}

export default Dashboard;