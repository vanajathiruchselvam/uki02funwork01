SC.initialize({
  client_id: 'a3e059563d7fd3372b49b37f00a00bcf'

});

$(document).ready(function() {

  SC.stream('/tracks/296485126', function(sound) {
    $('#start1').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop1').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/112010796', function(sound) {
    $('#start2').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop2').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/93186509', function(sound) {
    $('#start3').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop3').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/162536224', function(sound) {
    $('#start4').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop4').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });

  SC.stream('/tracks/130751350', function(sound) {
    $('#start5').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop5').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });


  SC.stream('/tracks/287365691', function(sound) {
    $('#start6').click(function(e) {
      e.preventDefault();
      sound.start();
    });
    $('#stop6').click(function(e) {
      e.preventDefault();
      sound.stop();
    });
  });



});
