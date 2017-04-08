import React from 'react';
import Navbar from '../Navbar.js';
import {mockUser} from '../Navbar.js';
import HomeLeftSidebar from './HomeLeftSidebar.js';
import MainFeed from './MainFeed.js';
import HomeRightSidebar from './HomeRightSidebar.js';

export default class Homepage extends React.Component {
  render() {
    return(
      <div>
        <Navbar user={mockUser} />
        <div className="container-fluid">
          <div className="row">
            <HomeLeftSidebar />
            <MainFeed user="1" />
            <HomeRightSidebar />
          </div>
        </div>
      </div>
    )
  }
}
