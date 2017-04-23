import React from 'react';
import EventWidget from '../EventWidget.js';

export default class Chatpage extends React.Component{
  render(){
    return(
      <div>
          <div className="container-fluid">
              <div className="row">
                <ChatsSidebar />
                <ChatFeed />
                <ChatRightSidebar />
              </div>
          </div>
      </div>
    )
  }
}

class ChatsSidebar extends React.Component{
  render(){
    return(
      <div className="col-md-3 left-sidebar">
          <h1>Chats</h1>
          <ul className="nav nav-pills nav-stacked chats-panel">
              <ChatRoomBubble member="SpongeBob" memberProfile="#" memberImage="img/spongebob_profile.jpg">See you then!</ChatRoomBubble>
              <ChatRoomBubble member="Patrick" memberProfile="#" memberImage="img/patrick_profile.jpg">Is mayonnaise an instrument?</ChatRoomBubble>
              <ChatRoomBubble member="A Pretty Bad Guitar Player" memberProfile="#" memberImage="img/765-default-avatar.png">I'm the best</ChatRoomBubble>
              <ChatRoomBubble member="Your Best Friend" memberProfile="#" memberImage="img/765-default-avatar.png">when?!?!?!?</ChatRoomBubble>
              <CreateChatRoomBubble />
          </ul>
      </div>
    )
  }
}

class ChatRoomBubble extends React.Component{
  render(){
    return(
      <li role="presentation">
          <a href={this.props.memberProfile}>
              <div className="media-left">
                  <img src={this.props.memberImage} />
              </div>
              <div className="media-body">
                  <h4>{this.props.member}</h4>
                  <p>{this.props.children}</p>
              </div>
              <div className="media-right">
                  <span className="glyphicon glyphicon-comment"></span>
              </div>
          </a>
      </li>
    )
  }
}

class CreateChatRoomBubble extends React.Component{
  render(){
    return(
      <li role="presentation">
          <a href="#">
              <div className="media-body">
                  <p>Message Someone Else</p>
              </div>
              <div className="media-right">
                  <span className="glyphicon glyphicon-plus-sign"></span>
              </div>
          </a>
      </li>
    )
  }
}

class ChatFeed extends React.Component{
  render(){
    return(
      <div className="col-md-6 col-md-offset-3 chat-feed">
          <h1>Chatting With: SpongeBob</h1>
          <div className="message-feed">
              <TimeBreak date="2/20/17 at 4:56 PM" />
              <FriendMessageBubble>I made a few Spongebob references</FriendMessageBubble>
              <FriendMessageBubble>I'm out now though</FriendMessageBubble>
              <FriendMessageBubble>If you started at the top</FriendMessageBubble>
              <FriendMessageBubble>Then the references</FriendMessageBubble>
              <FriendMessageBubble>are at the middle and in the "chats" menu</FriendMessageBubble>
              <UserMessageBubble>because they are supposed to be the more recent messages.</UserMessageBubble>
              <UserMessageBubble>I am just trying to make a lot of messages so the the page</UserMessageBubble>
              <UserMessageBubble>will scroll because they won't all fit</UserMessageBubble>
              <UserMessageBubble>I did it!</UserMessageBubble>
              <UserMessageBubble>Below is real mock text!</UserMessageBubble>
              <TimeBreak date="Yesterday at 10:07 AM" />
              <UserMessageBubble>Can you give me a ride to the BubbleBowl?</UserMessageBubble>
              <FriendMessageBubble>Sure</FriendMessageBubble>
              <FriendMessageBubble>I'll Pick you up at 3:30</FriendMessageBubble>
              <UserMessageBubble>I'll be ready</UserMessageBubble>
              <TimeBreak date="Today at 2:12 PM" />
              <FriendMessageBubble>Are you coming tonight?</FriendMessageBubble>
              <UserMessageBubble>What time is practice at?</UserMessageBubble>
              <FriendMessageBubble>It was moved to 8</FriendMessageBubble>
              <UserMessageBubble>alright thanks!</UserMessageBubble>
              <FriendMessageBubble>See you then!</FriendMessageBubble>
          </div>
          <button className="btn btn-default pull-right">Send</button>
          <input type="text" className="form-control" placeholder="New Message" />
      </div>
    )
  }
}

class UserMessageBubble extends React.Component{
  render(){
    return(
      <div className="row">
          <p className="message message-user pull-right" >{this.props.children}</p>
      </div>
    )
  }
}

class FriendMessageBubble extends React.Component{
  render(){
    return (
      <div className="row">
          <p className="message message-friend">{this.props.children}</p>
      </div>
    )
  }
}

class TimeBreak extends React.Component {
  render(){
    return(
      <div>
        <hr />
        <div className="row time-break">
          <p className="message-date">{this.props.date}</p>
        </div>
    </div>
    )
  }
}

class ChatRightSidebar extends React.Component{
  render(){
    return(
      <div className="col-md-3 col-md-offset-9 right-sidebar">
          <h1><br /></h1>
          <div className="container-fluid right-sidebar-contents">
              <div className="row">
                  <AboutWidget member="SpongeBob" memberProfile="#" instruments="Guitar" bands="Krusty Krab Band"/>
              </div>
              <div className="row">
                  <EventWidget />
              </div>
          </div>
      </div>
    )
  }
}

class AboutWidget extends React.Component{
  render(){
    return(
      <div>
        <div className="media-body">
            <a href={this.props.memberProfile}>
                <h3>About {this.props.member}</h3>
            </a>
            <hr />
            <p>Instruments: {this.props.instruments}</p>
            <p>Bands in common: {this.props.bands}</p>
        </div>
        <div className="media-right">
            <img src="img/spongebob_profile.jpg" />
        </div>
      </div>
    )
  }
}
