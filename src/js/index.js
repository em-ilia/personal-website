const pgp_p = document.getElementById('pgp_p')
const pgp_a = document.getElementById('pgp_a')
pgp_p.onmouseover = function() {pgp_a.style.display = "inline";}
pgp_p.onmouseout = function() {pgp_a.style.display = "none";}

const moon = document.getElementById('moonlink');
console.log(moon);
moon.onmouseover = function() {moon.innerHTML = "&#127771"}
moon.onmouseout = function() {moon.innerHTML = "&#127772"}
