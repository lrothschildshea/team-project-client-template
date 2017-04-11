import React from 'react';
import HomeLeftSidebar from '../components/Homepage/HomeLeftSidebar.js';
import MainFeed from '../components/Homepage/MainFeed.js';
import HomeRightSidebar from '../components/Homepage/HomeRightSidebar.js';
import {getFeedData, getUsersBands} from '../server';

export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      feedItems: [],
      userBands: []
    };
  }

  refresh(){
    getFeedData("1", (feedData) => {
      this.setState(feedData);
    });
    getUsersBands(1, (bands) => {
      this.setState(bands);
    })
  }

  componentDidMount(){
    this.refresh();
  }

  render() {
    return(
      <div>
        <div className="container-fluid">
          <div className="row">
            <HomeLeftSidebar />
            <MainFeed feedItems={this.state.contents}/>
            <HomeRightSidebar />
          </div>
        </div>
      </div>
    )
  }
}
