let a = 5;
let b = 10;
let c = 16;
if (a > b) {
  console.log(`a=${a}`, `b=${b}`);
}

if (a < b) {
  console.log(`a=${a}`, `b=${b}`);
}

if (a > b && a > c) {
  console.log(`a = ${a}`);
} else if (b > a && b > c) {
  console.log(`b =${b}`);
} else {
  console.log(`c= ${c}`);
}

a > b ? console.log(a) : console.log(b);

a > b ? console.log(a) : b > c ? console.log(b) : c > a ? console.log(c) : a;

const current = new Date();
console.dir(current);
console.log(current.getDate());
console.log(current.getDay());
console.log(current.getMonth() + 1);
console.log(current.getFullYear());

const day = current.getDay() + 1;
console.log("day", day);
switch (day) {
  case 1:
    console.log("Today is Sunday");
    break;
  case 2:
    console.log("Today is Monday");
    break;
  case 3:
    console.log("Today is Tuesday");
    break;
  case 4:
    console.log("Today is Wednesday");
    break;
  case 5:
    console.log("Today is Thursday");
    break;
  case 6:
    console.log("Today is Friday");
    break;
  case 7:
    console.log("Today is Saturday");
    break;

  default:
    console.log("Please enter proper day");
    break;
}



