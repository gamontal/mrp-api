'use strict';

const http = require('./lib/http_request');
const base_url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

const urls = [base_url + 'curiosity/photos?api_key=',
              base_url + 'opportunity/photos?api_key=',
              base_url + 'spirit/photos?api_key='];

const errors = ['Invalid options'];

const MRP_API = function (apiKey) {
  if (!(this instanceof MRP_API)) {
    return new MRP_API(apiKey);
  }

  this.APIKEY = apiKey;
};

(function () {

  var getPhotos = function (key, roverUrl, options, cb) {

    let url;
    const camera = options.camera || undefined;
    const page = options.page || undefined;

    if (options.sol) {
      url = roverUrl + key + '&sol=' + Number(options.sol);
    } else if (options.earth_date) {

      if (options.earth_date instanceof Date) {
        options.earth_date = options.earth_date.toISOString().substring(0, 10);
      }

      url = roverUrl + key + '&earth_date=' + options.earth_date;

    } else {
      throw new Error(errors[0]);
    }

    let res = http.get(url + '&page=' + (page ? page : 1) + (camera ? '&camera=' + camera : ''));

    return (res.errors || res.error ? cb(res, null) : cb(null, res));
  };

  this.curiosity = function (options, cb) {
    getPhotos(this.APIKEY, urls[0], options, cb);
  };

  this.opportunity = function (options, cb) {
    getPhotos(this.APIKEY, urls[1], options, cb);
  };

  this.spirit = function (options, cb) {
    getPhotos(this.APIKEY, urls[2], options, cb);
  };

}).call(MRP_API.prototype);

module.exports = MRP_API;

