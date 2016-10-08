'use strict';

const request = require('request');
// bf764a2e-308a-43f5-9fdc-24a6e6447ae0

module.exports = {
  // start: function() {
  //   console.log('here');
  // }
  start: function() {

  const getJSON = function(url) {
    const promise = new Promise((resolve, reject) => {
      request.get(url, (err, res, body) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(body));
      });
    });

    return promise;
  };

  getJSON('http://api.pugetsound.onebusaway.org/api/where/arrivals-and-departures-for-stop/1_75403.json?key=TEST')
    .then((body) => {
      const timeObject = body.data.entry.arrivalsAndDepartures[2];
      const predictedArrivalTime = timeObject.predictedArrivalTime;
      const scheduledArrivalTime = timeObject.scheduledArrivalTime;
      const lastUpdateTime = timeObject.lastUpdateTime;
      let timeDifference = getTimeDifference(lastUpdateTime,
                                    predictedArrivalTime, scheduledArrivalTime);

      if (timeDifference > 0) {
        console.log(`${timeDifference} minutes late`);
      } else if (timeDifference < 0) {
        console.log(`${Math.abs(timeDifference)} minutes early`);
      } else {
        console.log('Miracle! Bus is on time!');
      }
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  }
};

const getTimeDifference = function(lastUpdateTime,
                                  predictedArrivalTime, scheduledArrivalTime) {
  if (!predictedArrivalTime) {
    return (lastUpdateTime - scheduledArrivalTime) / (60 * 1000);
  } else {
    return (predictedArrivalTime - scheduledArrivalTime) / (60 * 1000);
  }
}
