import React from 'react';
import {unixTimeToString} from '../util';
import {addFeedItem} from '../server';


export const mockComments = [
  {
    user: "Spongebob",
    id: "1",
    text: "This is a comment",
    time: "2 hrs",
  },
  {
    user: "Squidward",
    id: "2",
    text: "Another comment",
    time: "12 hrs",
  },
  {
    user: "Mr. Krabs",
    id: "3",
    text: "Comment comment",
    time: "22 hrs",
  },
]

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ""}
  }

  addComment(e) {
    e.preventDefault();
    if (e.button === 0) {
      addFeedItem(this.props.feed, "4", this.props.band, this.state.text, this.props.update);
      this.setState({text: ""})
    }
  }


  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Comments</h3>
        </div>
        <div className="panel-body">
          <ul className="media-list">
            {this.props.comments.map((comment, i) =>
              <Comment key={i} comment={comment} />
            )}
            <li className="media">
              <div className="media-body">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write a comment..."
                    value={this.state.text}
                    onChange={(e) => this.setState({text : e.target.value})} />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default"
                      type="button"
                      onClick={(e) => this.addComment(e)}>
                      Post
                    </button>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


class Comment extends React.Component {
  render() {
    return (
      <li className="media">
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <a href="#">{this.props.comment.author.fullName}</a> {this.props.comment.contents}
          <br /> {unixTimeToString(this.props.comment.postDate)}
        </div>
      </li>
    )
  }
}
