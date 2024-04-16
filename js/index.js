$(document).ready(function() {
    // Show dropdown on hover
    $('.section-header').hover(
      function() {
        // Show the corresponding dropdown menu directly underneath the header
        $(this).next('.section-dropdown').slideDown();
      }, 
      function() {
        // Optionally keep th