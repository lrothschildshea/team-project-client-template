import React from 'react';

export default class Comments extends React.Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h3 className="panel-title">Comments</h3>
        </div>
        <div className="panel-body">
          <ul className="media-list">
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Spongebob</a> This is a comment
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 2 hrs
              </div>
            </li>
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Squidward</a> Another comment
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 10 hrs
              </div>
            </li>
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Mr. Krabs</a> Another comment
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 20 hrs
              </div>
            </li>
            <li className="media">
              <div className="media-left media-top">
                PIC
              </div>
              <div className="media-body">
                <a href="#">Squidward</a> Another comment
                <br /><a href="#">Like</a> · <a href="#">Reply</a> · 22 hrs
              </div>
            </li>
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