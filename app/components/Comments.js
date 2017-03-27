import React from 'react';


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
  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Comments</h3>
        </div>
        <div className="panel-body">
          <ul className="media-list">
            {this.props.comments.map((comment) =>
              <Comment comment={comment} />
            )}
            <hr className="comment-sp1" />
            <li>
              <div>
                <a href="#"><small><p className="text-center grey">
                  Show more comments <span className="glyphicon glyphicon-chevron-down"></span>
                </p></small></a>
              </div>
            </li>
            <hr className="comment-sp2" />
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <div className="input-group">
                  <input type="text" className="form-control"
                         placeholder="Write a comment..." />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
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
      <li key={this.props.comment.id} className="media">
        <div className="media-left media-top">
          PIC
        </div>
        <div className="media-body">
          <a href="#">{this.props.comment.user}</a> {this.props.comment.text}
          <br /><a href="#">Like</a> · <a href="#">Reply</a> · {this.props.comment.time}
        </div>
      </li>
    )
  }
}
