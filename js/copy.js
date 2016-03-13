$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip({
    html: true,
    placement: 'bottom',
    title: 'eric.krawczyk@gmail.com\n(click to copy)',
    template: '<div class="tooltip" role="tooltip">'
            + '  <div class="tooltip-arrow"></div> '
            + '  <div class="tooltip-inner"></div> '
            + '</div>'
  });
});

new Clipboard('#email');
