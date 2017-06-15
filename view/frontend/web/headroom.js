define(['headroom'], function (Headroom) {
  return function (configuration, element) {
    var headroom  = new Headroom(element, configuration);
    headroom.init();
  }
});