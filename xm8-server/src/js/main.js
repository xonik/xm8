/*

//TODO: 
- controllers must be 8 bit, transmitting > 255 will wrap! 
	- scale controllers
- Protect receive from transmit - send must wait for interrupt to go low
- Add client id instead of not resending event to gui to event to prevent resending message to same client
- Add support for multiple voices / indicate what voice cards to send messages to.

http://easyreactbook.com/blog/react-fundamentals-configuring-browserify-babelify-and-react

https://github.com/babel/babelify#options

npm run build-js
npm run watch-js
*/

var React = require('react');

var Knob = require('./components/Knob.jsx');

React.render(
  <Knob />,
  document.getElementById('content')
);

console.log("Starting Xonik M8");

/*
var wsclient = require('./wsclient.js');
require('./knobWithRing.js');
require('./eventDebug.js');

console.log($("#receiveOn"));

$('#receiveOn').click(function() {
    var $this = $(this);
    // $this will contain a reference to the checkbox   
    wsclient.toggleReceive($this.is(':checked'));
});

console.log("Starting Xonik M8");

var wsclient = require('./wsclient.js');
*/
