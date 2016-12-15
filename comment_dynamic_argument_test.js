class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
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
    const comments = this._getComments();
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        <h4 className="comment-count">{comments.length} comments</h4>
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _getComments() {
    const commentList = [
      { id: 1, author: 'Morgan McCircuit', body: 'Great picture'},
      { id: 2, author: 'Bending Bender', body: 'Excellent stuff'},
      { id: 3, author: 'Horse', body: 'Horse body'},
    ];
    return commentList.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }
}

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('comment_dynamic_argument')
);
