import React from 'react';

export default class EventRegister extends React.Component {
  render() {
    return (
      <div className="modal fade" id="editEventModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <form action="" method="post" className="basic-grey">
            <h1 className="registerEventText">Register Your Event</h1>
              <label>
                  <span>Event Name :</span>
                  <input id="eventName" type="text" name="eventName" placeholder="Event's Name" />
              </label>

              <label>
                  <span>Band Name :</span>
                  <input id="bandName" type="text" name="bandName" placeholder="Your Band's Name" />
              </label>

              <label>
                  <span>Date :</span>
                  <input id="eventDate" type="text" name="eventDate" placeholder="mm/dd/yyyy" />
              </label>

              <label>
                  <span>Time :</span>
                  <input id="eventTime" type="text" name="eventTime" placeholder="10am-12am" />
              </label>

              <label>
                  <span>Location:</span>
                  <input id="eventLocation" type="text" name="eventLocation" placeholder="e.g Umass Amherst FAC" />
              </label>


                <label>
                    <span>Detail :</span>
                    <textarea id="eventDetail" name="eventDetail" placeholder="ICECREAM！！" ></textarea>
                </label>


              <label>
                 <span>&nbsp;</span>
                 <input type="button" className="button" value="Submit" />
             </label>
          </form>
        </div>
      </div>
    )
  }
}
