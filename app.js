class StoryBox extends React.Component {
  render() {
    return(
      <div>
        <h3>Horse Story</h3>
        <p className="lead">Some word</p>
      </div>
    );
  }
}

ReactDOM.render(
  <StoryBox />,
  document.getElementById('example')
);
