// JavaScript Document

 $(document).ready(function(){
	 
// add-remove hover class	    
$(".note_box").hover(function(){  
        $(this).addClass("hover");
     },function(){  
        $(this).removeClass("hover");
     });  
// set auto-height on box	    
	  $.fn.setAllToMaxHeight = function(){
return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
}
$('#row_1').children('.note_box').setAllToMaxHeight();
$('#row_2').children('.note_box').setAllToMaxHeight();
$('#row_3').children('.note_box').setAllToMaxHeight();
$('#row_4').children('.note_box').setAllToMaxHeight();

// animate social icons	    
$('.social_list a span').hide();
$(".social_list a").hover(function(){  
        $(this).children('span').animate({
    width: 'toggle'
  }, 200);
     },function(){  
        $(this).children('span').hide();
     });
// add active class on input
	$("#formwrapper .inputfield").focus(function() {
		$(this).addClass("active");
	});
	$("#formwrapper .inputfield").blur(function() {
		$(this).removeClass("active");
	}); 
// placeholder for older browser
$('input, textarea').placeholder();

// mail defuscate
var spt = $('span.mailme');
var at = / at /;
var dot = / dot /g;
var addr = $(spt).text().replace(at,"@").replace(dot,".");
$(spt).after('<a href="mailto:'+addr+'" title="Send an email">'+ addr +'</a>')
.hover(function(){window.status="Send a letter!";}, function(){window.status="";});
$(spt).remove();

// Ajax form submit
$(".form").submit(function(){

var str = $(this).serialize();
   $.ajax({
   type: "POST",
   url: "contact.php",
   data: str,
   success: function(msg){
$("#note").ajaxComplete(function(event, request, settings){
if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
{
result = '<div id="message"><h2>Your message was successfully sent. Thanks a million.</h2></div>';
$("#formwrapper").hide();
}
else
{
result = msg;
}
$(this).html(result);
});
}
 });
return false;
});

//	 image rollover		
	//ie var
	var ie 				= false;
				if ($.browser.msie) {
					ie = true;
				}

	$('.portfolio_items li a, .pic_holder a').mouseenter(function() {
   		if(ie){
   $(this).find('span').stop().show().css({ opacity: 0.6 });       
					}
					else{
   $(this).find('span').stop().fadeTo(200, 0.6);
						} 
 }); 
 
$('.portfolio_items li a, .pic_holder a').mouseleave(function() {
  		if(ie){
   $(this).find('span').stop().hide();       
					}
					else{
   $(this).find('span').stop().fadeOut(200);
						}      
 });

//	lightbox init		

$('.portfolio_items a, .pic_holder a').lightBox();
			
	 
 }); // end document ready