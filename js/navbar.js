const navbar = document.getElementById('navbar')
console.log(navbar)
let lastScrollY = 0

const controlNavbar = () => {
	if (typeof window !== 'undefined' && window.scrollY > 150) {
		if (window.scrollY > lastScrollY) {
			// if scroll down hide the navbar
			navbar.classList.add('hide')
		} else {
			// if scroll up show the navbar
			navbar.classList.remove('hide')
		}

		// remember current page location to use in the next move
		lastScrollY = window.scrollY
	}
}

if (typeof window !== 'undefined') window.onscroll = controlNavbar
