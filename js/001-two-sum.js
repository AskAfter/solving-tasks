// BrutForce

const nums = [2, 7, 11, 15];
const target = 17;

// function foo(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const numToFind = target - nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === numToFind) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// console.log(foo(nums, target));

// Good solution

function foo(nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];
    if (numsMap[numToFind] !== undefined) {
      return [numsMap[numToFind], i];
    } else {
      numsMap[nums[i]] = i;
    }
  }
  return null;
}

console.log(foo(nums, target));
