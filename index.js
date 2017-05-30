$(document).ready(function(){
    $("#img-one").click(function(){
    	
    	var randy = Math.floor( Math.random()*10);
    	
    	$(".figcaption").eq(randy).css('display','block');
    	$("#img-one").css('display','none');
        $('#img-two').css('display','block')


    })
     $("#img-two").click(function(){
    	
    	
    	
    	$('.figcaption').css('display','none');
    	$('#img-one').css('display','block');
        $('#img-two').css('display','none')


    })
    
})