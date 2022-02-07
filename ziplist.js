const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];
const zipList = (letters, nums) => {
  const array = [];
  for (let i = 0; i < letters.length && i < nums.length; i++) {
    array.push(letters[i]);
    array.push(nums[i]);
  }
  return array;
};
const zipListTheSimpleWay = (letters, nums) => _.flatten(_.zip(letters, nums));

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
