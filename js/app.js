
// $('#element').fadeIn(200,function(){
//       $('#element').html('Done Fading In');
// });

// .rotated {
//     -webkit-transform: rotate(45deg);  /* Chrome, Safari 3.1+ */
//     -moz-transform: rotate(45deg);  /* Firefox 3.5-15 */
//     -ms-transform: rotate(45deg);  /* IE 9 */
//     -o-transform: rotate(45deg);  /* Opera 10.50-12.00 */
//     transform: rotate(45deg);  /* Firefox 16+, IE 10+, Opera 12.10+ */
// }


// var rotation = 0;
// $('.rotate').click(function() {
//     rotation += 5;
//     $(this).css({'-webkit-transform' : 'rotate('+ rotation +'deg)',
//                  '-moz-transform' : 'rotate('+ rotation +'deg)',
//                  '-ms-transform' : 'rotate('+ rotation +'deg)',
//                  'transform' : 'rotate('+ rotation +'deg)'});
// });

var dothelastpart = function(){
	$('#car').removeClass('rotate90');
	$('#car').removeClass('flip180');
	$('#car').animate({ "left": "+=230px" }, "slow")
}

var donextnextpart = function(){
	$('#car').addClass('rotate90');
	$('#car').addClass('flip180');
	$('#car').animate({ "top": "+=110px" }, "slow"  , dothelastpart)
}

var donextpart = function(){ 
	$('#car').removeClass('rotate90');
	$('#car').addClass('flip180');
	$('#car').animate({ "left": "-=520px" }, "slow" , donextnextpart)
}

var rotateRight = function(){ 
	$('#car').addClass('rotate90'); 
	$('#car').animate({ "top": "+=350px" }, "slow" , donextpart ); 

}

// var rotateLeft = function(){ $('#car').addClass('rotate90');}


$('#car').animate({ "left": "+=560px" }, "slow" , rotateRight)

