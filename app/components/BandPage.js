import React from 'react';
import BandEdit from './BandEdit.js';
import EventWidget from './EventWidget.js';
import {mockEventList} from './EventWidget.js';
import Comments from './Comments.js';
import {mockComments} from './Comments.js';
import MusicWidget from './MusicWidget.js';
import {getBand} from '../server.js';

export default class BandPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {band : {
      name: "Generic Band Name",
      info: "Music band with instruments",
      location: "Amherst, MA",
      members: [],
      fans: 0,
      pagePicture: "none",
      wanted: ["saxophone"],
    }};
  }

  refresh() {
    getBand(this.props.params.id, (band) => {
      this.setState({band});
    });
  }

  componentDidMount() {
    this.refresh();
    this.forceUpdate();
  }


  render() {
    return (
      <div>
        <BandEdit band={this.state.band} />
        <div className="container band-main">
          <BandCover name={this.state.band.name} image={this.state.band.pagePicture} />
          <div className="row">
            <div className="col-md-4 bandpage-left">
              <BandInfo band={this.state.band} />
              <WantedWidget wanted={this.state.band.wanted} />
              <EventWidget eventList={mockEventList} />
            </div>
            <div className="col-md-8 bandpage-right">
              <MusicWidget />
              <Comments comments={mockComments} />
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
      <div className="row band-cover" style={{backgroundImage: this.props.image}}>
        <div className="band-spacer">
        </div>
        <div className="band-name pull-left">
          <h1>
            {this.props.name}
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
            {this.props.wanted.map((want) =>
              <li key={want} className="media">
                <div className="media-left media-top">
                  PIC
                </div>
                <div className="media-body">
                  <a href="#">
                    {want}
                  </a>
                </div>
                <div className="media-right">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="...">
                    <button type="button" className="btn btn-default">Apply</button>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
