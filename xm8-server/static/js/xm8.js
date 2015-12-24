(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var output = {};
var input = {};

function setInputOutputMappings(controller){
	output[controller.intId] = controller;
	input[controller.extId] = controller;
}

var controllers = [
	{
		intId: "volume",
		extId: 2,
		name: "Volume"
	},
	{
		intId: "frequency",
		extId: 3,
		name: "Frequency"
	},
];

var controllerCount = controllers.length;
for(var i = 0; i < controllerCount; i++){
	setInputOutputMappings(controllers[i]);
}

var mappings = {
    input: input,
    output: output
}

module.exports = mappings;
},{}],2:[function(require,module,exports){
var events = require("./eventbusses.js");

function setupEventDebugging(){
	events.controls.output.subscribe("controller", function(ev){
		console.log("output ctrl " + ev.detail.id + ":" + ev.detail.value);
	});
	events.controls.input.subscribe("volume", function(ev){
		console.log("input ctrl volume: " + ev.detail);
	});
}

module.exports = setupEventDebugging();
},{"./eventbusses.js":3}],3:[function(require,module,exports){
var EventBus = function(){};
EventBus.prototype.subscribe = function(event, fn) {
    $(this).bind(event, fn);
};
EventBus.prototype.publish = function(event) {
    $(this).trigger(event);
};

var busses = {
    controls: {
        input: new EventBus(),
        output: new EventBus()
    }
}

module.exports = busses;
},{}],4:[function(require,module,exports){
var events = require("./eventbusses.js")

var colors = [
	'26e000','2fe300','37e700','45ea00','51ef00',
	'61f800','6bfb00','77ff02','80ff05','8cff09',
	'93ff0b','9eff09','a9ff07','c2ff03','d7ff07',
	'f2ff0a','fff30a','ffdc09','ffce0a','ffc30a',
	'ffb509','ffa808','ff9908','ff8607','ff7005',
	'ff5f04','ff4f03','f83a00','ee2b00','e52000'
];

var rad2deg = 180/Math.PI;
var deg = 0;
var bars = $('#bars');

for(var i=0;i<colors.length;i++){
	
	deg = i*12;
	
	// Create the colorbars
	
	$('<div class="colorBar">').css({
		backgroundColor: '#'+colors[i],
		transform:'rotate('+deg+'deg)',
		top: -Math.sin(deg/rad2deg)*80+100,
		left: Math.cos((180 - deg)/rad2deg)*80+100,
	}).appendTo(bars);
}

var colorBars = bars.find('.colorBar');
var numBars = 0, lastNum = -1;
	
function initKnob(){

	$('#control').knobKnob({
		snap : 10,
		value: 154,
		inEventBus: events.controls.input,
		outEventBus: events.controls.output,
		controllerId: "volume",
		turn : function(ratio){
			numBars = Math.round(colorBars.length*ratio);
			
			// Update the dom only when the number of active bars
			// changes, instead of on every move
			
			if(numBars == lastNum){
				return false;
			}
			lastNum = numBars;
			
			colorBars.removeClass('active').slice(0, numBars).addClass('active');
		}
	});
}

module.exports = initKnob();


},{"./eventbusses.js":3}],5:[function(require,module,exports){
require('./wsclient.js');
require('./knobWithRing.js');
require('./eventDebug.js');

console.log("Starting Xonik M8");

},{"./eventDebug.js":2,"./knobWithRing.js":4,"./wsclient.js":6}],6:[function(require,module,exports){
var events = require("./eventbusses.js");
var maps = require("./controllerSetup.js");

function createMessage(id, value){
  return id + "," + value;
}

function parseMessage(message){
  var parts = message.split(",");
  return {
    id: parts[0],
    value: parts[1]
  }
}

function wsConnect(){
  if ("WebSocket" in window) {
    console.log("WebSocket is supported by your Browser!");
      
    var ws = new WebSocket("ws://localhost:3000/echo");
    ws.onopen = function(){
      console.log("Connected to XM8 server");

      events.controls.output.subscribe("controller", function(ev){      
        var mapping = maps.output[ev.detail.id];
        if(mapping){
          var id = mapping.extId;

          var message = createMessage(id, ev.detail.value);
          console.log("sending message through ws: " + message);        
          ws.send(message);          
        }
      });
    }

    ws.onmessage = function(evt){ 
      var message = parseMessage(evt.data);  
      var mapping = maps.input[message.id];      
      var id = mapping.intId;

      console.log("received message through ws. id=" + id + ", value=" + message.value);  

      events.controls.input.publish(
        new CustomEvent(id, {detail: message.value})
      );              
    };
  } else {
    console.log("WebSocket not supported by your browser, cannot communicate with Xonik M8 server");
  }
}


module.exports = wsConnect();

},{"./controllerSetup.js":1,"./eventbusses.js":3}]},{},[5]);
