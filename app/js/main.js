$( document ).ready(function() {
  $('#selectionItemTwo').on('click', () => {
    $('#selectionItemTwo').removeClass("isNotActive");
    $('#selectionItemTwo').addClass("activeSelection");
    $('#selectionItemOne').removeClass("activeSelection");
    $('#selectionItemOne').addClass("isNotActive");
  });
  $('#selectionItemOne').on('click', () => {
    $('#selectionItemTwo').removeClass("activeSelection");
    $('#selectionItemTwo').addClass("isNotActive");
    $('#selectionItemOne').removeClass("isNotActive");
    $('#selectionItemOne').addClass("activeSelection");
  });
});
