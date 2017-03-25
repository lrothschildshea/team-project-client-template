import React from 'react';
import Navbar from './Navbar.js';

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
                      <p>Posted By:
                          <a href="#">{this.props.author}</a>
                      </p>
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
                          <li role="presentation">
                              <a href="#">Band 1
                                <span className="badge pull-right">3</span>
                              </a>
                          </li>
                          <li role="presentation">
                              <a href="#">Band 2
                                <span className="badge  pull-right">1</span>
                              </a>
                          </li>
                          <li role="presentation">
                              <a href="#">Band 3
                                <span className="badge  pull-right">2</span>
                              </a>
                          </li>
                          <li role="presentation">
                              <a href="#">Band 4
                              </a>
                          </li>
                          <li role="presentation">
                              <a href="#">Band 5
                                <span className="badge  pull-right">1</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <h4>Following</h4>
                      <ul className="nav nav-pills nav-stacked">
                          <li role="presentation">
                              <a href="#">Band 1</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <br />
              <div className="row">
                  <div className="col-md-12">
                      <h4>New Band</h4>
                      <ul className="nav nav-pills nav-stacked">
                          <li role="presentation">
                              <a href="#">Create A Band
                                <span className="badge pull-right">+</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

class HomeRightSidebar extends React.Component {
  render() {
    return(
      <div className="col-md-3 col-md-offset-9">
          <div className="right-sidebar">
              <a href="#">
                  <h1>Upcoming Events</h1>
              </a>
              <ul className="media-list">
                  <li className="media">
                      <hr />
                      <div className="media-left">
                          <p>Event:</p>
                          <p>Date:</p>
                          <p>Location:</p>
                      </div>
                      <div className="media-body">
                          <a href="#">
                              <p>Band 1 Event</p>
                              <p>Tomorrow at 7:00 PM</p>
                              <p>South College</p>
                          </a>
                      </div>
                      <hr />
                      <div className="media-left">
                          <p>Event:</p>
                          <p>Date:</p>
                          <p>Location:</p>
                      </div>
                      <div className="media-body">
                          <a href="#">
                              <p>Band 3 Event</p>
                              <p>Friday at 8:00 PM</p>
                              <p>Fine Arts Center</p>
                          </a>
                      </div>
                      <hr />
                      <div className="media-left">
                          <p>Event:</p>
                          <p>Date:</p>
                          <p>Location:</p>
                      </div>
                      <div className="media-body">
                          <a href="#">
                              <p>Band 5 Event</p>
                              <p>Saturday at 2:00 PM</p>
                              <p>Fine Arts Center</p>
                          </a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    )
  }
}
