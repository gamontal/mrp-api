![](https://github.com/gmontalvoriv/mrp-api/blob/master/banner.jpg)

> A simple NodeJS interface to [NASA's Mars Rover Photos API](https://api.nasa.gov/api.html#MarsPhotos).

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save mrp-api

If you don't have or don't want to use npm:

    $ cd ~/.node_modules
    $ git clone git://github.com/gmontalvoriv/mrp-api.git

## Usage

```javascript
const mrp = require('mrp-api')('apiKey'); // => your NASA developer API key

const options = {
  /**
   * Earth date on which a photo was taken
   * @type {String|Date object (YYYY-MM-DD)}
   */
  earth_date: '2015-08-03',
  
  /**
   * Martian sol (ranges from 0 to max found in endpoint)
   * @type {Number}
   */
  //sol: 1000,
  
  /**
   * See the camera name abbreviations table here https://api.nasa.gov/api.html#MarsPhotos
   * @type {String}
   */
   camera: 'FHAZ',
   
  /**
   * 25 items per page returned
   * @type {Number}
   */
   page: 1
};

mrp.curiosity(options, function (err, curiosityPhotos) {
  if (err) { console.log(err); }

  console.log(curiosityPhotos);
  
  /*
    Example response:
    
    { photos:
   [ { id: 403763,
       sol: 1063,
       camera: [Object],
       img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01063/opgs/edr/fcam/FLB_491863311EDR_F0482542FHAZ00323M_.JPG',
       earth_date: '2015-08-03',
       rover: [Object] },
     { id: 403764,
       sol: 1063,
       camera: [Object],
       img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01063/opgs/edr/fcam/FRB_491863311EDR_F0482542FHAZ00323M_.JPG',
       earth_date: '2015-08-03',
       rover: [Object] },
     { id: 406290,
       sol: 1063,
       camera: [Object],
       img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01063/opgs/edr/rcam/RLB_491863344EDR_F0482542RHAZ00323M_.JPG',
       earth_date: '2015-08-03',
       rover: [Object] },
       ...
  */
});

mrp.spirit(options, function (err, spiritPhotos) {
  if (err) { console.log(err); }

  console.log(spiritPhotos);
});

mrp.opportunity(options, function (err, opportunityPhotos) {
  if (err) { console.log(err); }

  console.log(opportunityPhotos);
});

```

## Example Images

<img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01063/opgs/edr/rcam/RRB_491863344EDR_F0482542RHAZ00323M_.JPG">

<img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01063/opgs/edr/fcam/FLB_491863311EDR_F0482542FHAZ00323M_.JPG">

## License

[MIT](https://github.com/gmontalvoriv/mrp-api/blob/master/LICENSE) © Gabriel Montalvo
