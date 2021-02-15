import React, {Component} from 'react';
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
          <Ticket/>
      </div>
      )
    }
  }
export default Home