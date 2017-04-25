import React from 'react';

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
                {
                  return <li className="media" key={event._id}><EventPanelElement event={event}/></li>
                }
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
          <p>Location:</p>
          <p>Detail:</p>
        </div>
        <div className="media-right">
          <a href="#">
          <p>{this.props.event.name}</p>
          <p>{this.props.event.band}</p>
          <p>{new Date(this.props.event.date).toLocaleString()}</p>
          <p>{this.props.event.location}</p>
          <p>{this.props.event.detail}</p>
          </a>
        </div>
    </div>
    )
  }
}
