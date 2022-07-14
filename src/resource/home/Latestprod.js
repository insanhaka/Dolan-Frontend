import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Empty from '../../assets/img/empty.png';

function Latestprod() {

    const apiUrl = useSelector(state => state.ApiReducer);
    const apiHeader = useSelector(state => state.HeaderReducer);

    const [product, setProduct] = useState('');

    useEffect(() => {

        axios.get(apiUrl.url+'home-page',
        {
            headers: {
              'dolan-key': apiHeader.key 
            }
        })
        .then(function (response) {
            // handle success
            const getProduct = response.data.product;
            setProduct(getProduct);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log("Mohon maaf, sedang ada gangguan pada server");
        });
    
    },[]);

    // console.log(product);

    if (product.length == 0) {
        return (
                <div className="App">
            
                    <div className='container' style={{paddingTop : '6%'}}>
                        <Card>
                            <Card.Body>
                                <div className='row justify-content-center'>
                                    <div className='col-sm-1'>
                                        <Image src={Empty} alt="Login Image" className="img-fluid" />
                                    </div>
                                    <div className='col-sm-5 pt-3'>
                                        <h5>Data Produk Tidak Ditemukkan</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
            
                </div>
        );
    }
    else {
        const prodlist = product.map((prod) =>
            <div className='col-md-3 p-3' key={prod.id}>
                <Card>
                    <Card.Img variant="top" alt='img-produk' src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg" style={{ height: 200, objectFit: 'cover' }} />
                    <Card.Body>
                        <center>
                        <h6>{prod.name}</h6>
                        </center>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="d-grid gap-2 mb-3">
                                    <Button href={'/product/'+prod.id} style={{ borderWidth: 1, borderColor: '#546de5', backgroundColor: '#fff', color: '#546de5', }} >Detail</Button>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="d-grid gap-2 mb-3">
                                    <Button href={'/product/'+prod.id}>Beli</Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
        
        return (
            <div className="App">

                <div className='container' style={{paddingTop : '6%'}}>
                    <div className='row'>
                        <div className='col-8'>
                            <h3>Produk Terbaru</h3>
                        </div>
                        <div className='col-4'>
                            <Button href="#" size="sm" variant="light" style={{ float : 'right' }}>Lihat Semua</Button>
                        </div>
                    </div>
                    
                    <br/>

                    <div className='row'>

                        {prodlist}
                        
                    </div>
                </div>

            </div>
        );
    }



}

export default Latestprod;