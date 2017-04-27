import React from 'react';
import BandEdit from './BandEdit.js';
import EventWidget from './EventWidget.js';
import Comments from './Comments.js';
import {getBand, getBandFeedData, getUser} from '../server.js';

export default class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      band : {
        name: "Generic Band Name",
        info: "Music band with instruments",
        location: "Amherst, MA",
        members: [],
        fans: 0,
        pagePicture: "none",
        wanted: [],
        feed: 0
      },
      feedItems: []
    };
  }

  refresh() {
    getBand(this.props.params.id, (band) => {
      this.setState({band});
    });
    getBandFeedData(this.props.params.id, (feedData) => {
      this.setState({feedItems: feedData.contents});
    });
    getUser("1", (userObj) => {
      this.setState({user: userObj});
    });
  }

  componentDidMount() {
    this.refresh();
    this.forceUpdate();
  }

  updateFeed(items) {
    this.setState({"feedItems": items.contents});
  }


  render() {
    return (
      <div>
        <BandEdit band={this.state.band} refresh={this.refresh.bind(this)}/>
        <div className="container band-main">
          <BandCover band={this.state.band} />
          <div className="row">
            <div className="col-md-4 bandpage-left">
              <BandInfo band={this.state.band} />
              <WantedWidget wanted={this.state.band.wanted} />
              {(typeof this.state.user !== "undefined") ? <EventWidget user={this.state.user} page="bandpage"/> : null }
            </div>
            <div className="col-md-8 bandpage-right">
              <Comments
                comments={this.state.feedItems}
                band={this.props.params.id}
                feed={this.state.band.feed}
                update={this.updateFeed.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class BandCover extends React.Component {
  render() {
    return (
      <div className="row band-cover" style={{backgroundImage: this.props.band.pagePicture}}>
        <div className="band-spacer">
        </div>
        <div className="band-name pull-left">
          <h1>
            {this.props.band.name}
          </h1>
        </div>
        <div
          className="btn-group pull-right"
          role="group">
          <button
            type="button"
            className="btn btn-default"
            data-toggle="modal"
            data-target="#editBandModal">
            Edit <span className="glyphicon glyphicon-pencil"></span>
        </button>
      </div>
    </div>
    )
  }
}

class BandInfo extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">
            Band Info
          </h3>
        </div>
        <div className="panel-body">
          <ul className="list-unstyled">
            <li>
              <span className="glyphicon glyphicon-map-marker">
              </span>
              {this.props.band.location}
            </li>
            <li>
              <span className="glyphicon glyphicon-info-sign">
              </span>
              {this.props.band.info}
            </li>
            <li>
              <span className="glyphicon glyphicon-user">
              </span>
              {this.props.band.members.length} members
            </li>
            <li>
              <span className="glyphicon glyphicon-sunglasses">
              </span>
              {this.props.band.fans} People are fans of {this.props.band.name}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

class WantedWidget extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Wanted</h3>
        </div>
        <div className="panel-body">
          <ul className="media-list">
            {this.props.wanted.map((want, id) =>
              <li key={id} className="media">
                <div className="media-left media-top">
                  PIC
                </div>
                <div className="media-body">
                  <a href="#">
                    {want.instrument}
                  </a>
                  <br />
                  {want.info}
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
