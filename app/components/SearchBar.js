import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return(
      <div>
        <h2>Search</h2>
        <div id="custom-search-input">
          <div className="input-group col-md-12">
            <input type="text" className="form-control input-lg" placeholder="Enter Keywords" />
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" type="button">
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </span>
          </div>
        </div>
        <label className="radio-inline"><input type="radio" name="optradio"/>People</label>
        <label className="radio-inline"><input type="radio" name="optradio"/>Bands</label>
      </div>
    )
  }
}
