// brootForce
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function func(height) {
  let currentWater = 0;
  let p1 = 0;
  let p2 = height.length - 1;
  let maxRight = 0;
  let maxLeft = 0;
  for (let p = 0; p < height.length; p++) {
    maxLeft = Math.max(maxLeft, height[p1]);
    maxRight = Math.max(maxRight, height[p2]);
    if (maxLeft > height[p1]) {
      currentWater += maxLeft - height[p1];
    }
    if (maxRight > height[p2]) {
      currentWater += maxRight - height[p2];
    }

    if (height[p1] <= height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return currentWater;
}

console.log(func(height));
