import React from 'react';

export default class EventWidget extends React.Component {
  render() {
    return (
      <div className="panel events-widget">
        <div className="panel-heading">
          <h3 className="panel-title">Upcoming Events</h3>
        </div>
        <div className="panel-body">
          <div className="events">
              <ul className="media-list">
                  <li className="media">
                      <EventWidgetElement eventName="Band 1 Event" date="Tomorrow at 7:00 PM" location="South College" />
                      <hr />
                      <EventWidgetElement eventName="Band 3 Event" date="Friday at 8:00 PM" location="Fine Arts Center" />
                      <hr />
                      <EventWidgetElement eventName="Band 5 Event" date="Saturday at 2:00 PM" location="Fine Arts Center" />
                  </li>
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

class EventWidgetElement extends React.Component {
  render(){
    return (
      <div>
        <div className="media-left">
          <p>Event:</p>
          <p>Date:</p>
          <p>Location:</p>
        </div>
        <div className="media-body">
          <a href="#">
              <p>{this.props.eventName}</p>
              <p>{this.props.date}</p>
              <p>{this.props.location}</p>
          </a>
        </div>
    </div>
    )
  }
}
