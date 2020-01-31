 $(function(){
 	$(window).scroll(function(){

 		if($('body').scrollTop()>300) {
 			$('.logo').addClass('chucam');
 			$('.nutlen').addClass('hienthi')

 		}
 		else if($('body').scrollTop()<=100) {
			$('.logo').removeClass('chucam');
			$('.nutlen').removeClass('hienthi')
 		}
 	})


 	$('.nutlen').click(function(){
 		$('body').animate({'scrollTop':0});
 		 
 	})
})  
 