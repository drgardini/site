var heroCarousel;

jQuery(document).ready(function() {
	var overImages = [
		'clareamento.jpg',
		'clareamento_diastema.jpg',
		'facetas.jpg',
		'faceta.jpg',
		'placa_bruxismo.jpg',
		'implante_coroa.jpg',
		'implante_protese.jpg',
		'implante_protese2.jpg',
		'fabricio.jpg'
	];
	var imageCache=[];
	for (var i = 0; i < overImages.length; i++) {
		var a = new Image();
		imageCache.push(a);
		a.src = 'recursos/' + overImages[i];
	};


    jQuery('#heroCarousel').jcarousel({
        scroll : 1,
        auto : 4,
        wrap : 'circular',
        setupCallback : function(carousel){
        	$('.carouselNav').each(function(idx,item){
        		$(item).click(function(e){
        			var index = $(this).attr('id').split('-')[1];
        			var carousel = $('#heroCarousel').data('jcarousel');
        			carousel.autoStopped = true;
        			carousel.scroll(parseInt(index));
        			return false;
        		});
        	});	
        },
        itemVisibleInCallback : {onBeforeAnimation:function(carousel,el,idx){
                	idx = idx%5==0?5:idx%5;
                	$('.carouselNav').removeClass('on');
                	$('#carouselNav-'+idx).addClass('on');
                }}
    });
    jQuery('.year').html(new Date().getFullYear());

	$("#nav a, #bottomNav a").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});
});