import React from 'react';
import Navbar from './Navbar'
import {mockUser} from './Navbar.js';
import EventRegister from './EventRegister';
import {mockEventList} from './EventPanel.js';
import EventPanel from './EventPanel.js';

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

export const event = {
  detail: "(－‸ლ)"
}

export default class EventPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar user={mockUser} />
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
              <EventPanel eventList={mockEventList} />

            </div>

          </div>
        </div>
      </div>
    )
  }
}