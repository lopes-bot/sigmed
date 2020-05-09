import React,{Component} from 'react';
import Navbar from './Components/Navbar/navbar';
import Bodyclin from './Components/bodyclin/bodyclin';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Bodyclin />
      </div>
    )
  }
}

