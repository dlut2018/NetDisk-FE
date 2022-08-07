import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";


function tick(){
    const element = (
        <div>
            <h1>login page</h1>
            <h1>{new Date().toLocaleString()}</h1>
        </div>
    );
    ReactDOM.render(element,document.getElementById("root"))
}
setInterval(tick,1000)

