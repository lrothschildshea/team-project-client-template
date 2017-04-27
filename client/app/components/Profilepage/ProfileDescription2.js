import React from 'react';
import MusicWidget from './MusicWidget';
import EventWidget from '../EventWidget.js';

export default class ProfileDescription2 extends React.Component {
  render() {
    return (
      <div className="panel profile-section">
        <div className="panel-heading">
          <h2 className="prof-section-title"><strong>WHAT I DO</strong></h2>
        </div>
        <div className="panel-body">
          <div className="panel music">
            <div className="panel-heading">
              <h2 className="panel-title">Music</h2>
            </div>
            <div className="panel-body">
              <MusicWidget />
              <MusicWidget />
              <MusicWidget />
            </div>
          </div>
          <div className="panel events">
            <div className="panel-heading">
              <h2 className="panel-title">Events</h2>
            </div>
            <div className="panel-body">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
