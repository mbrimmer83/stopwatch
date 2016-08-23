
function StopWatch() {
  var startTime = null;
  var stopTime = null;
  var running = false;

  this.start = function() {
    if (running === true) {
        return;
    } else if (startTime !== null) {
      stopTime = null;
    }
    running = true;
    startTime = getTime();
  };

  this.stop = function() {
    if (running === false) {
      return;
    }
    stopTime = getTime();
    running = false;
  };

  this.duration = function() {
    if (startTime === null || stopTime === null) {
      return undefined;
    } else {
      // console.log((stopTime - startTime) / 1000);
      return (stopTime - startTime) / 1000;
    }
  };
}


function getTime() {
  var date =  new Date();
  return date.getTime();
}

var stopwatch = new StopWatch();

function runStopWatch() {
  stopwatch.start();

  setTimeout(function() {
      stopwatch.stop();
      console.log(stopwatch.duration());
  }, 3000);
}
runStopWatch();
