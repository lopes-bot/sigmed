import React, { Component } from 'react';
//import Navbar from '../Navbar/navbar';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';



export default class Login extends Component {

    responseGoogle(response){
        console.log('tag', response);
    }
    responseFacebook(response){
        console.log('tag', response);
    }

    render() {

        return (
            <div>
                
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <h3>Login</h3>
                            <div>
                                <GoogleLogin
                                    clientId="54235386138-lkdiqa84ait3pqf7m7ectrjrc80n0o5a.apps.googleusercontent.com"
                                    buttonText="Login com Google"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                
                                 />
                                 <FacebookLogin 
                                     appId="841869212975410"
                                     textButton="Login com Facebook"
                                     autoLoad={true}
                                     fields="name,email,picture"
                                     onClick={this.responseFacebook}
                                     callback={this.responseFacebook}
                                 />
                            </div>
                            <form action="">
                                <input type="text"/>
                                <input type="password"/>
                                <button type="submit">Entra</button>

                            </form>
                        </div>

                    </div>

                </div>
               

            </div>
        )
    }
}
