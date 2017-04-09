$(document).ready(function() {
  //change the integers below to match the height of your upper dive, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {

    if ($(window).scrollTop() > 150) {
      $('#nav_bar').addClass('navbar-fixed-top');
      $('#nav_bar').find("ul").removeClass('nav_links');
    }

    if ($(window).scrollTop() < 151) {
      $('#nav_bar').removeClass('navbar-fixed-top');
      $('#nav_bar').find("ul").addClass('nav_links');
    }
  });
});
