window.helpers = (function () {

  function pastels(){
      var r = (Math.round(Math.random()* 127) + 127);
      var g = (Math.round(Math.random()* 127) + 127);
      var b = (Math.round(Math.random()* 127) + 127);
      var color = 'rgb('
                        + r.toString()
                        + ', '
                        + g.toString()
                        + ', '
                        + b.toString()
                        + ')';

      console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
      return color;
  }

  function loadColorBounds() {
  }

  function colorBounds(hue) {
    //   // new colors arise depending on the mixture of red(r), green(g), blue(b)...
    //   // this fxn sets the boundary for the max and min of 'r', 'g', and 'b'
    var bounds;
    if (hue === 'Midnight Dream') {
      bounds = [[48,21], [40,4], [86,71]];
    }
    else if (hue === 'Summerset Sunshine') {
      bounds = [[248,242], [218,209], [60,2]];
    }
    else if (hue === 'Heated Passion') {
      bounds = [[255,216], [33,1], [33,1]];
    }

    return {
      rMax: bounds[0][0],
      rMin: bounds[0][1],
      gMax: bounds[1][0],
      gMin: bounds[1][1],
      bMax: bounds[2][0],
      bMin: bounds[2][1],
    }
  }


  function generateColors(hue) {
  //fxn decideBounds returns an object, so we use dot notation below: b.rMax
  //rename function b to something else so it doesn't mix with with 'b' in rgb??
    var b = colorBounds(hue);
                                        // ( max - min) + min
      var r = Math.round( Math.random() * (b.rMax - b.rMin) + b.rMin );
      var g = Math.round( Math.random() * (b.gMax - b.gMin) + b.gMin );
      var b = Math.round( Math.random() * (b.bMax - b.bMin) + b.bMin );

      var color = 'rgb('
      + r.toString()
      + ', '
      + g.toString()
      + ', '
      + b.toString()
      + ')';

      console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
      return color;
  }

  return {
    pastels,
    generateColors,
    loadColorBounds,
    colorBounds
  };
}());
