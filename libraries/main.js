'use strict';

console.log('This would be the main JS file.');
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})
