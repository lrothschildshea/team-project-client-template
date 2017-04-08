import React from 'react';
import LeftSidebarElement from './LeftSidebarElement.js';

export default class HomeLeftSidebar extends React.Component {
  render() {
    return(
      <div className="col-md-3">
          <div className="left-sidebar container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <h1>Bands</h1>
                      <ul className="nav nav-pills nav-stacked">
                          <LeftSidebarElement bandName="Band 1" linkPage="#" notification="3" />
                          <LeftSidebarElement bandName="Band 2" linkPage="#" notification="1" />
                          <LeftSidebarElement bandName="Band 3" linkPage="#" notification="2" />
                          <LeftSidebarElement bandName="Band 4" linkPage="#" />
                          <LeftSidebarElement bandName="Band 5" linkPage="#" notification="1" />
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <h4>Following</h4>
                      <ul className="nav nav-pills nav-stacked">
                          <LeftSidebarElement bandName="Band 1" linkPage="#"/>
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <h4>New Band</h4>
                      <ul className="nav nav-pills nav-stacked">
                          <LeftSidebarElement bandName="Create A Band" linkPage="#" notification="+" />
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
