import React from 'react';
import EventRegister from './EventRegister';
import EventItems from './eventItems';
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
   addCalendarEvent(1,calendarEventItem,()=>{
     this.refresh();
   });
   addEventBanner(1,eventBannerItem,()=>{
     this.refresh();
   })
 }

 refresh(){
  getCalendarEvent(1,(calendarEventItem)=>{
    console.log(calendarEventItem);
     this.setState({'events':calendarEventItem});
   });
  getEventBanner(1,(eventBannerItem)=>{
    console.log(eventBannerItem);
    this.setState({'eventBanner':eventBannerItem});
  })
   console.log(this.state.eventBanner)
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
