import React from 'react';
import EventRegister from './EventRegister';
import EventPanel from './EventPanel.js';
import {addCalendarEvent,getCalendarEvent, getEventBanner, addEventBanner} from '../server';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';


BigCalendar.momentLocalizer(moment);


export default class EventPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      'events':[],
      'eventBanner':[]
    }
    this.refresh();
  }

 onPost(calendarEventItem,eventBannerItem){
   addCalendarEvent("000000000000000000000001",calendarEventItem,()=>{
     this.refresh();
   });
   addEventBanner("000000000000000000000001",eventBannerItem,()=>{
     this.refresh();
   })
 }

 refresh(){
  getCalendarEvent("000000000000000000000001",(calendarEventItem)=>{
     this.setState({'events':calendarEventItem});
   });
  getEventBanner("000000000000000000000001",(eventBannerItem)=>{
    this.setState({'eventBanner':eventBannerItem});
  })
 }

  render() {
    var events = this.state.events;
    var eventBanner=this.state.eventBanner;
    return (
      <div>
        <EventRegister refresh={()=>this.refresh()}/>
        <div className='container'>
          <div className="row">
            <div className="col-md-7">
              <BigCalendar
                  {...this.props}
                  events={eventBanner}
                defaultDate={new Date()}
                selectable={true}
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
