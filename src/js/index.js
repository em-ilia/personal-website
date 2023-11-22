// If CSS determines that the device is mobile, set flag
const is_mobile = getComputedStyle(document.body).getPropertyValue('--is-mobile');

const pgp_p = document.getElementById('pgp_p')
const pgp_a = document.getElementById('pgp_a')

if (is_mobile === '1') {
	pgp_a.style.display = "block";
} else {
		pgp_p.onmouseover = function() {pgp_a.style.display = "inline";}
		pgp_p.onmouseout = function() {pgp_a.style.display = "none";}
	}

const moon = document.getElementById('moonlink');
moon.onmouseover = function() {moon.innerHTML = "&#127771"}
moon.onmouseout = function() {moon.innerHTML = "&#127772"}

const camera = document.getElementById('camera');
camera.onmouseover = function() {camera.innerHTML = "&#128248"}
camera.onmouseout = function() {camera.innerHTML = "&#128247"}
