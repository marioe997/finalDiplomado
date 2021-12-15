var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
var authRouter = require('./routes/auth');
var paymentRouter = require('./routes/payment');
var operationsRouter = require('./routes/operations');
var shipmentRouter = require('./routes/shipment');

const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});

var app = express();

dogstatsd.increment('page.views')

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
app.use('/operations', operationsRouter);
app.use('/payment', paymentRouter);
app.use('/shipment', shipmentRouter);

module.exports = app;
// Increment a counter.
dogstatsd.increment('app.view');


//docker

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo');
});

server.listen(port,() => {
  console.log(`El servidor se está ejecutando en http://localhost:${port}/`);
});

Sentry.init({
  dsn: "https://cd258629a0db41138ad171dc36dd0166@o1059778.ingest.sentry.io/6048665",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

setTimeout(() => {
  try {
    foo();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
}, 99);
function foo() {
  throw new Error('Function not implemented.');
}
