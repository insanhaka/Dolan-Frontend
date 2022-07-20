import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Cat from '../../assets/img/categories.png';
import '../../assets/css/homecategory.css';
import { Link } from "react-router-dom";
import Empty from '../../assets/img/empty.png';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Category() {

  const apiUrl = useSelector(state => state.ApiReducer);
  const apiHeader = useSelector(state => state.HeaderReducer);

  const [category, setCategory] = useState('');

  useEffect(() => {

    const topNavActive = document.getElementById('category').classList.add('top-active');

    axios.get(apiUrl.url+'home-page',
    {
        headers: {
          'dolan-key': apiHeader.key 
        }
    })
    .then(function (response) {
        // handle success
        const getCategory = response.data.category;
        setCategory(getCategory);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
        console.log("Mohon maaf, sedang ada gangguan pada server");
    });

  },[]);

    if (category.length == 0) {
      return (
        <React.Fragment>
        <Navbar/>
        <div className="App">
            <div className='container'>
              <div className='row pt-5'>
                <div className='col-1'>
                    <Image src={Cat} alt="Brand-Image" style={{ width: 90 }} className="img-fluid" />
                </div>
                <div className='col-10' style={{paddingTop : '2%'}}>
                    <h3>Kategori Produk</h3>
                </div> 
                <hr  style={{
                    color: '#778beb',
                    backgroundColor: '#778beb',
                    height: .5,
                    borderColor : '#778beb',
                    marginTop: 30,
                }}/>
              </div>
    
              <div className='col-sm-12 p-3'>
                <Card>
                  <Card.Body>
                      <div className='row justify-content-center'>
                          <div className='col-sm-1'>
                              <Image src={Empty} alt="Login Image" className="img-fluid" />
                          </div>
                          <div className='col-sm-5 pt-3'>
                              <h5>Data Kategori Tidak Ditemukkan</h5>
                          </div>
                      </div>
                  </Card.Body>
                </Card>
              </div>
              
            </div>
        </div>
        <Footer/>
        </React.Fragment>
      );
    }else {
      const catlist = category.map((cat) =>
          <div className='col-sm-3 p-4 mt-1' key={cat.id}>
            <Card className="kartu">
                <Link to={cat.uri}>
                    <Card.Body style={{ color:'#303952' }}>
                        <center>
                        <Image src={cat.icon} alt="Category Icon" className="img-cat pb-2"/>
                        <br/>
                        {cat.name}
                        </center>
                    </Card.Body>
                </Link>
            </Card>
          </div>
      );
      
      return (
        <React.Fragment>
        <Navbar/>
        <div className="App">
            <div className='container'>
              <div className='row pt-5'>
                <div className='col-1'>
                    <Image src={Cat} alt="Brand-Image" style={{ width: 90 }} className="img-fluid" />
                </div>
                <div className='col-10' style={{paddingTop : '2%'}}>
                    <h3>Kategori Produk</h3>
                </div> 
                <hr  style={{
                    color: '#778beb',
                    backgroundColor: '#778beb',
                    height: .5,
                    borderColor : '#778beb',
                    marginTop: 30,
                }}/>
              </div>
    
              <div className='row pt-5'>
                {catlist}
              </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
      );
    }
}

export default Category;