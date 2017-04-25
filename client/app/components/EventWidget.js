import React from 'react';
import {Link} from 'react-router';
import {getEvents} from '../server.js';
import {unixTimeToString} from '../util.js'

export default class EventWidget extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      events: []
    }
  }

  refresh(){
    getEvents(this.props.user._id, (calendarEvent) => {
      this.setState({events: calendarEvent});
    });
  }

  componentDidMount(){
    this.refresh();
  }

  render() {
    return (
      <div className={"panel events-widget " + this.props.page}>
        <div className="panel-heading">
          <Link to="/calendar/">
            <h3 className="panel-title">Upcoming Events</h3>
          </Link>
        </div>
        <div className="panel-body">
          <div className="events">
              <ul className="media-list">
                  {this.state.events.map((event) =>
                    <li className="media" key={event._id}><EventWidgetElement event={event}/></li>
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
          <Link to={"/calendar/"}>
              <p>{this.props.event.name}</p>
              <p>{unixTimeToString(this.props.event.date)}</p>
              <p>{this.props.event.location}</p>
          </Link>
        </div>
    </div>
    )
  }
}
