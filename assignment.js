// Grading System
var mark = 100;
if (mark >= 80 && mark <= 100) {
  console.log("You got A+");
} else if (mark >= 70 && mark <= 79) {
  console.log("You got A");
} else if (mark >= 60 && mark <= 69) {
  console.log("You got A-");
} else if (mark >= 50 && mark <= 59) {
  console.log("You got B");
} else if (mark >= 40 && mark <= 49) {
  console.log("You got C");
} else if (mark >= 33 && mark <= 39) {
  console.log("You got D");
} else if (mark >= 0 && mark <= 32) {
  console.log("Sorry, you failed in the exam.");
} else {
  console.log("Invalid mark");
}

// Even Number
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Odd Number
for (var i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
