import React from 'react';
import Navbar from './Navbar.js'

export default class BandPage extends React.Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="modal fade" id="editBandModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Edit Band</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">Band Name</span>
                <input type="text" className="form-control" placeholder="Enter Band Name" aria-describedby="basic-addon1" value="Generic Band Name" />
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="basic-addon2">Location <span className="glyphicon glyphicon-map-marker"></span></span>
                <input type="text" className="form-control" placeholder="Enter Location" aria-describedby="basic-addon2" value="Amherst, MA" />
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="basic-addon2">Info <span className="glyphicon glyphicon-info-sign"></span></span>
                <input type="text" className="form-control" placeholder="Enter Band info" aria-describedby="basic-addon2" value="Music band with instruments" />
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-default">Upload new cover photo <span className="glyphicon glyphicon-floppy-open"></span></button>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">Edit Members</div>


                <ul className="list-group">
                  <li className="list-group-item">Sean Morris (you) <a href="#"><span className="glyphicon glyphicon-trash pull-right" /></a></li>
                  <li className="list-group-item">Spongebob <a href="#"><span className="glyphicon glyphicon-trash pull-right" /></a></li>
                  <li className="list-group-item">Squidward <a href="#"><span className="glyphicon glyphicon-trash pull-right" /></a></li>
                </ul>
                <div className="panel-footer">Add Members <a href="#"><span className="glyphicon glyphicon-plus pull-right" /></a></div>
              </div>
              <div className="panel panel-default">

                <div className="panel-heading">Wanted</div>

                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Instrument</span>
                          <input type="text" className="form-control" placeholder="Instrument" aria-describedby="basic-addon1" value="Guitarist" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Info</span>
                          <input type="text" className="form-control" placeholder="Info" aria-describedby="basic-addon1" value="Experienced Flamenco Guitarist" />
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <div className="btn-group">
                          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Instrument</span>
                          <input type="text" className="form-control" placeholder="Instrument" aria-describedby="basic-addon1" value="Saxophone" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Info</span>
                          <input type="text" className="form-control" placeholder="Info" aria-describedby="basic-addon1" value="Play me something spicy" />
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <div className="btn-group">
                          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="panel-footer">Add Wanted Posting <a href="#"><span className="glyphicon glyphicon-plus pull-right" /></a></div>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>



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
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Events</h3>
                </div>
                <div className="panel-body">
                  <div className="events">
                      <ul className="media-list">
                          <li className="media">
                              <div className="media-left">
                                  <p>Event:</p>
                                  <p>Date:</p>
                                  <p>Location:</p>
                              </div>
                              <div className="media-body">
                                  <a href="#">
                                      <p>Band 1 Event</p>
                                      <p>Tomorrow at 7:00 PM</p>
                                      <p>South College</p>
                                  </a>
                              </div>
                              <hr />
                              <div className="media-left">
                                  <p>Event:</p>
                                  <p>Date:</p>
                                  <p>Location:</p>
                              </div>
                              <div className="media-body">
                                  <a href="#">
                                      <p>Band 3 Event</p>
                                      <p>Friday at 8:00 PM</p>
                                      <p>Fine Arts Center</p>
                                  </a>
                              </div>
                              <hr />
                              <div className="media-left">
                                  <p>Event:</p>
                                  <p>Date:</p>
                                  <p>Location:</p>
                              </div>
                              <div className="media-body">
                                  <a href="#">
                                      <p>Band 5 Event</p>
                                      <p>Saturday at 2:00 PM</p>
                                      <p>Fine Arts Center</p>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
                </div>
              </div>

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
              <div className="panel">
                <div className="panel-heading">
                  <h3 className="panel-title">Comments</h3>
                </div>
                <div className="panel-body">
                  <ul className="media-list">
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <a href="#">Spongebob</a> This is a comment
                        <br /><a href="#">Like</a> · <a href="#">Reply</a> · 2 hrs
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <a href="#">Squidward</a> Another comment
                        <br /><a href="#">Like</a> · <a href="#">Reply</a> · 10 hrs
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <a href="#">Mr. Krabs</a> Another comment
                        <br /><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <a href="#">Squidward</a> Another comment
                        <br /><a href="#">Like</a> · <a href="#">Reply</a> · 22 hrs
                      </div>
                    </li>
                    <hr className="comment-sp1" />
                    <li>
                      <div>
                        <a href="#"><small><p className="text-center grey">
                          Show more comments <span className="glyphicon glyphicon-chevron-down"></span>
                        </p></small></a>
                      </div>
                    </li>
                    <hr className="comment-sp2" />
                    <li className="media">
                      <div className="media-left media-top">
                        PIC
                      </div>
                      <div className="media-body">
                        <div className="input-group">
                          <input type="text" className="form-control"
                                 placeholder="Write a comment..." />
                          <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                              Post
                            </button>
                          </span>
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
    )
  }
}
