$(document).ready(function(){
  $('#like-kitties').click(function(){
    $('#especially').removeClass('hidden')
  })
});

// If you are adding an event listener to items added to the DOM w/ JS,
// use this syntax. document.ready only applies to items in the DOM when the
// page initially loads (is ready).
$(document).on('click', '.element', function() {
  // do stuff
});
