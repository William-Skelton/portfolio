var toggle = true;
function expandSocialIcons(){
	var element = document.getElementById('socialMediaLogos');
	var logoArray = document.getElementsByClassName('smallSocial');
	if (toggle) {
		toggle = false;
		element.style.backgroundColor = "rgba(5, 171, 101, .6)";
		element.style.opacity = 1;
		logoArray[0].style.height = '75px';
		logoArray[0].style.width = '75px';
		logoArray[1].style.height = '75px';
		logoArray[1].style.width = '75px';
		logoArray[2].style.height = '75px';
		logoArray[2].style.width = '75px';
		logoArray[3].style.height = '75px';
		logoArray[3].style.width = '75px';

	}
	else {
		toggle = true;
		element.style.backgroundColor = "rgba(43, 111, 232, 0.0)";
		element.style.opacity = 0;
		logoArray[0].style.height = '0px';
		logoArray[0].style.width = '0px';
		logoArray[1].style.height = '0px';
		logoArray[1].style.width = '0px';
		logoArray[2].style.height = '0px';
		logoArray[2].style.width = '0px';
		logoArray[3].style.height = '0px';
		logoArray[3].style.width = '0px';
	}
}
var generalIcon = document.getElementById('generalIcon');
generalIcon.addEventListener('click', expandSocialIcons);
