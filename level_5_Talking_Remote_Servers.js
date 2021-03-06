class CommentForm extends React.Component {
  render() {
    return(
      <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className="comment-form-fields">
          <input placeholder="Name:" ref={(input) => this._author = input}/>
          <textarea placeholder="Comment:" ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className="comment-form-actions">
          <button type="submit">
            Post comment
          </button>
        </div>
      </form>
    );
  }
  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;
    this.props.addComment(author.value, body.value);
  }
}

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <p className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._handleDelete.bind(this)}>
            Delete comment
          </a>
        </p>
      </div>
    );
  }

  _handleDelete(event) {
    evnet.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.onDelete(this.props.comment);
    }
  }
}

class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: true,
      comments: []
    };
  }
  render() {
    const comments = this._getComments();
    let commentNodes;
    if (this.state.showComments) {
      commentNodes = <div className="comment-list"> {comments} </div>;
    }
    return(
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <button onClick={this._handleClick.bind(this)}>Show comments</button>
        <h3>Comments</h3>
        <h4 className="comment-count"> {this._getCommentsTitle(comments.length)} </h4>
        {commentNodes}
      </div>
    );
  }

  componentWillMount(){
    _fetchComments();
  }

  componentDidMount() {
    this._timer = setInterval(() => this._fetchComments(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _fetchComments() {
    jQuery.ajax({
      method: 'Get',
      url: '/api/comments',
      success: (comments) => {
        this.setState({ comments })
      }
    });
  }

  _deleteComment(comment) {
    jQuery.ajax({
      method: 'DELETE',
      url: `/api/comments/${comment.id}`
    })

    const comments = [...this.state.comments];
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);

    this.setState({ comments });
  }

  _addComment(author, body) {
    const comment = { author, body, };

    jQuery.post('/api/comments', { comment })
      .success(newComment => {
        this.setState({ comments: this.state.comments.concat([comment])});
      });
  }


  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={this._deleteComment.bind(this)}
        />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comment yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
}

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('remote_server')
);
