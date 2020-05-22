import React, { Component } from 'react';
//import Navbar from '../Navbar/navbar';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './Login.css';



export default class Login extends Component {

    responseGoogle(response){
        console.log('tag', response);
    }
    responseFacebook(response){
        console.log('tag', response);
    }
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:"",
        };

        this.handleEmailChage = this.handleEmailChage.bind(this);
        this.handlePasswordChage= this.handlePasswordChage.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);

    }

    handleEmailChage = (event) =>{
        this.setState({email:event.target.value})
        
    }

    handlePasswordChage = (event)=>{
        this.setState({password:event.target.value})
    }

    handleSubmit = (event) =>{
       
        event.preventDefault();
        console.info("states", this.state)
        
        
    }

 
    render() {

        return (
            <div>
               
                <div className="container login">
                    <div className="row">
                        <div className="card ">
                            <h3 id="ch">SigMed </h3>
                            <div>
                                <GoogleLogin
                                    clientId="54235386138-lkdiqa84ait3pqf7m7ectrjrc80n0o5a.apps.googleusercontent.com"
                                    render={renderProps => (
                                    <button 
                                    className="google"
                                    onClick={renderProps.onClick}
                                     disabled={renderProps.disabled}>
                                     Login com o Google</button>
                                 )}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                   
                                
                                 />
                                 <br></br>
                                 <FacebookLogin 
                                     appId="841869212975410"
                                     textButton="Login com Facebook"
                                     autoLoad={false}
                                     fields="name,email,picture"
                                     onClick={this.responseFacebook}
                                     callback={this.responseFacebook}
                                     cssClass="facebook"
                                 />
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                     <label htmlFor="email">Email:</label>
                                     <input className="form-control" name="email" type="email" id="email" 
                                         placeholder="Digite o email" onChange={this.handleEmailChage} />

                                </div>
                               
                                <div className="form-group">

                                 <label htmlFor="password">Senha:</label>
                                 <input className="form-control" type="password" name="password" id="password" 
                                     placeholder="Digite sua senha"  onChange={this.handlePasswordChage}  />
                                </div>

                                <button className="but-t"  type="submit">Entrar</button>
                            </form>
                            <div>
                                <h6 id="ch">Cadastre-se</h6>
                                <p id="ch">Esqueceu Sua Senha?</p>
                            </div>
                        </div>

                    </div>

                </div>
               

            </div>
        )
    }
}
