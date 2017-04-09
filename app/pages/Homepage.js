import React from 'react';
import HomeLeftSidebar from '../components/Homepage/HomeLeftSidebar.js';
import MainFeed from '../components/Homepage/MainFeed.js';
import HomeRightSidebar from '../components/Homepage/HomeRightSidebar.js';

export default class Homepage extends React.Component {
  render() {
    return(
      <div>
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
