import React, { Component } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="pe row">

                   <div className="col-4">
                       <h6 id="peh6">
                       Sigmed - Um SoftWare de Organização e gerenciamento 
                       de consultórios e clínicas Médicas
                       </h6>
                   </div>
                   <div className="col-4">
                   <Link to="">  <img className="ico" src="img/inst.png" alt=""/></Link>
                   <Link to= ""><img  className="ico" src="img/face.png" alt=""/></Link>
                   <Link to=""> <img className="ico" src="img/whats.png" alt=""/></Link>
                 
                        
                       

                   </div>
                   <div className="col-4">
                        <h6 id="peh6">
                        Termo de uso | Política de privacidade <br></br>
                     ©2020 SigMed
                        </h6>
                   </div>

                </div>
           
            </div>
            
        )
    }
}
