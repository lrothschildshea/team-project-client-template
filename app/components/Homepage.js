import React from 'react';
import Navbar from './Navbar.js';
import EventWidget from './EventWidget.js';

export default class Homepage extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <HomeLeftSidebar />
            <MainFeed />
            <HomeRightSidebar />
          </div>
        </div>
      </div>
    )
  }
}

class MainFeed extends React.Component {
  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
          <div className="main-feed">
              <h1>Recent Activity</h1>
              <MainFeedElement author="Person 1" postedDate="Friday at 10:06 AM" bandName="Band 1" bandPicture="img/bandForHomescreen.jpg">Practice is canceled tonight (2/24)!</MainFeedElement>
              <MainFeedElement author="Person 2" postedDate="Friday at 10:07 AM" bandName="Band 5" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 3" postedDate="Friday at 10:08 AM" bandName="Band 2" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 4" postedDate="Friday at 10:09 AM" bandName="Band 3" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 5" postedDate="Friday at 10:10 AM" bandName="Band 1" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 6" postedDate="Friday at 10:11 AM" bandName="Band 3" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
              <MainFeedElement author="Person 7" postedDate="Friday at 10:12 AM" bandName="Band 1" bandPicture="img/bandForHomescreen.jpg">A fake Post!</MainFeedElement>
          </div>
      </div>
    )
  }
}

class MainFeedElement extends React.Component {
  render() {
    return(
      <div className="panel">
          <div className="panel-header">
              <div className="row">
                  <div className="col-md-2">
                      <img src={this.props.bandPicture} width="75%" />
                  </div>
                  <div className="col-md-10">
                      <h3>{this.props.bandName}</h3>
                  </div>
              </div>
          </div>
          <div className="panel-body">
              <p>{this.props.children}</p>
          </div>
          <div className="panel-footer">
              <div className="row">
                  <div className="col-md-6">
                      <p>Posted By: <a href="#">{this.props.author}</a></p>
                      <p>Posted on: {this.props.postedDate}</p>
                  </div>
                  <div className="col-md-6">
                      <br />
                      <button type="button" className="btn btn-default pull-right">Go To Post</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

class HomeLeftSidebar extends React.Component {
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

class LeftSidebarElement extends React.Component {
  render() {
    return (
      <li role="presentation">
          <a href={this.props.linkPage}>{this.props.bandName}
            <span className="badge pull-right">{this.props.notification}</span>
          </a>
      </li>
    )
  }
}


class HomeRightSidebar extends React.Component {
  render() {
    return(
      <div className="col-md-3 col-md-offset-9">
          <div className="right-sidebar">
            <EventWidget />
          </div>
      </div>
    )
  }
}
