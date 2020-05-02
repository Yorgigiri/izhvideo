import './../scss/main.scss';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Swiper
import Swiper from 'swiper';


AOS.init({
	disable: function() {
		const maxWidth = 768;

		return window.innerWidth < maxWidth;
	}
});

const toggleMobileMenu = () =>
	document.querySelector('.main-menu').classList.toggle('main-menu--active');

document.addEventListener('click', function(e) {
	e.target.classList.contains('m--toggle-mobile-menu') && toggleMobileMenu();
});

let anchorlinks = document.querySelectorAll('.m--scrollable-anchor')

for (let item of anchorlinks) { // relitere
	item.addEventListener('click', (e)=> {
		let hashval = item.getAttribute('href')
		let target = document.querySelector(hashval)
		target.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
		history.pushState(null, null, hashval)
		e.preventDefault()
	})
}


if(window.innerWidth > 1200) {
	const lists = document.querySelectorAll('.m--projects-swipper');

	lists.forEach((list) => {
		if(list.getElementsByClassName('project-card').length <= 4) {
			list.classList.add('m--hide-swipper-arrows');
		}
	})
}


let projectSwiper;
const initProjectsSwiper = () => {
	projectSwiper = new Swiper ('.m--projects-swipper', {
		// Optional parameters
		slidesPerView: 4,
		loop: false,

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		// And if we need scrollbar
		scrollbar: 'none',

		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			680: {
				slidesPerView: 2,
			},
			940: {
				slidesPerView: 3,
			},
			1201: {
				slidesPerView: 4,
			},
		}
	});
};

initProjectsSwiper();

if(window.innerWidth <= 768) {
	let defaultSwiper;

	const initDefaultSwiper = () => {
		defaultSwiper = new Swiper ('.m--default-swipper', {
			// Optional parameters
			slidesPerView: 2,
			loop: false,

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// And if we need scrollbar
			scrollbar: 'none',

			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				680: {
					slidesPerView: 2,
				}
			}
		});
	};

	initDefaultSwiper();
}

(function ($) {

	function setcookie(a, b, c) {
		// назначение куки
		if (c) {
			var d = new Date();
			d.setDate(d.getDate() + c);
		}
		if (a && b) document.cookie = a + '=' + b + ";expires=" + d.toUTCString();else return false;
	}

	function getcookie(a) {
		// получение куки
		var b = new RegExp(a + '=([^;]){1,}');
		var c = b.exec(document.cookie);
		if (c) c = c[0].split('=');else return false;
		return c[1] ? c[1] : false;
	}

	function dont_show_popup() {
		setcookie("popup", "active", 1);
	}

	function trigger(id) {
		// триггер для общего попапа
		var kuk = getcookie("popup");
		if (kuk != "active") {
			dont_show_popup();
			openCapturePopup(id);
		}
	}

	$(document).ready(function () {
		popupTimeout(300);
	});

	function popupTimeout(seconds) {
		const secondsTotal = seconds + '000';

		setTimeout(function () {

			trigger(popupItem);
		}, secondsTotal);
	}

	function openCapturePopup(id) {
		// функция открытия попапа захвата
		$(id).addClass('m__opened-popup');
		dont_show_popup();
	}

	$(document).on('click', '.capture-popup', function (e) {
		if (e.target != this) return;
		$(this).removeClass('m__opened-popup');
	});
	$(document).on('click', '.capture-popup__close-btn', function () {
		$(this).parents('.capture-popup').removeClass('m__opened-popup');
	});
})(jQuery);
