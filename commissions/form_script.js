function displayOption(option) {

	document.getElementById('option_1').style.display = "block";

	if (option =="2") {
	document.getElementById('option_2').style.display = "block";
	document.getElementById('option_3').style.display = "none";

	}

	else if (option =="3") {
	document.getElementById('option_2').style.display = "block";
	document.getElementById('option_3').style.display = "block";
	}

	else if (option =="1") {
	document.getElementById('option_2').style.display = "none";
	document.getElementById('option_3').style.display = "none";
	}
}