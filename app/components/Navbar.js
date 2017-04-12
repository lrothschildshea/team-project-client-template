import React from 'react';
import {Link} from 'react-router';
import {ResetDatabase} from '../database.js';

/*export const mockUser = {
  id: 1,
  name: "Sean Morris",
  email: "sean@morris.com",
  imageurl: "img/SeanProfile.png",
  messages: 5
}*/

export default class Navbar extends React.Component {
  render() {
    var chatLink = "chat/"+this.props.user._id
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
              <Link className="navbar-brand" to='/'>
                LetsJam!
              </Link>
              <div className="btn-group">
                <button type="button" className="btn btn-default navbar-btn">
                  <Link to="/">
                    <span className="glyphicon glyphicon-home"></span>
                  </Link>
                </button>
                <button type="button" className="btn btn-default navbar-btn">
                  <Link to="/search">
                    <span className="glyphicon glyphicon-search"></span>
                  </Link>
                </button>
                <ResetDatabase />
              </div>
            </div>
            <div className="nav navbar-nav navbar-right">
              <div className="btn-toolbar" role="toolbar">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default navbar-btn">
                    <Link to={chatLink}>
                      <span className="glyphicon glyphicon-comment"></span>
                      <span className="badge">{this.props.user._id}</span>
                    </Link>
                  </button>
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
                                    <img src="img/spongebob_profile.jpg" className="img-cirle img-responsive"></img>
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
