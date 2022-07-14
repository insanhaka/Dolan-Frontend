import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import Empty from '../../assets/img/empty.png';
import '../../assets/css/homecategory.css';
import { Link } from "react-router-dom";

function Category() {

    const apiUrl = useSelector(state => state.ApiReducer);
    const apiHeader = useSelector(state => state.HeaderReducer);

    const [category, setCategory] = useState('');

    useEffect(() => {

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
                <div className="App">
            
                    <div className='container' style={{paddingTop : '6%'}}>
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
        );
    }else {
        const catlist = category.map((cat) =>
            <div className='col-sm-2 p-3' key={cat.id}>
                <Card className="kartu">
                    <Link to={'category/'+cat.uri}>
                        <Card.Body style={{ color:'#303952' }}>
                            <center>
                            <Image src={cat.icon} alt="Brand-Image" className="img-cat pb-2"/>
                            <br/>
                            {cat.name}
                            </center>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        );
        
        return (
            <div className="App">
                <div className='container' style={{paddingTop : '6%'}}>
                    <div className='row'>
                        <div className='col-8'>
                            <h3>Kategori</h3>
                        </div>
                    </div>
                    
                    <br/>
        
                    <div className='row'>
                        {catlist}
                    </div>
                </div>
            </div>
        );
    }

  
}

export default Category;