import React from 'react';
import LeftSidebarElement from './LeftSidebarElement.js';
import LeftSidebarCreateBandElement from './LeftSidebarCreateBandElement'

export default class HomeLeftSidebar extends React.Component {
  render() {
    return(
      <div className="col-md-3">
          <div className="left-sidebar container-fluid">
              <div className="row">
                  <div className="col-md-12">
                      <h1>Bands</h1>
                      <ul className="nav nav-pills nav-stacked">
                        {(typeof this.props.userBands !== "undefined") ? this.props.userBands.map((band, i) =>{
                            return(
                              <LeftSidebarElement key={i} band={band} notification="1" />
                            )
                          }) : null }
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <h4>Following</h4>
                      <ul className="nav nav-pills nav-stacked">
                        {(typeof this.props.userFollowing !== "undefined") ? this.props.userFollowing.map((band, i) =>{
                            return(
                              <LeftSidebarElement key={i} band={band} notification="1" />
                            )
                          }) : null }
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <h4>New Band</h4>
                      <ul className="nav nav-pills nav-stacked">
                          <LeftSidebarCreateBandElement />
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
