import React from 'react';
import Navbar from './Navbar.js';

export default class Chatpage extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
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
              <ChatRoomBubble member="SpongeBob" memberImage="img/spongebob_profile.jpg">See you then!</ChatRoomBubble>
              <ChatRoomBubble member="Patrick" memberImage="img/patrick_profile.jpg">Is mayonnaise an instrument?</ChatRoomBubble>
              <ChatRoomBubble member="A Pretty Bad Guitar Player" memberImage="img/765-default-avatar.png">I'm the best</ChatRoomBubble>
              <ChatRoomBubble member="Your Best Friend" memberImage="img/765-default-avatar.png">when?!?!?!?</ChatRoomBubble>
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
          <a href="#">
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
              <hr />
              <div className="row">
                  <p className="message-date">2/20/17 at 4:56 PM</p>
              </div>
              <div className="row">
                  <p className="message message-friend">I made a few Spongebob references</p>
              </div>
              <div className="row">
                  <p className="message message-friend">I'm out now though</p>
              </div>
              <div className="row">
                  <p className="message message-friend">If you started at the top</p>
              </div>
              <div className="row">
                  <p className="message message-friend">Then the references</p>
              </div>
              <div className="row">
                  <p className="message message-friend">are at the middle and in the "chats" menu</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">because they are supposed to be the more recent messages.</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">I am just trying to make a lot of messages so the the page</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">will scroll because they won't all fit</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">I did it!</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">Below is real mock text!</p>
              </div>
              <hr />
              <div className="row">
                  <p className="message-date">Yesterday at 10:07 AM</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">Can you give me a ride to the BubbleBowl?</p>
              </div>
              <div className="row">
                  <p className="message message-friend">Sure</p>
              </div>
              <div className="row">
                  <p className="message message-friend">I'll Pick you up at 3:30</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">I'll be ready</p>
              </div>
              <hr />
              <div className="row">
                  <p className="message-date">Today at 2:12 PM</p>
              </div>
              <div className="row">
                  <p className="message message-friend">Are you coming tonight?</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">What time is practice at?</p>
              </div>
              <div className="row">
                  <p className="message message-friend">It was moved to 8</p>
              </div>
              <div className="row">
                  <p className="message message-user pull-right">alright thanks!</p>
              </div>
              <div className="row">
                  <p className="message message-friend">See you then!</p>
              </div>
              <UserMessageBubble>Test</UserMessageBubble>
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

class ChatRightSidebar extends React.Component{
  render(){
    return(
      <div className="col-md-3 col-md-offset-9 right-sidebar">
          <h1><br /></h1>
          <div className="container-fluid right-sidebar-contents">
              <div className="row">
                  <div className="media-body">
                      <a href="#">
                          <h3>About SpongeBob</h3>
                      </a>
                      <hr />
                      <p>Instruments: Guitar and Accoirdian</p>
                      <p>Bands in common: Krusty Krab Band</p>
                  </div>
                  <div className="media-right">
                      <img src="img/spongebob_profile.jpg" />
                  </div>
              </div>
              <div className="row">
                  <div className="events">
                      <a href="#">
                          <h1>Upcoming Events</h1>
                      </a>
                      <ul className="media-list">
                          <li className="media">
                              <hr />
                              <div className="media-left">
                                  <p>Event:</p>
                                  <p>Date:</p>
                                  <p>Location:</p>
                              </div>
                              <div className="media-body">
                                  <a href="#">
                                      <p>Band 1 Event</p>
                                      <p>Tomorrow at 7:00 PM</p>
                                      <p>South College</p>
                                  </a>
                              </div>
                              <hr />
                              <div className="media-left">
                                  <p>Event:</p>
                                  <p>Date:</p>
                                  <p>Location:</p>
                              </div>
                              <div className="media-body">
                                  <a href="#">
                                      <p>Band 3 Event</p>
                                      <p>Friday at 8:00 PM</p>
                                      <p>Fine Arts Center</p>
                                  </a>
                              </div>
                              <hr />
                              <div className="media-left">
                                  <p>Event:</p>
                                  <p>Date:</p>
                                  <p>Location:</p>
                              </div>
                              <div className="media-body">
                                  <a href="#">
                                      <p>Band 5 Event</p>
                                      <p>Saturday at 2:00 PM</p>
                                      <p>Fine Arts Center</p>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
