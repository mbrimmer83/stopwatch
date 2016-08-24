
function StopWatch() {
  var startTime = null;
  var stopTime = null;
  var running = false;
  var times = [0, 0, 0];

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

  this.calculate = function(startTime) {
    var timestamp = getTime();
    var diff = timestamp - startTime;
    times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (times[2] >= 100) {
            times[1] += 1;
            times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (times[1] >= 60) {
            times[0] += 1;
            times[1] -= 60;
        }
        if (running === true) {
          stopwatch.calculate();
          console.log(times);
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
  stopwatch.calculate();

  setTimeout(function() {
      stopwatch.stop();
      console.log(stopwatch.duration());
  }, 3000);
}
runStopWatch();
