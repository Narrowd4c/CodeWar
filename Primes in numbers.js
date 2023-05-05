//https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript


function primeFactors(n) {
  let arr = {};
  let x = 2;
  let str = "";
  while (n > 1) {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) {
        x++;
        break;
      }
    }
    while (n % x == 0) {
      n = n / x;
      if (arr[x] == null) {
        arr[x] = 1;
      } else {
        arr[x]++;
      }
    }
    x++;
  }
  for (const [key, value] of Object.entries(arr)) {
    if (value == 1) {
      str += `(${key})`;
    } else {
      str += `(${key}**${value})`;
    }
  }
  return str;
}

primeFactors(229221220);
