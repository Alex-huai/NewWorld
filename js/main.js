$(function(){
	$(".header-r ul li").each(function(){
		$(this).click(function(){
			$(this).not("#login").addClass('home').siblings('li').removeClass('home');
	
		})
	});




	$(".banner-btn-1").click(function(){
		$(".about-us-detail-1").show();
		$(".about-us-detail-2").hide();
		$(".about-us-detail-3").hide();
		$(this).addClass("banner-btn-select").siblings('li').removeClass('banner-btn-select');
	})
	$(".banner-btn-2").click(function(){
		$(".about-us-detail-2").show();
		$(".about-us-detail-1").hide();
		$(".about-us-detail-3").hide();
		$(this).addClass("banner-btn-select").siblings('li').removeClass('banner-btn-select');
	})
	$(".banner-btn-3").click(function(){
		$(".about-us-detail-3").show();
		$(".about-us-detail-2").hide();
		$(".about-us-detail-1").hide();
		$(this).addClass("banner-btn-select").siblings('li').removeClass('banner-btn-select');
	})
});