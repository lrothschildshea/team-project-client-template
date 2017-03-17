import React from 'react';

export default class BandEdit extends React.Component {
  render() {
    return (
      <div className="modal fade" id="editBandModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Edit Band</h4>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon1">Band Name</span>
                <input type="text" className="form-control" placeholder="Enter Band Name" aria-describedby="basic-addon1" value="Generic Band Name" />
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="basic-addon2">Location <span className="glyphicon glyphicon-map-marker"></span></span>
                <input type="text" className="form-control" placeholder="Enter Location" aria-describedby="basic-addon2" value="Amherst, MA" />
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="basic-addon2">Info <span className="glyphicon glyphicon-info-sign"></span></span>
                <input type="text" className="form-control" placeholder="Enter Band info" aria-describedby="basic-addon2" value="Music band with instruments" />
              </div>

              <div className="btn-group">
                <button type="button" className="btn btn-default">Upload new cover photo <span className="glyphicon glyphicon-floppy-open"></span></button>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading">Edit Members</div>


                <ul className="list-group">
                  <li className="list-group-item">Sean Morris (you) <a href="#"><span className="glyphicon glyphicon-trash pull-right" /></a></li>
                  <li className="list-group-item">Spongebob <a href="#"><span className="glyphicon glyphicon-trash pull-right" /></a></li>
                  <li className="list-group-item">Squidward <a href="#"><span className="glyphicon glyphicon-trash pull-right" /></a></li>
                </ul>
                <div className="panel-footer">Add Members <a href="#"><span className="glyphicon glyphicon-plus pull-right" /></a></div>
              </div>
              <div className="panel panel-default">

                <div className="panel-heading">Wanted</div>

                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Instrument</span>
                          <input type="text" className="form-control" placeholder="Instrument" aria-describedby="basic-addon1" value="Guitarist" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Info</span>
                          <input type="text" className="form-control" placeholder="Info" aria-describedby="basic-addon1" value="Experienced Flamenco Guitarist" />
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <div className="btn-group">
                          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Instrument</span>
                          <input type="text" className="form-control" placeholder="Instrument" aria-describedby="basic-addon1" value="Saxophone" />
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="input-group">
                          <span className="input-group-addon" id="basic-addon1">Info</span>
                          <input type="text" className="form-control" placeholder="Info" aria-describedby="basic-addon1" value="Play me something spicy" />
                        </div>
                      </div>
                      <div className="col-lg-1">
                        <div className="btn-group">
                          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-trash"></span></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="panel-footer">Add Wanted Posting <a href="#"><span className="glyphicon glyphicon-plus pull-right" /></a></div>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
