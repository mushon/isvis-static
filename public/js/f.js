var $ = jQuery;

$(document).ready(() => {

    console.log('up!');
$.ajax({
    url: '/events',
    method: 'GET',
    success: (data) => {
      console.log('Got data!');
      console.log(data);
    }
  });
});