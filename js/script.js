document.querySelector('.menu-mobile').addEventListener('click', function(){
	document.querySelector('body').classList.add('menu-open');
});

document.querySelector('.menu-overlay').addEventListener('click', function(){
	document.querySelector('body').classList.remove('menu-open');
});

document.querySelector('.menu .buttonclose').addEventListener('click', function(){
	document.querySelector('body').classList.remove('menu-open');
});	
