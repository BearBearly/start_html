var $ = require('jquery');
var _ = require('lodash');

$('.header').on('click', function(){
    console.log('header click');
})

var menu = document.querySelector('.header__menu');
var menuOpener = document.querySelector('.main-nav__opener');
menuOpener.addEventListener('click', function() {
   menu.classList.toggle('is-active');
   menuOpener.classList.toggle('is-active');
});