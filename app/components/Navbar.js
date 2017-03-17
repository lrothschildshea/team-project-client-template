import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="nav navbar-nav navbar-left" role="search">
              <a className="navbar-brand" href="#">
                LetsJam!
              </a>
              <div className="btn-group">
                <button type="button" className="btn btn-default navbar-btn">
                  <span className="glyphicon glyphicon-home"></span>
                </button>
                <button type="button" className="btn btn-default navbar-btn">
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </div>
            </div>
            <div className="nav navbar-nav navbar-right">
              <div className="btn-toolbar" role="toolbar">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-comment"></span>
                    <span className="badge">5</span>
                  </button>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default dropdown-toggle navbar-btn" data-toggle="dropdown">
                      <span className="glyphicon glyphicon-user"></span> 
                      <strong>Sean Morris</strong>
                      <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="navbar-login">
                          <div className="row">
                            <div className="col-lg-4">
                              <p className="text-center">
                                <img src="img/SeanProfile.png" className="img-cirle img-responsive"></img>
                              </p>
                            </div>
                            <div className="col-lg-8">
                              <p className="text-left"><strong>Sean Morris</strong></p>
                              <p className="text-left small">scmorris@umass.edu</p>
                              <p className="text-left">
                                <a href="#" className="btn btn-primary btn-block btn-sm">Settings</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <div className="navbar-login navbar-login-session">
                          <div className="row">
                            <div className="col-lg-12">
                              <p>
                                <a href="#" className="btn btn-danger btn-block">Log Out</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
