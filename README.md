![](https://github.com/gmontalvoriv/mrp-api/blob/master/banner.jpg)

> A simple NodeJS interface to [NASA's Mars Rover](https://api.nasa.gov/api.html#MarsPhotos) Photos API.

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save mrp-api

If you don't have or don't want to use npm:

    $ cd ~/.node_modules
    $ git clone git://github.com/gmontalvoriv/mrp-api.git

## Usage

```javascript
const mrp = require('mrp-api')('apiKey'); // => your NASA developer API key

const cOptions = {
  sol: 1000
};

mrp.curiosity(cOptions, function (err, data) {
  if (err) { console.log(err); }

  console.log(data);
});

```

## License

[MIT](https://github.com/gmontalvoriv/mrp-api/blob/master/LICENSE) © Gabriel Montalvo
