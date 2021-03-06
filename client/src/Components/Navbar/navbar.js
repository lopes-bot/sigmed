import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar2">

                <div className="container">
                    <Link className="navbar-brand " to ="/">SigMed</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    <div className="collapse navbar-collapse float-left " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to ="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="">Planos</Link>
                        </li>
                    
                        <li className="nav-item">
                            <Link className="nav-link " to ="">Sobre</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to ="">Funcionalidade</Link>
                        </li>


                        
                        

                    
                        </ul>
                        <form className="form-inline my-2 my-lg-0  ml-sm-0 ml-lg-3 ">
                           <Link className="btn btn-outline  but my-sm-0 " to="/login">Entrar</Link> 
                        </form>
                        
                    </div> 

                </div>
              
                    
               </nav>
            </div>
        )
    }
}
