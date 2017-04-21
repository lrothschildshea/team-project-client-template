import React from 'react';
import MainFeedElement from './MainFeedElement.js';
import {unixTimeToString} from '../../util';

export default class MainFeed extends React.Component {

  render() {
    return(
      <div className="col-md-6 col-md-offset-3">
          <div className="main-feed">
              <h1>Recent Activity</h1>
              {(typeof this.props.feedItems !== "undefined") ? this.props.feedItems.map((feedItem, i) =>{
                return (
                  <MainFeedElement key={i} author={feedItem.author} postedDate={unixTimeToString(feedItem.postDate)} band={feedItem.band} bandPicture="img/bandForHomescreen.jpg">{feedItem.contents}</MainFeedElement>
                )
              }) : null }
          </div>
      </div>
    )
  }
}
