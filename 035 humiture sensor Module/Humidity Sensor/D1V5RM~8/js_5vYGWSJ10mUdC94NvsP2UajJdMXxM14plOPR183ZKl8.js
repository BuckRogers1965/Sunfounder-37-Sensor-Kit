/**
 * common theme behaviours
 * 
 */
 
jQuery(document).ready(function($){
	$("*").removeClass("marinelli-hide-no-js"); // remove the hide class (see common.css)
});;
/**
 * Top region js
 * bartext and bartext2 come from theme settings through template.php
 */
jQuery(document).ready(function($) {

  	// Hide region (don't hide in the demo block page)
	if(!Drupal.settings.marinelli.blockdemo){
		$('#topBar').hide();
	}
	
	// set the right text in the blcok demo page
	if(Drupal.settings.marinelli.blockdemo){
		$('#topBarLink a').text("↑ " + Drupal.settings.marinelli.bartext2 + "");
	}
	
	// Make the spy effect
	$('#topBarLink a').live('mouseover mouseout', function(event) {
    if (event.type == 'mouseover' && $(this).text() == "↓ " + Drupal.settings.marinelli.bartext + "") {
      $('#topBarLink').animate({
        'padding-top':'5px'
      });
    }
    else if (event.type == 'mouseout' && $(this).text() == "↓ " + Drupal.settings.marinelli.bartext + "") {
    $('#topBarLink').animate({
      'padding-top':'0px'
    });
    }
	});
  
	// Click logics
	$('#topBarLink a').click(function () {
    if ($(this).text()=="↓ " + Drupal.settings.marinelli.bartext + "") {
      $(this).text("↑ " + Drupal.settings.marinelli.bartext2 + "");
      $(this).attr('title','Close this region');
    }
    else if ($(this).text()=="↑ " + Drupal.settings.marinelli.bartext2 + "") {
      $(this).text("↓ " + Drupal.settings.marinelli.bartext + "");
      $(this).attr('title','Open this region');
    }
    $('#topBar').slideToggle("slow");
    return false;
  });

	// Link positioning
	var linkWidth = $('#topBarLink a').width();
	var windowWidth = $(window).width();

  	// Set start margin
	$('#topBarLink a').css('margin-left', ((windowWidth / 2) - (linkWidth / 2) -10) + 'px');

	$(window).bind('resize', function(event) {
		$('#topBarLink a').css('margin-left', (($(window).width() / 2) - (linkWidth / 2) - 10) + 'px');
	});

});;
