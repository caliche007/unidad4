//<!--window.onload = init

//function = init() 

 //new Splide( "#splide" ).mount(), {
     
   // type: "loop",
    //perPage: 3,
    //rewind: true,
    //height: "50vh",
    //autoplay: true,
//}.mount();//

//esta parte inicial no funciono ,es del repositorio del splide

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});
//encontre un carrusel que si me funciono , lo saque de este repositorio
//https://github.com/falconmasters/glider-js