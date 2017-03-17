import React from 'react';

export default class EventWidget extends React.Component {
  render() {
    return (
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
    )
  }
}
