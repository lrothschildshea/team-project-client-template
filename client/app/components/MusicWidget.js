import React from 'react';

export default class MusicWidget extends React.Component {
  render() {
    return (
      <div className="panel">
        <ul className="nav nav-tabs">
          <li role="presentation">
            <a href="#">
              <span className="glyphicon glyphicon-music">
              </span>
            </a>
          </li>
          <li role="presentation" className="active">
            <a href="#">Soundcloud</a>
          </li>
          <li role="presentation">
            <a href="#">Bandcamp</a>
          </li>
        </ul>
        <div className="panel-body">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293734462&amp;color=ff9944&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false">
          </iframe>
        </div>
      </div>
    )
  }
}
