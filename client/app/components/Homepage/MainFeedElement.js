import React from 'react';
import {Link} from 'react-router';

export default class MainFeedElement extends React.Component {
  render() {
    return(
      <div className="panel">
          <div className="panel-header">
              <div className="row">
                  <div className="col-md-2">
                      <img src={this.props.bandPicture} width="75%" />
                  </div>
                  <div className="col-md-10">
                      <h3>{this.props.band.name}</h3>
                  </div>
              </div>
          </div>
          <div className="panel-body">
              <p>{this.props.children}</p>
          </div>
          <div className="panel-footer">
              <div className="row">
                  <div className="col-md-6">
                      <p>Posted By: <Link to={"/profile/" + this.props.author._id}>{this.props.author.fullName}</Link></p>
                      <p>Posted on: {this.props.postedDate}</p>
                  </div>
                  <div className="col-md-6">
                      <br />
                      <Link to={"/band/" + this.props.band._id}><button type="button" className="btn btn-default pull-right">Go To Post</button></Link>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
