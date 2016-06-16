/*
Xonik M8 ws & http server

Go to http://pi_address/

TODO: Sanitize inputs
*/

// Server
import express from 'express';
import express_ws from 'express-ws';
import bodyParser from 'body-parser';
import sass from 'node-sass-middleware';

//import wifiRoutes from './routes/wifi';
import matrixRoutes from './routes/matrix';
import voiceRoutes from './routes/voice';
import stateRoute from './routes/state';
//import controllerRoute from './routes/controller';

// Setup server
let app = express();
let ws = express_ws(app);
let projectRoot = process.cwd();

// for parsing application/json
app.use(bodyParser.json()); 

// Sass -> css files.
app.use(
  sass({
    src: projectRoot + '/frontend/sass',
    dest: __dirname + '/static/css',
    prefix: '/css', // without this, css loading ony works the first time: http://stackoverflow.com/questions/31127848/node-sass-middleware-only-serving-css-file-once?rq=1
    debug: true
    //, outputStyle: 'compressed'
  })
);

// static files location
app.use(express.static('web/static'));

// start page
app.get('/', function (req, res) {
  console.log("Redirecting to start page");
  res.redirect("/xm8-gui.html");
});

//web socket routes
stateRoute(app, ws);
//controllerRoute(app, ws);

//app.use('/wifi', wifiRoutes);
app.use('/matrix', matrixRoutes);
app.use('/voice', voiceRoutes);

// Capture all requests not yet handled and redirect them to the captive portal
// page as they may origin from wifi logon.
// TODO: Seems to capture all ws calls too
/*app.use(function(req, res, next){
  console.log("User requested " + req.originalUrl + ", redirecting to captive portal page");
  res.redirect("/xm8-captive-portal.html");
});*/

app.listen(8001);