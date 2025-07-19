function suma(a,b){
    let sum = a+b;
    console.log(sum);
}

suma(3, 5); // debe retornar 8
suma(-1, 6); // debe retornar 5
suma(0, 0); // debe retornar 0

function numberToString(num) {
  let string = num.toString();
  console.log(string);
}

numberToString(123); // debe retornar "123"
numberToString(-456); // debe retornar "-456"
numberToString(0); // debe retornar "0"