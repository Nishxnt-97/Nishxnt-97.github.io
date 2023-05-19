// Add active class to current page link in the navbar
$(document).ready(function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    $('a.nav-link[href="' + filename + '"]').addClass('active');
  });
  