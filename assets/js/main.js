var setHeaderColor = function() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
  $(".js_color").css("color", pastel);
};

var setBackground = function() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
  return pastel;
};

$(document).ready(function(){
  setInterval(setHeaderColor, 5000);


  $("a").hover(function() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 70%)';
    $(this).css("color", pastel);

  }, function() {
    $(this).removeAttr('style');
  });

});