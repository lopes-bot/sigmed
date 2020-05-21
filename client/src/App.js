import React,{Component} from 'react';
import Navbar from './Components/Navbar/navbar';
import Bodyclin from './Components/bodyclin/bodyclin';
import Footer from './Components/Footer/Footer';
import Faixa from './Components/faixa/faixa';





export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Bodyclin />
        <Faixa />
        
     
      </div>
    )
  }
}

