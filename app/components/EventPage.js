import React from 'react';
import EventRegister from './EventRegister';
import {mockEventList} from './EventPanel.js';
import EventPanel from './EventPanel.js';
import {addCalendarEvent,getCalendarEvent} from '../server';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.momentLocalizer(moment);





export default class EventPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      'events':[]
    }
    this.refresh();
  }

 onPost(calendarEventItem){
   addCalendarEvent(1,calendarEventItem,(calendarEventItem)=>{
     this.refresh();
   });
 }

 refresh(){
  getCalendarEvent(1,(calendarEventItem)=>{
     this.setState({'events':calendarEventItem});
   });
 }

  render() {
    var events = this.state.events;
    return (
      <div>
        <EventRegister refresh={()=>this.refresh()}/>
        <div className='container'>
          <div className="row">
            <div className="col-md-7">
              <BigCalendar
                {...this.props}
                events={events}
                defaultDate={new Date(2015, 3, 1)}

                />

              <button id="addEvent" className="float-left addButton" data-toggle="modal" data-target="#editEventModal">Add Event</button>
            </div>
            <div className="col-md-1">
            </div>

            <div className="col-md-4">
              <EventPanel eventList={events} />
            </div>

          </div>
        </div>
      </div>
    )
  }
}
