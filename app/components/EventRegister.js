import React from 'react';
import {addCalendarEvent,addEventBanner} from '../server';

export default class EventRegister extends React.Component {
  constructor(props){
    super(props);
    this.state={
      panelElement:{
        band:"",
        date:"",
        detail:"",
        location:"",
        name:"",
        time:""
      },
      calendarElement:{
        title: "",
        start: new Date('2017-4-3'),
        end: new Date('2017-4-3')
      }
    }
  }
  handleEventName(e){
    e.preventDefault();
    var temp = this.state.panelElement;
    temp.name=e.target.value;
    this.setState({panelElement:temp});

    var temp2=this.state.calendarElement;
    temp2.title=e.target.value;
    this.setState({calendarEvent:temp2});

  }
  handleBandName(e){
    e.preventDefault();
    var temp = this.state.panelElement;
    temp.band=e.target.value;
    this.setState({panelElement:temp});
  }
  handleEventDate(e){
    e.preventDefault();
    var temp = this.state.panelElement;
    temp.date=e.target.value;
    this.setState({panelElement:temp});

    var time=this.state.calendarElement;
    time.start=new Date(e.target.value);
    temp.end=new Date(e.target.value);
    this.setState({calendarEvent:time});

  }
  handleEventTime(e){
    e.preventDefault();
    var temp = this.state.panelElement;
    temp.time=e.target.value;
    this.setState({panelElement:temp});
  }
  handleEventLocation(e){
    e.preventDefault();
    var temp = this.state.panelElement;
    temp.location=e.target.value;
    this.setState({panelElement:temp});
  }
  handleEventDetail(e){
    e.preventDefault();
    var temp = this.state.panelElement;
    temp.detail=e.target.value;
    this.setState({panelElement:temp});
  }

  handleSubmit(e){
    e.preventDefault();
    const panelElement = this.state.panelElement;
    const eventBanner = this.state.calendarEvent;
    if(panelElement.eventName!=="" && panelElement.bandName!=="" && panelElement.eventDate!=="" && panelElement.eventTime!=="" && panelElement.eventlocation!=="" && panelElement.eventDetail!==""){
      addCalendarEvent(1,panelElement,() => {
        addEventBanner(1,eventBanner,() =>{
          this.props.refresh();
        });
      });
    }
  }
  render() {
    return (
      <div className="modal fade" id="editEventModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <form action="" method="post" className="basic-grey">
            <h1 className="registerEventText">Register Your Event</h1>
              <label>
                  <span>Event Name :</span>
                  <input id="eventName" type="text" name="eventName" placeholder="Event's Name" value={this.state.panelElement.eventName} onChange={(e)=>this.handleEventName(e)} />
              </label>

              <label>
                  <span>Band Name :</span>
                  <input id="bandName" type="text" name="bandName" placeholder="Your Band's Name" value={this.state.panelElement.bandName} onChange={(e)=>this.handleBandName(e)} />
              </label>

              <label>
                  <span>Date :</span>
                  <input id="eventDate" type="text" name="eventDate" placeholder="yyyy-mm-dd" value={this.state.panelElement.eventDate} onChange={(e)=>this.handleEventDate(e)} />
              </label>

              <label>
                  <span>Time :</span>
                  <input id="eventTime" type="text" name="eventTime" placeholder="10am-12am" value={this.state.panelElement.eventTime} onChange={(e)=>this.handleEventTime(e)} />
              </label>

              <label>
                  <span>Location:</span>
                  <input id="eventLocation" type="text" name="eventLocation" placeholder="e.g Umass Amherst FAC" value={this.state.panelElement.eventLocation} onChange={(e)=>this.handleEventLocation(e)} />
              </label>


                <label>
                    <span>Detail :</span>
                    <textarea id="eventDetail" name="eventDetail" placeholder="ICECREAM！！" value={this.state.panelElement.eventDetail} onChange={(e)=>this.handleEventDetail(e)} ></textarea>
                </label>


              <label>
                 <span>&nbsp;</span>
                 <input type="button" className="button" value="Submit" onClick={(e)=> this.handleSubmit(e)} />
             </label>
          </form>
        </div>
      </div>
    )
  }
}
