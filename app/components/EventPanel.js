import React from 'react';

export const mockEventList = [
  {
    name: "Event 1",
    band: "Band 1",
    id: 1,
    date: "Tomorrow at 7:00 PM",
    time: "7 - 9 PM",
    location: "South College",
    detail: "It is fun"
  },
  {
    name: "Event 2",
    band: "Band 1",
    id: 2,
    date: "Tomorrow at 7:00 PM",
    time: "7 - 9 PM",
    location: "South College",
    detail: "It is fun"
  },
  {
    name: "Event 2",
    band: "Band 1",
    id: 3,
    date: "Tomorrow at 7:00 PM",
    time: "7 - 9 PM",
    location: "South College",
    detail: "It is fun"
  }
]

export default class EventPanel extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading-custom">
          <h3 className="panel-title info-upcoming">Upcoming Events</h3>
        </div>
        <div className="panel-body info-event-detail panel-body-custom">
          <div className="events">
              <ul className="media-list">
                  {this.props.eventList.map((event) =>
                    <li className="media" key={event.id}><EventPanelElement event={event}/></li>
                  )}
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

class EventPanelElement extends React.Component {
  render(){
    return (
      <div>
        <div className="media-right">
          <p>Event:</p>
          <p>Band:</p>
          <p>Date:</p>
          <p>Time:</p>
          <p>Location:</p>
          <p>Detail:</p>
        </div>
        <div className="media-right">
          <a href="#">
          <p>{this.props.event.name}</p>
          <p>{this.props.event.band}</p>
          <p>{this.props.event.date}</p>
          <p>{this.props.event.time}</p>
          <p>{this.props.event.location}</p>
          <p>{this.props.event.detail}</p>
          </a>
        </div>
    </div>
    )
  }
}
