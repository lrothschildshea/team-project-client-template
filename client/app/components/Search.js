import React from 'react';
import SearchBar from './SearchBar.js';
import {getInstruments, getGenres} from '../server'
import {hashHistory} from 'react-router'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      instrument:"",
      genre:"",
      value: "",
      searchType: "",
      instrumentList: [],
      genresList: []

    };
  }

  componentDidMount(){
    this.refresh();
  }

  refresh(){
    getInstruments("1", (feedItems) => {
      this.setState({
        instrumentList: feedItems
      });
    });

    getGenres("1",(feedItems) => {
      this.setState({
        genresList: feedItems
      });
    });
  }

  onSearch(contents){
    this.setState(contents)
  }

  updateState(contents){
    this.setState(contents)
  }

  handleSearch(contents) {
    // Prevent the event from "bubbling" up the DOM tree.
    //e.preventDefault();
    // Trim whitespace from beginning + end of entry.
    //var searchText = this.state.value.trim();
    var searchText = contents.value;
    var type = contents.searchType;
    var genre = this.state.genre;
    var instrument = this.state.instrument;
    var zipcode = this.state.zipcode;
    if (searchText !== "") {
      /* TODO: How do we send the post to the server + update the Feed? */
      //this.props.onPost(this.state);
      hashHistory.push({ pathname: "/search/result", query: {q: searchText, t:type, g:genre, i:instrument, z:zipcode} });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="container-fluid searchbar-container">
              <div className="search-bar">
                <SearchBar onPost={(contents) => this.handleSearch(contents)} onEntered={(postContents) => this.updateState(postContents)}/>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="container-fluid">
              <SearchParameters onEntered={(postContents) => this.updateState(postContents)} instList={this.state.instrumentList} genreList={this.state.genresList}/>
            </div>
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

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    return (
      <div className="container-fluid searchp-container">
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
                  {
                    this.props.instList.map((item) => {
                      return (<li><a href='#' onClick={(e) => this.handleInstrument(e)} key={item._id}>{this.capitalizeFirstLetter(item.instrument)}</a></li>)
                    })
                  }
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
                  {
                    this.props.genreList.map((item) => {
                      return (<li><a href='#' onClick={(e) => this.handleGenre(e)} key={item._id}>{this.capitalizeFirstLetter(item.genre)}</a></li>)
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
