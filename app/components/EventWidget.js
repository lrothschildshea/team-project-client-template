import React from 'react';

export const mockEventList = [
  {
    name: "Band 1 Event",
    id: 1,
    date: "Tomorrow at 7:00 PM",
    location: "South College",
  },
  {
    name: "Band 3 Event",
    id: 3,
    date: "Friday at 8:00 PM",
    location: "Fine Arts Center",
  },
  {
    name: "Band 5 Event",
    id: 5,
    date: "Saturday at 2:00 PM",
    location: "Fine Arts Center",
  },
]

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
                  {this.props.eventList.map((event) =>
                    <li className="media" key={event.id}><EventWidgetElement event={event}/></li>
                  )}
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
              <p>{this.props.event.name}</p>
              <p>{this.props.event.date}</p>
              <p>{this.props.event.location}</p>
          </a>
        </div>
    </div>
    )
  }
}
