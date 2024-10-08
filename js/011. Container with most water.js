// Good solution

const nums = [1, 18, 6, 15, 14, 12, 6, 8, 14];
function foo(nums) {
  let p1 = 0,
    p2 = nums.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(nums[p1], nums[p2]);
    const width = p2 - p1;
    const area = width * height;
    maxArea = Math.max(maxArea, area);
    if (nums[p1] <= nums[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}

console.log(foo(nums));
