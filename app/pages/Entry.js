import React from 'react';
import Navbar from '../components/Navbar.js';
import {mockUser} from '../components/Navbar.js';

export default class Entry extends React.Component {

  render(){
    return (
      <div>
        <Navbar user={mockUser} />
        {
          this.props.children
        }
      </div>
    )
  }
}
