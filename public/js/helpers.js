window.helpers = (function () {
  function newasdfColor() {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: uuid.v4(), // eslint-disable-line no-undef
      elapsed: 0,
    };
    return timer;
  }

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

  function sayHi() {
    console.log('hiiiii from helpers');
  }

  function hueRed() {
    var r = Math.round( Math.random() * (255 - 216) + 216 );
    var g = Math.round( Math.random() * (33 - 1) + 1 );
    var b = Math.round( Math.random() * (33 - 1) + 1 );

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

  // function hueYellow() {
  //   var r = Math.round( Math.random() * (248 - 242) + 242 );
  //   var g = Math.round( Math.random() * (218 - 209) + 209 );
  //   var b = Math.round( Math.random() * (60 - 2) + 2 );
  //
  //   var color = 'rgb('
  //                     + r.toString()
  //                     + ', '
  //                     + g.toString()
  //                     + ', '
  //                     + b.toString()
  //                     + ')';
  //
  //   console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
  //   console.log ('hueYellow just ran!');
  //   return color;
  //
  // }

  // function hueMidnight() {
  //   var r = Math.round( Math.random() * (48 - 21) + 21 );
  //   var g = Math.round( Math.random() * (40 - 4) + 4 );
  //   var b = Math.round( Math.random() * (86 - 71) + 71 );
  //
  //   var color = 'rgb('
  //                     + r.toString()
  //                     + ', '
  //                     + g.toString()
  //                     + ', '
  //                     + b.toString()
  //                     + ')';
  //
  //   console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
  //   return color;
  //
  // }

  function decideBounds(hue) {
    // new colors arise depending on the mixture of red(r), green(g), blue(b)...
    // this fxn sets the boundary for the max and min of 'r', 'g', and 'b'
    //this fxn has hard coded color bounds
    var rMax, rMin, gMax, gMin, bMax, bMin;
    //baseline: rgb(48, 39, 86)
    // change name, mightnight isn't a hue
    if (hue === 'Midnight Dream') {
      rMax = 48,
      rMin = 21,
      gMax = 40,
      gMin = 4,
      bMax = 86,
      bMin = 71;
    }
    else if (hue === 'Summerset Sunshine') {
      rMax = 248,
      rMin = 242,
      gMax = 218,
      gMin = 209,
      bMax = 60,
      bMin = 2;
    }
    return {
      rMax: rMax,
      rMin: rMin,
      gMax: gMax,
      gMin: gMin,
      bMax: bMax,
      bMin: bMin,
    }
  }

  function generateColors(hue) {
  //fxn decideBounds returns an object, so we use dot notation below: b.rMax
  //rename function b to something else so it doesn't mix with with 'b' in rgb??
    var b = decideBounds(hue);
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
    sayHi,
    hueRed,
    // hueYellow,
    // hueMidnight,
    generateColors,
    decideBounds,
  };
}());
