import React from 'react';
import Navbar from './Navbar.js';
import {mockUser} from './Navbar.js';
import SearchBar from './SearchBar.js';

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Navbar user={mockUser} />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="container searchbar-container">
              <div className="search-bar">
                <SearchBar/>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <SearchParameters/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

class SearchParameters extends React.Component {
  render() {
    return (
      <div className="container searchp-container">
        <div className="search-parameters">
          <div className="row">
            <div className="col-md-2">
              <label for="instrument">Select Instrument:</label>
              <div className="dropdown" id="instrument">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Instrument
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <a href="#">Guitar</a>
                  </li>
                  <li>
                    <a href="#">Drums</a>
                  </li>
                  <li>
                    <a href="#">Bass</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <label for="zip">Zipcode:</label>
              <input type="text" className="form-control" id="zip"/>
            </div>
            <div className="col-md-4">
              <label for="genre">Genres</label>
              <div className="dropdown" id="genre">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  Genres
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <a href="#">Rock</a>
                  </li>
                  <li>
                    <a href="#">Jazz</a>
                  </li>
                  <li>
                    <a href="#">Metal</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
