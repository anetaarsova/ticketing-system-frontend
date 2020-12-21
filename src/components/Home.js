import React, {Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import Ticket from './Ticket';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

render() {
    return (
      <div>
        <Header/>
          <Ticket/>
        <Footer/>
      </div>
      )
    }
  }
export default Home