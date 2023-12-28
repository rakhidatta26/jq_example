// alert msg
$(document).ready(function(){
	$('#alert').on('click', function(){
		alert("welcome");
	});
// show text
	$('#show').on('click', function(){
		$('#s_h3').show();
	});
	$('#hide').on('click', function(){
		$('#s_h3').hide();
	});
// toggle
	$('#togg').on('click', function(){
		$('#t_h3').toggle(300);
	});
// slide up	
	$( "p" ).on( "click", function() {
  $( this ).slideUp();
	});
	// class selector
	$( ".h5" ).css( "border", "3px solid blue" );
	// fade in
  $("#c-fade").on("click",function(){
    $("#red").fadeIn();
    $("#green").fadeIn("slow");
    $("#blue").fadeIn(3000);
	});
	// fade out
  $("#c-bt").on('click',function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(3000);
  });
  // fade toggle
  $("#tog_b").on('click', function(){
    $("#togl_h4").fadeToggle();
    $("#togl_h5").fadeToggle("slow");
    $("#togl_h6").fadeToggle(3000);
  });
	// fade to
  $("#bttn").on('click',function(){
    $("#d1").fadeTo("slow",0.3);
    $("#d2").fadeTo("slow", 0.2);
    $("#d3").fadeTo("slow", 0.2);
  });
  // slide down
   $("#slide_d").on('click',function(){
    $("#slide_t").slideDown("slow");
  });
   // slide up
   $("#f_slide").on('click',function(){
    $("#p_slide").slideUp("slow");
  });
   // slide toggle
   $("#f_sl").on('click',function(){
   $("#p_sl").slideToggle("slow");
  });
   // animate
   $("#buttn").on('click',function(){
   $(".box1").animate({
      width: "200px",
      height: "250px",
      marginLeft: "200px",
      borderWidth: "10px",
      opacity: "0.5",
    });
   });
   // animate Using Relative Values
   $("#b_butn").on('click',function(){
    $(".box2").animate({
      left: '250px',
      height: '+=150px',
      width: '+=150px'
    });
   });
   // animate Using Pre-defined Values
   $("#b_pd").on('click',function(){
    $(".box3").animate({
      height: 'toggle'
    });
  });

   $("#q_anim").click(function(){
    var div = $(".box4");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
  
})