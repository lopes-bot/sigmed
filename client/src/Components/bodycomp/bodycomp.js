import React, { Component } from 'react';
import './bodycomp.css';

export default class bodycomp extends Component {
    render() {
        return (
            <div className="row ">
                 <div  className="col-4  ">
                     <img className="img2" src="img/nova.png" alt=""/>
                 </div>
                 <div  className="col-5 " >
                 <div className=" cardw" > 
                            <h4 id="bodycomph4">Conheça melhor o SigMed e veja o que podemos
                             fazer para o sucesso do seu consutório e clínica</h4>
                            <h6 id="bodycomph6">Nós do SigMed Entramos em Contato </h6> 
                           
                            <form>
                                <div className="form-group">
            
                                  <input type="text" className="cardt" name="nome" placeholder="Nome" />

                                </div>
                                <div className="form-group">
                                
                                  <input type="email" className="cardt" name="email" placeholder="Email" />
                                   
                                </div>

                                <div className="form-group">
                                    
                                 <input type="text" className="cardt" name="telefone" placeholder="Telefone" />
                                   
                                </div>
                                <button type="submit" id="but">A SigMed Liga Para Você</button>
                                </form>
                        </div>

                 </div>
                
              
            </div>
        )
    }
}
