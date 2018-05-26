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

  function loadColorBounds(hue) {
    // new colors arise depending on the mixture of red(r), green(g), blue(b)...
    // this fxn sets the boundary for the max and min of 'r', 'g', and 'b'
    // Fierce, fiesty, Arabian nights, raging inferno, everlasting sunshine, midnight essence,
    // fervent, zealot, night to reemmber, magma's soul,
    var bounds;
    if (hue === 'Midnight Dream') {
      // bounds = [[rMax,rMin], [gMax,gMin], [bMax,bMin]];
      bounds = [[48,21], [40,4], [86,71]];
    }
    else if (hue === 'Summerset Sunshine') {
      bounds = [[248,242], [218,209], [60,2]];
    }
    else if (hue === 'Heated Passion') {
      bounds = [[255,216], [33,1], [33,1]];
    }
    else if (hue === 'Amazonian Green') {
      bounds = [[62,30], [119,109], [61,37]];
    }
    else if (hue === 'Raging Magma') {
      bounds = [[247,242], [90,76], [34,14]];
    }
    else if (hue === 'Everlasting Skies') {
      bounds = [[94,58], [159,130], [255,246]];
    }
    else if (hue === 'Into the Void') {
      bounds = [[9,2], [14,9], [25,15]];
    }

    // else if (hue === 'Neutral Grounds') {
    //   // bounds = [[178,84], [186,102], [102,96]];
    //   bounds = [[188,175], [186,179], [185,193]];
    // }


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
    var c = loadColorBounds(hue);
                                        // ( max - min) + min
      var r = Math.round( Math.random() * (c.rMax - c.rMin) + c.rMin );
      var g = Math.round( Math.random() * (c.gMax - c.gMin) + c.gMin );
      var b = Math.round( Math.random() * (c.bMax - c.bMin) + c.bMin );

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
    loadColorBounds
  };
}());
