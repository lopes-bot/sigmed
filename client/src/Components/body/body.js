import React, { Component } from 'react';
import "./body.css";

export default class body extends Component {
    render() {
        return (
            <div>
                 <div className="container row my-5">
                    <div className="col-5 formt">
                        <h2 className="h2">Software para Consultório e Clínicas Médicas</h2>
                        <h4 className="h4">
                        Sistema para Gerenciamento de Clínicas e consultórios Médicos.
                        Controle e Organização de qualquer lugar.
                        </h4>
                        <h4 className="h4" id="h4">
                        Veja o que o SigMed pode fazer por você
                        faça um teste grátis.
                        </h4>
                        <form action="" className="posit">

                            <div className="form-group">
                                <input className="form-control input" type="text" name="nome" placeholder="Nome"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control input" type="text" name="email" placeholder="Email"/>
                            </div>

                            <div className="form-group">
                                <input className="form-control input" type="text" name="telefone" placeholder="Telefone"/>
                            </div>
                            
                            <button className="btn butt" type="submit">Teste Grátis</button>

                        </form>
                    </div>
                    <div className="col-7 formI">
                        <img className="img-fluid" src="img/med.jpg" alt=""/>
                    </div>
                
                </div>
                
            </div>
           
        )
    }
}
