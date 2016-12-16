class StoryBox extends React.Component {
  render() {

    const now = new Date();
    const topicsList = ['HTML', 'Javascript', 'React'];
    return(

      <div>
        <h3>Horse Story</h3>
        <p className="lead">
          Current time: {now.toTimeString()}
        </p>
        <ul>
          {topicsList.map( topic => <li>{topic}</li> )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <StoryBox />,
  document.getElementById('example')
);
