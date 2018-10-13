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

//Hide navbar when modal open
$('.portfolio-modal').on('show.bs.modal', function(e) {
	$('.navbar').addClass('d-none');
})

$('.portfolio-modal').on('hidden.bs.modal', function(e) {
	$('.navbar').removeClass('d-none');
})