import React from 'react';
import MainFeedElement from './MainFeedElement.js';
import {getFeedData} from '../../server';
import {unixTimeToString} from '../../util';

export default class MainFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contents: []
    };
  }

  componentDidMount(){
    this.refresh();
  }

  refresh(){
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
          <div className="main-feed">
              <h1>Recent Activity</h1>
              {this.state.contents.map((feedItem, i) =>{
                return (
                  <MainFeedElement key= {i} author={feedItem.author.fullName} authorProfile="#" postedDate={unixTimeToString(feedItem.postDate)} bandName="need to add this later" bandPicture="img/bandForHomescreen.jpg">{feedItem.contents}</MainFeedElement>
                )
              })}
          </div>
      </div>
    )
  }
}
