function calculateGrade() {
	document.getElementById("grade").innerHTML = "";
	var received = document.getElementById("received").value;
	var possible = document.getElementById("possible").value;

	var grade = received / possible * 100;
	var letterGrade;

	if (grade > 90) {
		letterGrade = "A";
	} else if (grade > 80) {
		letterGrade = "B";
	} else if (grade > 70) {
		letterGrade = "C";
	} else if (grade > 60) {
		letterGrade = "D";
	} else {
		letterGrade = "F"
	}
	document.getElementById("grade").innerHTML += "You received a " + grade + "%, an " + letterGrade;
}