// Navbar collapse
function navbarCollapse() {
	var navbar = document.querySelector('.navbar');
	var header = document.querySelector('.header');
	
	var obj = header.getBoundingClientRect();
	  
  if (obj.top < -100) {
  	navbar.classList.add('navbar-shrink');
  } else {
  	navbar.classList.remove('navbar-shrink');
  }
}

navbarCollapse();
window.onscroll = navbarCollapse;

$(document).ready(function(){
  $("#mainNav").on("click","a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1100);
  });
});

//Navbar scrollspy
$('body').scrollspy({
  target: '#mainNav',
  offset: 57
});

//Hide navbar when modal open
$('.portfolio-modal').on('show.bs.modal', function(e) {
	$('.navbar').addClass('d-none');
})

$('.portfolio-modal').on('hidden.bs.modal', function(e) {
	$('.navbar').removeClass('d-none');
})