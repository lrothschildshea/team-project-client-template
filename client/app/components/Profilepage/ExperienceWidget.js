import React from 'react';
import Comments from '../Comments.js';
import {mockComments} from '../Comments.js';

export default class ExperienceWidget extends React.Component {
  render() {
    return (
      <div className="panel info-section">
        <div className="panel-heading">
          <h2 className="panel-title">Experience</h2>
        </div>
        <div className="panel-body">
          <InstrumentsWidget instruments={this.props.profile.instruments} />
          <BandsWidget bands={this.props.profile.bands} />
        </div>
      </div>
    )
  }
}

class InstrumentsWidget extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Instruments</h3>
        </div>
        <div className="panel-body">
          <ul className="inst-list">
            {this.props.instruments.map((instrument) =>
              <li className="instrument" key={instrument.id}>{instrument.instrument}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

class BandsWidget extends React.Component {
  render() {
    return (
      <div className="panel info-category">
        <div className="panel-heading">
          <h3 className="panel-title">Bands</h3>
        </div>
        <div className="panel-body">
          <ul className="band-list">
            {this.props.bands.map((band) =>
              <li className="band" key={band.id}>{band.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
