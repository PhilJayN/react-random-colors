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
      console.log ('r', r, 'g', g, 'b', b);
      var background = 'rgb('
                        + r.toString()
                        + ', '
                        + g.toString()
                        + ', '
                        + b.toString();
      var icon = 'rgb('
                        + (r - 40).toString()
                        + ', '
                        + (g - 40).toString()
                        + ', '
                        + (b - 40).toString()
                        + ')';
      return {
        background: background,
        icon: icon,
      }
  }

  function sayHi() {
    console.log('hiiiii from helpers');
  }

  return {
    newColor,
    sayHi,
  };
}());
