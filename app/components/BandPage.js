import React from 'react';
import Navbar from './Navbar.js';
import BandEdit from './BandEdit.js';
import EventWidget from './EventWidget.js';
import {mockEventList} from './EventWidget.js';
import Comments from './Comments.js';
import MusicWidget from './MusicWidget.js';

const band = {
  name: "Generic Band Name",
  info: "Music band with instruments",
  location: "Amherst, MA",
  memberInfo: "3 Real people are in this band",
  fans: 420,
  image: {
    backgroundImage: 'url(../img/genericband.jpg)',
  },
  wanted: [
    {
      id: 1,
      instrument: "Guitarist",
      info: "Experienced Flamenco guitarist",
    },
    {
      id: 2,
      instrument: "Saxophone",
      info: "Play me something spicy",
    }
  ],
  members: [
    {
      name: "Sean Morris",
      id: 1,
    },
    {
      name: "Spongebob",
      id: 2,
    },
    {
      name: "Squidward",
      id: 3,
    },
  ],
}

export default class BandPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BandEdit band={band} />
        <div className="container band-main">
          <BandCover name={band.name} image={band.image} />
          <div className="row">
            <div className="col-md-4 bandpage-left">
              <BandInfo band={band} />
              <WantedWidget wanted={band.wanted} />
              <EventWidget eventList={mockEventList} />
            </div>
            <div className="col-md-8 bandpage-right">
              <MusicWidget />
              <Comments />
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
      <div className="row band-cover" style={this.props.image}>
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
              {this.props.band.memberInfo}
            </li>
            <li>
              <span className="glyphicon glyphicon-sunglasses">
              </span>
              {this.props.band.fans} People are fans of Generic Band Name
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
              <li key={want.id} className="media">
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
