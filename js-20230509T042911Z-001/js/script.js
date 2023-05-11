$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu, .header__top-info').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu').toggleClass('open');
    });
    $('.menu__link').click(function (event) {
        $('.header__burger, .menu, .header__top-info').removeClass('active');
        $('body').removeClass('lock');
    });



});

const swiper = new Swiper('.home__swiper', {
    slidesPerView: 1,
    loop: true,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
});


const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 100;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// function showLogin() {
// 	var login = document.getElementById("login");
// 	if (login.style.display === "none") {
// 	  login.style.display = "block";
// 	} else {
// 	  login.style.display = "none";
// 	}
//   }
  


const heartIcons = document.querySelectorAll('.heart');
const notificationBadge = document.querySelector('.notification-badge');

let favorites = {};
let favoritesCount = 0;

// Load danh sách yêu thích từ localStorage (nếu có)
if (localStorage.getItem('favorites')) {
  favorites = JSON.parse(localStorage.getItem('favorites'));
  favoritesCount = Object.keys(favorites).length;
  notificationBadge.textContent = favoritesCount;
  notificationBadge.style.display = 'inline-block';
}

heartIcons.forEach(heartIcon => {
  const productCode = heartIcon.parentNode.innerText.trim();

  // Kiểm tra xem sản phẩm đã được yêu thích chưa
  if (favorites[productCode]) {
    heartIcon.style.color = 'red';
  }

  heartIcon.addEventListener('click', function() {
    if (!favorites[productCode]) {
      // Thêm sản phẩm vào danh sách yêu thích
      addToFavorites(productCode);

      // Cập nhật số lượng sản phẩm yêu thích trong menu
      favorites[productCode] = true;
      favoritesCount++;
      notificationBadge.textContent = favoritesCount;
      notificationBadge.style.display = 'inline-block';

      // Đổi màu icon trái tim sang đỏ
      heartIcon.style.color = 'red';
    } else {
      // Xóa sản phẩm khỏi danh sách yêu thích
      removeFromFavorites(productCode);

      // Cập nhật số lượng sản phẩm yêu thích trong menu
      delete favorites[productCode];
      favoritesCount--;
      notificationBadge.textContent = favoritesCount;
      if (favoritesCount === 0) {
        notificationBadge.style.display = 'none';
      }

      // Đổi màu icon trái tim sang đen
      heartIcon.style.color = 'black';
    }

    // Lưu danh sách yêu thích vào localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  });

  
});

function addToFavorites(productCode) {
  // Code để thêm sản phẩm vào danh sách yêu thích
  console.log(`Added ${productCode} to favorites`);
}

function removeFromFavorites(productCode) {
  // Code để xóa sản phẩm khỏi danh sách yêu thích
  console.log(`Removed ${productCode} from favorites`);
}


