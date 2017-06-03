$(document).foundation();

var setHeaderColor = function() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
  $(".name").css("color", pastel);
};

$(document).ready(function(){
  setInterval(setHeaderColor, 1000);

  $(".title").hover(function() {
    $(this).prev().addClass("fa-spin");
  }, function() {
    $(this).prev().removeClass("fa-spin");
  });

  $("a").hover(function() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 70%)';
    $(this).css("color", pastel);

  }, function() {
    $(this).removeAttr('style');
  });

});
