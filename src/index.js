import React from 'react';
import ReactDOM from 'react-dom';

setInterval(tick,4000)

function tick(){
    const element = (
        <div>
            <h1>{new Date().toLocaleString()}</h1>
        </div>
    );
    ReactDOM.render(element,document.getElementById("test"))
}



