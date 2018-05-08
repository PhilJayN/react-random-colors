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

  function newColor(){
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


  // function getRandomArbitrary(min, max``) {
  //     return Math.random() * (max - min) + min;
  // }

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

  function hueYellow() {
    var r = Math.round( Math.random() * (248 - 242) + 242 );
    var g = Math.round( Math.random() * (218 - 209) + 209 );
    var b = Math.round( Math.random() * (60 - 2) + 2 );

    var color = 'rgb('
                      + r.toString()
                      + ', '
                      + g.toString()
                      + ', '
                      + b.toString()
                      + ')';

    console.log ('r', r, 'g', g, 'b', b, 'color var:', color);
    console.log ('hueYellow just ran!');
    return color;

  }

  //baseline: rgb(48, 39, 86)
  // change name, mightnight isn't a hue
  function hueMidnight() {
    var r = Math.round( Math.random() * (48 - 21) + 21 );
    var g = Math.round( Math.random() * (40 - 4) + 4 );
    var b = Math.round( Math.random() * (86 - 71) + 71 );

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


  function generateColors(hue) {
    if (hue === 'Summerset Sunshine') {
      return hueYellow();

    } else {
      var r = Math.round( Math.random() * (48 - 21) + 21 );
      var g = Math.round( Math.random() * (40 - 4) + 4 );
      var b = Math.round( Math.random() * (86 - 71) + 71 );

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

  }




  return {
    newColor,
    sayHi,
    hueRed,
    hueYellow,
    hueMidnight,
    generateColors,
  };
}());
