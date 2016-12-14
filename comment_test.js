class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">Horse Horse</p>
        <p className="comment-body">
          I wanna know what love is...
        </p>
        <p className="comment-footer">
          <a href="#" className="comment-footer-delete">
            Delete comment
          </a>
        </p>
      </div>
    );
  }
}

class CommentBox extends React.Component {
  render() {
    return(
      <div className="comment">
        <h3>Comments</h3>
        <h4 className="comment-count">2 comments</h4>
        <div className="comment-list">
          <Comment />
          <Comment />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('comment')
);
