$('#email').tooltip({
  html: true,
  placement: 'bottom',
  title: 'eric.krawczyk@gmail.com\n(click to copy)',
  template: '<div class="tooltip" role="tooltip">'
          + '  <div class="tooltip-arrow"></div>'
          + '  <div class="tooltip-inner"></div>'
          + '</div>'
});

$('[data-toggle="tooltip"]').tooltip()

var copyEmail = new Clipboard('#email');
