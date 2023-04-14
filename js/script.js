let element = document.getElementById("mySidenav");
let main = document.getElementById("main");

function openNav() {
	main.classList.add("main");
	element.style.width = "100%";
	element.classList.remove("sidenav");
	element.classList.add("sidenavFull");
	
}

function closeNav() {
   	main.classList.remove("main");
	element.style.width = "0";
	element.classList.remove("sidenavFull");
	element.classList.add("sidenav");
}