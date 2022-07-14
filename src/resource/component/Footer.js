import React from 'react';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import { mdiLightningBoltCircle } from '@mdi/js';

function Footer() {

  return (
    <div className="App">

        <div className='container' style={{paddingTop : '10%'}}>
            
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl d-flex flex-wrap justify-content-center py-2 flex-md-row flex-column">
                <div className="mb-2 mb-md-0 text-center" style={{ fontSize: 13 }}>
                    Collaboration Work Disdakopukm, Distankp, Disperinnaker, Dkpp 
                    <br/>
                    Powered <Icon path={mdiLightningBoltCircle} size={0.7} /> By Dinas Kominfo Kabupaten Tegal
                    <br/>
                    Copyright © {new Date().getFullYear()} | made with <Icon path={mdiHeart} size={0.7} /> By IHK
                </div>
              </div>
            </footer>
            
        </div>

    </div>
  );
}

export default Footer;