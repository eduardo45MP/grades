// This function converts the number format of a grade to letter format
// It takes two arguments: the number grade field and the letter field
function calculateLetterGrade(gradeId, letterGradeId) {
    let grade = parseInt(document.getElementById(gradeId).value); //This variable gets the grade in string and turns it in integer
    let letterGrade = ''; // This variable will receive the corresponding letter

    // This conditional will calculate the equivalent letter grade
    if (grade >= 90) {
      letterGrade = 'A';
    } else if (grade >= 80) {
      letterGrade = 'B';
    } else if (grade >= 70) {
      letterGrade = 'C';
    } else if (grade >= 60) {
      letterGrade = 'D';
    } else {
      letterGrade = 'F';
    }

    document.getElementById(letterGradeId).value = letterGrade; // Inserts the letter into the field
  }
// This function calculates the average grade and converts it to a letter grade
// It then displays a message with the student's name and the letter grade
function calculate(){
    const name = document.getElementById("name").value; // Receives the student's name
    //Constants recieve grades
    const g1 = parseInt(document.getElementById("g1").value);
    const g2 = parseInt(document.getElementById("g2").value);
    const g3 = parseInt(document.getElementById("g3").value);
    const g4 = parseInt(document.getElementById("g4").value);
    let avaragen = (g1 + g2 + g3 + g4)/4;//Calculates the avarage grade
    
    // Calculates the corresponding letter grade
    if (avaragen >= 90) {
        letterGrade = 'A';
      } else if (avaragen >= 80) {
        letterGrade = 'B';
      } else if (avaragen >= 70) {
        letterGrade = 'C';
      } else if (avaragen >= 60) {
        letterGrade = 'D';
      } else {
        letterGrade = 'F';
      }
    let avarage = document.getElementById("avarage");//conects to the HTML
    avarage.innerHTML = "The grade's avarage of " + name + " is: " + letterGrade; //Create the message
}