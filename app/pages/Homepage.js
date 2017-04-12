import React from 'react';
import HomeLeftSidebar from '../components/Homepage/HomeLeftSidebar.js';
import MainFeed from '../components/Homepage/MainFeed.js';
import HomeRightSidebar from '../components/Homepage/HomeRightSidebar.js';
import {getFeedData, getUsersBands, getUser, getBand} from '../server';

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedItems: [],
            userBands: [],
            user: null,
            followBands: []
        };
    }

    refresh() {
      getFeedData("1", (feedData) => {
        this.setState({feedItems: feedData.contents});
      });
      getUsersBands(1, (bands) => {
        this.setState({userBands: bands});
      });
      getUser("1", (userObj) => {
        this.setState({user: userObj});
        var followingBands = [];
        this.state.user.following.map((bandId) => {
            getBand(bandId, (band) => {
                followingBands.push(band);
                this.setState({followBands: followingBands});
            })
        });
      })
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <HomeLeftSidebar userBands={this.state.userBands} userFollowing={this.state.followBands}/>
                        <MainFeed feedItems={this.state.feedItems}/>
                        <HomeRightSidebar/>
                    </div>
                </div>
            </div>
        )
    }
}
