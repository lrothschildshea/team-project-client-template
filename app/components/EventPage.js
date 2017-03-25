import React from 'react';
import Navbar from './Navbar'
import EventRegister from './EventRegister';

$(document).ready(function() {
  $('#calendar').fullCalendar({

    defaultDate: '2017-2-23',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    selectable: true,
    selectHelper: true,
    //reserved for a popup
    select: function(start, end) {
      var title =prompt('Event Title:');
      var eventData;
      var eventStartTime, eventEndTime;

      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };

        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
      }
      $('#calendar').fullCalendar('unselect');

    },

    events: [
      {
        title: 'Performance',
        start: '2017-2-23'
      },
      {
        title: 'Random',
        start: '2017-2-24',
        end: '2017-2-24'
      },
      {
        title: 'Can Click?',
        url: 'http://google.com/',
        start: '2017-2-4'
      }
    ]
  });
});
const event = {
  detail: "(－‸ლ)"
}
export default class EventPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <EventRegister event={event} />
        <div className='container'>
          <div className="row">

            <div className="col-md-7">
              <div id='calendar'></div>
              <button id="addEvent" className="float-left addButton" data-toggle="modal" data-target="#editEventModal">Add Event</button>
            </div>

            <div className="col-md-1">
            </div>

            <div className="col-md-4">
              <EventInfo />
            </div>

          </div>
        </div>
      </div>
    )
  }
}


class EventInfo extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading-custom">
          <h3 className="panel-title info-upcoming">Upcoming Events</h3>
        </div>
        <div className="panel-body info-event-detail">
          <div className="events">
              <ul className="media-list">
                  <li className="media">
                      <div className="media-left">
                        <p>Event:</p>
                        <p>Band:</p>
                        <p>Date:</p>
                        <p>Time:</p>
                        <p>Location:</p>
                        <p>Detail:</p>
                      </div>
                      <div className="media-body">
                          <a href="#">
                            <p>Event 1</p>
                            <p>Band Spongebob</p>
                            <p>2/26/17</p>
                            <p>7-9pm</p>
                            <p>Umass Fine Arts Center</p>
                            <p>We provide food as well!</p>
                          </a>
                      </div>
                      <hr />
                        <div className="media-left">
                          <p>Event:</p>
                          <p>Band:</p>
                          <p>Date:</p>
                          <p>Time:</p>
                          <p>Location:</p>
                          <p>Detail:</p>
                        </div>
                        <div className="media-body">
                            <a href="#">
                              <p>Event 1</p>
                              <p>Band Spongebob</p>
                              <p>2/26/17</p>
                              <p>7-9pm</p>
                              <p>Umass Fine Arts Center</p>
                              <p>We provide food as well!</p>
                            </a>
                        </div>
                      <hr />
                        <div className="media-left">
                          <p>Event:</p>
                          <p>Band:</p>
                          <p>Date:</p>
                          <p>Time:</p>
                          <p>Location:</p>
                          <p>Detail:</p>
                        </div>
                        <div className="media-body">
                            <a href="#">
                              <p>Event 1</p>
                              <p>Band Spongebob</p>
                              <p>2/26/17</p>
                              <p>7-9pm</p>
                              <p>Umass Fine Arts Center</p>
                              <p>We provide food as well!</p>
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
