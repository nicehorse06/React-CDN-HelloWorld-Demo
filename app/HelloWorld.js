import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <p>
            Hello, <input type="text" placeholder="Your name here" />!
            It is {this.props.date.toTimeString()}
            </p>
        );
    }
});
