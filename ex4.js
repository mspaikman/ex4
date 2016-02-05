//javascript
//call jQuery ready function 
//make sure html and css are loaded
$(document).ready (function(){
	console.log ('ready');

//show sketchbook
    $('#img1').click(function() {
      console.log('click');
     $('#sketchbookoverlay').css('visibility', 'visible');
      return false;
  });

  // click event for close button
  $('nav#close').click(function(){
    $('#sketchbookoverlay').css('visibility', 'hidden');
    
  });

//show bottle
    $('#img2').click(function() {
      console.log('click');
     $('#bottleoverlay').css('visibility', 'visible');
      return false;
  });

  // add a click event for the close button
  $('nav#close').click(function(){
    $('#bottleoverlay').css('visibility', 'hidden');
    
  });

//show orange
    $('#img3').click(function() {
      console.log('click');
     $('#orangeoverlay').css('visibility', 'visible');
      return false;
  });

  // add a click event for the close button
  $('nav#close').click(function(){
    $('#orangeoverlay').css('visibility', 'hidden');
    
  });
	
//show phone
    $('#img4').click(function() {
      console.log('click');
     $('#phoneoverlay').css('visibility', 'visible');
      return false;
  });

  // add a click event for the close button
  $('nav#close').click(function(){
    $('#phoneoverlay').css('visibility', 'hidden');
    
  });
	
//show headphones
    $('#img5').click(function() {
      console.log('click');
     $('#headphonesoverlay').css('visibility', 'visible');
      return false;
  });

  // add a click event for the close button
  $('nav#close').click(function(){
    $('#headphonesoverlay').css('visibility', 'hidden');
    
  });
	
    // animate sketchbook click

 $('#img1').click(function() {
    console.log('click');
  $('#sketchbookoverlay').animate({
      height: '700px',
      left: '0',
    });
    return false;
  });
  $('nav#close').click(function() {
    console.log('click');
    $('#sketchbookoverlay').css('height', '0px');
    return false;
  });

//animate bottle 
 $('#img2').click(function() {
    console.log('click');
  $('#bottleoverlay').animate({
      height: '700px',
      left: '0',
    });
    return false;
  });
  $('nav#close').click(function() {
    console.log('click');
    $('#bottleoverlay').css('height', '0px');
    return false;
  });

//animate orange
 $('#img3').click(function() {
    console.log('click');
  $('#orangeoverlay').animate({
      height: '700px',
      left: '0',
    });
    return false;
  });
  $('nav#close').click(function() {
    console.log('click');
    $('#orangeoverlay').css('height', '0px');
    return false;
  });

//animate phone
  $('#img4').click(function() {
    console.log('click');
  $('#phoneoverlay').animate({
      height: '700px',
      left: '0',
    });
    return false;
  });
  $('nav#close').click(function() {
    console.log('click');
    $('#phoneoverlay').css('height', '0px');
    return false;
  });
	
//animate headphones
 $('#img5').click(function() {
    console.log('click');
  $('#headphonesoverlay').animate({
      height: '700px',
      left: '0',
    });
    return false;
  });
  $('nav#close').click(function() {
    console.log('click');
    $('#headphonesoverlay').css('height', '0px');
    return false;
  });

});



