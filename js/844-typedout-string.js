let a = 'ab#z';
let b = 'ad#z';
function comparizon(a, b) {
  let p1 = a.length - 1;
  let p2 = b.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (a[p1] === '#' || b[p2] === '#') {
      if (a[p1] === '#') {
        let countNum = 2;
        while (countNum > 0) {
          p1--;
          countNum--;
          if (a[p1] === '#') {
            countNum += 2;
          }
        }
      }
      if (b[p2] === '#') {
        let countNum = 2;
        while (countNum > 0) {
          p2--;
          countNum--;
          if (b[p2] === '#') {
            countNum += 2;
          }
        }
      }
    } else if (a[p1] !== b[p2]) {
      return false;
    } else if (a[p1] === b[p2]) {
      p1--;
      p2--;
    }
  }
  return true;
}

console.log(comparizon(a, b));
