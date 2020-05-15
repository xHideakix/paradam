$( document ).ready(function() {
  $('#selectionItemTwo').on('click', () => {
    $('#selectionItemTwo').addClass("activeSelection");
    $('#selectionItemOne').removeClass("activeSelection");
  });
  $('#selectionItemOne').on('click', () => {
    $('#selectionItemOne').addClass("activeSelection");
    $('#selectionItemTwo').removeClass("activeSelection");
  });
});
