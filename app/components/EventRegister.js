import React from 'react';
import {addCalendarEvent} from '../server'

export default class EventRegister extends React.Component {
  constructor(props){
    super(props);
    this.state={
      eventName:"",
      bandName:"",
      eventDate:"",
      eventTime:"",
      eventLocation:"",
      eventDetail:""
    }
  }
  onPost(e){
    e.preventDefault();
    addCalendarEvent(1,this.state,(calendarEventItem) => {
      this.setState(calendarEventItem)
    });
  }
  handleEventName(e){
    e.preventDefault();
    this.setState({eventName: e.target.value});
  }
  handleBandName(e){
    e.preventDefault();
    this.setState({bandName: e.target.value});
  }
  handleEventDate(e){
    e.preventDefault();
    this.setState({eventDate: e.target.value});
  }
  handleEventTime(e){
    e.preventDefault();
    this.setState({eventTime: e.target.value});
  }
  handleEventLocation(e){
    e.preventDefault();
    this.setState({eventLocation: e.target.value});
  }
  handleEventDetail(e){
    e.preventDefault();
    this.setState({eventDetail: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.eventName!=="" && this.state.bandName!=="" && this.state.eventDate!=="" && this.state.eventTime!=="" && this.state.eventlocation!=="" && this.state.eventDetail!==""){
      // this.props.onPost(this.state);
      // this.setState({eventName:""});
      // this.setState({bandName:""});
      // this.setState({eventDate:""});
      // this.setState({eventTime:""});
      // this.setState({eventLocation:""});
      // this.setState({eventDetail:""});
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
                  <input id="eventName" type="text" name="eventName" placeholder="Event's Name" value={this.state.eventName} onChange={(e)=>this.handleEventName(e)} />
              </label>

              <label>
                  <span>Band Name :</span>
                  <input id="bandName" type="text" name="bandName" placeholder="Your Band's Name" value={this.state.bandName} onChange={(e)=>this.handleBandName(e)} />
              </label>

              <label>
                  <span>Date :</span>
                  <input id="eventDate" type="text" name="eventDate" placeholder="mm/dd/yyyy" value={this.state.eventDate} onChange={(e)=>this.handleEventDate(e)} />
              </label>

              <label>
                  <span>Time :</span>
                  <input id="eventTime" type="text" name="eventTime" placeholder="10am-12am" value={this.state.eventTime} onChange={(e)=>this.handleEventTime(e)} />
              </label>

              <label>
                  <span>Location:</span>
                  <input id="eventLocation" type="text" name="eventLocation" placeholder="e.g Umass Amherst FAC" value={this.state.eventLocation} onChange={(e)=>this.handleEventLocation(e)} />
              </label>


                <label>
                    <span>Detail :</span>
                    <textarea id="eventDetail" name="eventDetail" placeholder="ICECREAM！！" value={this.state.eventDetail} onChange={(e)=>this.handleEventDetail(e)} ></textarea>
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
