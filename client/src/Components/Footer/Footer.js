import React, { Component } from 'react';
import './footer.css';

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
                   <div className="col-4"></div>
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
