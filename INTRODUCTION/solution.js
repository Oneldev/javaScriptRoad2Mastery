
function getAverage(score) {
    let sum;
    let total = score.length;
    let average;
    for (let i = 0; i < total; i++) {
        sum += score[i];
    }
    average = sum / total;
    return average;
}

function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
  }

function message2student(score, studentScore) {
    let average = "Class average: ";
    let grade = " Your grade: ";
    let message = getAverage(score);
    let message2 = getGrade(studentScore);
  
    if (score > 60) {
        return average + message + "." + grade + message2 + "." + " You passed the course."
    }
    else {
       return average + message + "." + grade + message2 + "." + " You failed the course."
    }
    
  }
  console.log(message2student([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));