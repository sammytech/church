$(document).ready(function(){
    $(".reveal").addClass("hiddens").viewportChecker({
          classToAdd: 'visibles animated fadeInUp',
          offset: 20
    });


      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $(".navbar-fixed-top").removeClass("deactivateBg")
          $(".navbar-fixed-top").addClass("activateBg") // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $(".navbar-fixed-top").removeClass("activateBg")
          $(".navbar-fixed-top").addClass("deactivateBg"); // if not, change it back to transparent
        }
      });
});

