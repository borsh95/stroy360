(function () {
	const breakPoints = {

	}

	document.addEventListener('click', function (e) {
		const $target = e.target;

		// Кнопка открытия категорий в шапке
		if ($target.closest('.btn-mainmenu-toggle')) {
			document.body.classList.toggle('custom-catalog-menu-open');
		}

		// закрыте категорий при клике вне категории
		if (document.body.classList.contains('custom-catalog-menu-open') && !$target.closest('.mein-catalog-wrap')) {
			document.body.classList.remove('custom-catalog-menu-open');
		}

		//header hamburger
		if ($target.closest('.header__hamburger')) {
			$target.closest('.header__hamburger').classList.toggle('active');
			document.body.classList.toggle('burger-open');
		}

		//header hamburger
		if ($target.closest('.menu__link-arr')) {
			e.preventDefault();

			$target.closest('.menu__link-arr').closest('.menu__item').classList.toggle('menu__item--open')
		}

		if ($target.closest('.js-search-toggle')) {
			const $search = document.querySelector('.js-search-input');
			if (!$search) return;

			document.body.classList.toggle('search-mobile-open');
			$search.focus();
		}

		if (document.body.classList.contains('search-mobile-open') && !$target.closest("[class*=js-search]")) {
			document.body.classList.remove('search-mobile-open');
		}
	})


	if (document.querySelector('.flash-message')) {
		const flashMsg = document.querySelector('.flash-message');
		const openedClass = 'flash-message--opened';

		if (!localStorage.lastView) {
			showMsg();
		} else if ((Date.now() - +localStorage.lastView) / (1 * 1000 * 3600) >= 1) {
			showMsg();
		}

		function showMsg() {
			localStorage.setItem('lastView', Date.now());

			flashMsg.classList.add(openedClass);
		}

		function closeMsg() {
			flashMsg.classList.remove(openedClass);
		}

		// flash message
		flashMsg.addEventListener('click', function (e) {
			if (e.target.closest('.flash-message__close')) {
				closeMsg();
			}
		})
	}

	if ($('.side-slider').length) {
		$('.side-slider').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			infinite: true,
			speed: 600,
			slidesToShow: 1,
			// adaptiveHeight: true,
			fade: true,
			cssEase: 'linear'
		});
	}
}());