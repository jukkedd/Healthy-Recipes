// Add smooth scrolling to links in the navigation menu
var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
	link.addEventListener('click', function(e) {
		e.preventDefault();
		var target = document.querySelector(link.getAttribute('href'));
		target.scrollIntoView({ behavior: 'smooth' });
	});
});

// Toggle the mobile navigation menu
var mobileMenu = document.querySelector('.mobile-menu');
var navList = document.querySelector('nav ul');

mobileMenu.addEventListener('click', function() {
	navList.classList.toggle('show');
});
