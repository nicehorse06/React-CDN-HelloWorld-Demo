import React from 'react';
import HelloWorld from './HelloWorld.js'

setInterval(() => {
    React.render(
        <HelloWorld date={new Date()} />,
            document.getElementById('example')
    );
}, 500);
