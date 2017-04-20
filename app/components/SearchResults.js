import React from 'react';
import SearchBar from './SearchBar.js';
import {search} from '../server'

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.params
  }

<<<<<<< HEAD
  componentDidMount(){
    search(this.state.value, this.state.searchType, this.state.instrument, this.state.genre, this.state.zipcode, (feedData) => {
      this.setState({data:feedData})
=======
  updateState(contents){
    search(this.state.value, this.state.searchType, this.state.instrument, this.state.genre, (feedData) => {
>>>>>>> 31715c4258cd05da64b97e6a98ad1e55231f70de
    });
  }

  doSearch(){
    search(this.state.value, this.state.searchType, this.state.instrument, this.state.genre, this.state.zipcode, (feedData) => {
      this.setState({data:feedData})
    });
  }

  updateState(contents){
    this.setState(contents)

  }

  onSearch(contents){
    this.setState(contents)
  }
  //  Object.keys(this.props.data).map(key) => {
  //        <SearchResult name={this.props.data._id.fullName}></SearchResult>
  //      });
  render() {
    return(
      <div>
        <div className="container-fluid searchbar-container">
          <div className="search-sidebar">
            <div className="row">
              <div className="col-md-3">
                <SearchFilter onEntered={(postContents) => this.updateState(postContents)}/>
              </div>
              <div className="col-md-9 feed col-md-offset-3">
                <SearchBar value={this.state.value} searchType={this.state.searchType} onPost={(postContents) => this.onSearch(postContents)} onEntered={(postContents) => this.updateState(postContents)}/>
                <hr/>
                <ResultFeed>
                  {this.state.data.map(function(groupItem, key){ return (
                    Object.keys(groupItem).map(function(item){return (
                      <SearchResult name={groupItem.fullName}/>
                    );})
                  );})}


                  <SearchResult name="AC/DC" image="img/acdc.png" genre="Rock N Roll" description="Description: AC/DC are an Australian rock band, formed in 1973 by brothers Malcolm and Angus Young. A hard rock/blues rock band, they have also been considered a heavy metal band, although they have always dubbed their music simply
                    'rock and roll'."></SearchResult>
                  <SearchResult name="The Who" image="img/thewho.png" genre="Rock N Roll" description="Description: The Who are an English rock band that formed in 1964. Their classNameic line-up consisted of lead singer Roger Daltrey, guitarist and singer Pete Townshend, bass guitarist John Entwistle, and drummer Keith Moon. They are
                    considered one of the most influential rock bands of the 20th century, selling over 100 million records worldwide and holding a reputation for their live shows and studio work."></SearchResult>
                  <SearchResult name="Aerosmith" image="img/aerosmith.png" genre="Rock N Roll" description="Description: Aerosmith is an American rock band, sometimes referred to as the Bad Boys from Boston and America's Greatest Rock and Roll Band. Their style, which is rooted in blues-based hard rock, has come to also incorporate
                    elements of pop, heavy metal, and rhythm and blues, and has inspired many subsequent rock artists. They were formed in Boston, Massachusetts in 1970."></SearchResult>
                  <SearchResult name="The Rolling Stones" image="img/rollingstones.jpeg" genre="Rock N Roll" description="Description: The Rolling Stones are an English rock band formed in London in 1962. The original line-up consisted of Brian Jones (rhythm guitar, harmonica), Mick Jagger (lead vocals), Keith Richards (lead guitar, backing vocals),
                    Ian Stewart (piano), Bill Wyman (bass), and Charlie Watts (drums)."></SearchResult>
                </ResultFeed>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class SearchFilter extends React.Component {
  handleInstrument(e) {
    // Prevent the event from "bubbling" up the DOM tree.
    e.preventDefault();
    // e.target is the React Virtual DOM target of the input event -- the
    // <textarea> element. The textarea's `value` is the entire contents of
    // what the user has typed in so far.
    if (e.button === 0) {
      // Callback function for both the like and unlike cases.
      // setState will overwrite the 'likeCounter' field on the current
      // state, and will keep the other fields in-tact.
      // This is called a shallow merge:
      // https://facebook.github.io/react/docs/component-api.html#setstate
      this.setState({instrument: e.target.textContent});
      this.props.onEntered({instrument: e.target.textContent})
    }
  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <div id="accordion" className="panel panel-primary behclick-panel">
              <div className="panel-heading">
                <h3 className="panel-title">Search Filter</h3>
              </div>
              <div className="panel-body">
                <div className="panel-heading ">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#collapse0">
                      <i className="indicator fa fa-caret-down" aria-hidden="true"></i> Instrument
                      </a>
                    </h4>
                  </div>
                  <div id="collapse0" className="panel-collapse collapse in">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" onClick={(e) => this.handleInstrument(e)}/>
                            Guitar
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value=""/>
                            Drums
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value=""/>
                            Bass
                          </label>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value=""/>
                            Other
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="panel-heading ">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" href="#collapse1">
                        <i className="indicator fa fa-caret-down" aria-hidden="true"></i> Genre
                        </a>
                      </h4>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse in">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/>
                              Rock
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/>
                              Jazz
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/>
                              Metal
                            </label>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" value=""/>
                              Other
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" href="#collapse3"><i className="indicator fa fa-caret-down" aria-hidden="true"></i> Location</a>
                      </h4>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse in">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="checkbox">
                            <label for="zip">Zipcode:</label>
                            <input type="text" className="form-control" id="zip"/>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }

    class ResultFeed extends React.Component {

      render() {
        return(
          <div className="results-feed">
            <ul className="list-unstyled">
              {React.Children.map(this.props.children, function(child){
                return(
                  <li className="media">
                    {child}
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }
    }

    class SearchResult extends React.Component{
      render(){
        return(
          <div>
            <img className="d-flex align-self-start mr-3 media-img" src={this.props.image} alt="Generic placeholder image"/>
            <div className="media-body">
              <h4 className="mt-0">{this.props.name}</h4>
              <div className="row">
                <div className="col-md-2">
                  <p>Genre: {this.props.genre}</p>
                  <p>Looking for: None</p>
                </div>
                <div className="col-md-10">
                  <p>{this.props.description}</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
