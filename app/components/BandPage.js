import React from 'react';
import Navbar from './Navbar.js';
import BandEdit from './BandEdit.js';
import EventWidget from './EventWidget.js';
import Comments from './Comments.js';

export default class BandPage extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <BandEdit />


      <div className="container band-main">
        <div className="row band-cover">
          <div className="band-spacer"></div>
          <div className="band-name pull-left">
            <h1>Generic Band Name</h1>
          </div>
          <div className="btn-group pull-right" role="group">
            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#editBandModal">
              Edit <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </div>
        </div>

        <div className="row">

          <div className="col-md-4 bandpage-left">

              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Band Info</h3>
                </div>
                <div className="panel-body">
                  <ul className="list-unstyled">
                    <li><span className="glyphicon glyphicon-map-marker"></span>Amherst, MA </li>
                    <li><span className="glyphicon glyphicon-info-sign"></span>Music band with instruments </li>
                    <li><span className="glyphicon glyphicon-user"></span>3 Real people are in this band </li>
                    <li><span className="glyphicon glyphicon-sunglasses"></span>420 People are fans of Generic Band Name </li>
                  </ul>
                </div>
              </div>
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Wanted</h3>
                </div>
                <div className="panel-body">
                  <ul className="media-list">
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <a href="#">Guitarist</a>
                        <br /> Experienced Flamenco guitarist
                      </div>
                      <div className="media-right">
                        <div className="btn-group" role="group" aria-label="...">
                          <button type="button" className="btn btn-default">Apply</button>
                        </div>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <a href="#">Saxophone</a>
                        <br /> Play me something spicy
                      </div>
                      <div className="media-right">
                        <div className="btn-group" role="group" aria-label="...">
                          <button type="button" className="btn btn-default">Apply</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <EventWidget />

          </div>

          <div className="col-md-8 bandpage-right">

            <div className="panel">
              <ul className="nav nav-tabs">
                <li role="presentation"><a href="#"><span className="glyphicon glyphicon-music"></span></a></li>
                <li role="presentation" className="active"><a href="#">Soundcloud</a></li>
                <li role="presentation"><a href="#">Bandcamp</a></li>
              </ul>
              <div className="panel-body">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293734462&amp;color=ff9944&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
              </div>
            </div>

            <Comments />

          </div>
        </div>
      </div>

      </div>
    )
  }
}
