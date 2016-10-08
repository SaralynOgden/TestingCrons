'use strict';

const request = require('request');
// bf764a2e-308a-43f5-9fdc-24a6e6447ae0

module.exports = {
  start: function() {
    console.log('here');
  }
  // start: function() {
  //
  // const getJSON = function(url) {
  //   const promise = new Promise((resolve, reject) => {
  //     request.get(url, (err, res, body) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //
  //       resolve(JSON.parse(body));
  //     });
  //   });
  //
  //   return promise;
  // };
  //
  // getJSON('http://www.omdbapi.com/?s=Captain%20America')
  //   .then((body) => {
  //     console.log(body);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     process.exit(1);
  //   });
  // }
};
