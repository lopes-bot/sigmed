import React,{Component} from 'react';
import Navbar from './Components/Navbar/navbar';
import Body from './Components/body/body';






export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Body />
        
      </div>
    )
  }
}

