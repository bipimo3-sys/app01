let a = 1;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++, ++a);
console.log(b--, --b);

function check(num) {
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => {
    console.log(`${num} * ${i} = ${num * i}`);
  });
}

check(10);
