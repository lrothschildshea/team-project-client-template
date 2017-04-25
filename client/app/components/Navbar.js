import React from 'react';
import {Link} from 'react-router';
import {ResetDatabase} from './ResetDatabase.js';

export default class Navbar extends React.Component {
  render() {
    var profileLink = "profile/"+this.props.user._id
    return (
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="nav navbar-nav navbar-left" role="search">
              <div className="navbar-brand" >
                LetsJam!
              </div>
              <div className="btn-group">
                <Link to="/" className="btn btn-default navbar-btn">
                  <span className="glyphicon glyphicon-home"></span>
                </Link>
                <Link to="/search" className="btn btn-default navbar-btn">
                  <span className="glyphicon glyphicon-search"></span>
                </Link>
                <ResetDatabase />
              </div>
            </div>
            <div className="nav navbar-nav navbar-right">
              <div className="btn-toolbar" role="toolbar">
                <div className="btn-group" role="group">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-default dropdown-toggle navbar-btn" data-toggle="dropdown">
                      <span className="glyphicon glyphicon-user"></span> 
                        <strong>{this.props.user.fullName}</strong>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <div className="navbar-login">
                            <div className="row">
                              <div className="col-lg-4">
                                <p className="text-center">
                                  <Link to={profileLink}>
                                    <img src={this.props.user.profilePicture} className="img-cirle img-responsive"></img>
                                  </Link>
                                </p>
                              </div>
                              <div className="col-lg-8">
                                <Link to={profileLink}>
                                  <p className="text-left"><strong>{this.props.user.fullName}</strong></p>
                                </Link>
                                <p className="text-left small">{this.props.user.email}</p>
                                <p className="text-left">
                                  <Link to={profileLink} className="btn btn-primary btn-block btn-sm">Settings</Link>
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
