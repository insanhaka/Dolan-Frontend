import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Pp from '../../assets/img/no-img.png';
import Icon from '@mdi/react';
import { mdiAccountBoxOutline } from '@mdi/js';
import { mdiStorefrontOutline } from '@mdi/js';
import { mdiBasketOutline } from '@mdi/js';
import { mdiLogout } from '@mdi/js';
import Button from 'react-bootstrap/Button';
import { 
    Link,
    useNavigate 
} from "react-router-dom";

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Profile() {

    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    
    const logout = () => {
        localStorage.removeItem('passport');
        navigate("/", { replace: true });
    }

    useEffect(() => {
        const topNavActive = document.getElementById('account').classList.add('top-active');

        const token = localStorage.getItem('passport');
        if (token !== null) {
            const pisah = token.split('#');
            const nama = pisah[0];
            setName(nama);
            const mail = pisah[1];
            setEmail(mail);
            const idUser = pisah[2];
            setUserID(idUser);
        }

    }, []);

  return (
    <div className="App">
      <Navbar/>
        <div className='container' style={{paddingTop : '3%'}}>
            <div className='row'>
                <div className='col-sm-2 text-center'>
                    <Image src={Pp} className="img-fluid mb-5" alt="User Image"/>
                </div>
                <div className='col-sm-10 pt-2'>
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <br/>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to={`/edit/profile/${userID}`} style={{ color: '#303952' }}>
                                <Icon path={mdiAccountBoxOutline} size={1} style={{ marginRight: 10 }} />
                                Ubah Profil
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/user/store' style={{ color: '#303952' }}>
                                <Icon path={mdiStorefrontOutline} size={1} style={{ marginRight: 10 }} />
                                Toko Saya
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/user/product' style={{ color: '#303952' }}>
                                <Icon path={mdiBasketOutline} size={1} style={{ marginRight: 10 }} />
                                Produk Saya
                            </Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button onClick={logout} variant="light">
                                <Icon path={mdiLogout} size={1} style={{ marginRight: 10 }} />
                                Keluar
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  );
  
}

export default Profile;