import React from 'react';
import SearchBar from './SearchBar.js';
import {getInstruments, getGenres} from '../server'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      instrument:"",
      genre:"",
      value: "",
      searchType: ""
    };
  }

  onSearch(contents){
    this.setState(contents)
  }

  updateState(contents){
    this.setState(contents)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="container searchbar-container">
              <div className="search-bar">
                <SearchBar onPost={(postContents) => this.onSearch(postContents)} onEntered={(postContents) => this.updateState(postContents)} instrument={this.state.instrument} genre={this.state.genre} zipcode={this.state.zipcode}/>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <SearchParameters onEntered={(postContents) => this.updateState(postContents)}/>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    )
  }
}

class SearchParameters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      instrument:"Instrument",
      genre:"Genre",
      instrumentList: [],
      genresList: []
    };
  }

  getData(){
    return this.state
  }

  refresh() {
    getInstruments("1", (feedItems) => {
      this.setState({
        instrumentList: feedItems
      });
    });
  }

  componentDidMount() {
    this.refresh();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({zipcode: e.target.value});
    this.props.onEntered({zipcode: e.target.value})


  }

  handleInstrument(e) {
    e.preventDefault();
    if (e.button === 0) {
      this.setState({instrument: e.target.textContent});
      this.props.onEntered({instrument: e.target.textContent})

    }

  }

  handleGenre(e) {
    e.preventDefault();
    if (e.button === 0) {

      this.setState({genre: e.target.textContent});
      this.props.onEntered({genre: e.target.textContent})

    }

  }

  render() {
    return (
      <div className="container searchp-container">
        <div className="search-parameters">
          <div className="row">
            <div className="col-md-2">
              <label htmlForfor="instrument">Select Instrument:</label>
              <div className="dropdown" id="instrument">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  {this.state.instrument}
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <a href="#" onClick={(e) => this.handleInstrument(e)}>Guitar</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => this.handleInstrument(e)}>Drums</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => this.handleInstrument(e)}>Bass</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="zip">Zipcode:</label>
              <input type="text" className="form-control" id="zip" placeholder="Enter ZipCode" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
            </div>
            <div className="col-md-4">
              <label htmlFor="genre">Genres</label>
              <div className="dropdown" id="genre">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  {this.state.genre}
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>
                    <a href="#" onClick={(e) => this.handleGenre(e)}>Rock</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => this.handleGenre(e)}>Jazz</a>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => this.handleGenre(e)}>Metal</a>
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
