function gradingStudents(grades) {
    let roundedGrades = [];
    grades.forEach(grade => {
        if (grade < 38) {
            roundedGrades.push(grade);
        } else {
            let multiplier = Math.floor(grade / 5);
            let roundedGrade = (multiplier + 1) * 5;
            if (roundedGrade - grade < 3) {
                roundedGrades.push(roundedGrade);
            } else {
                roundedGrades.push(grade);
            }
        }
    });
    return roundedGrades;
}

const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));