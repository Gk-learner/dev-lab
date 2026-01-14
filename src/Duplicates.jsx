export default function removeDuplicates(arr) {
  // your code here

let uniqueArr= [...new Set(arr)];
return uniqueArr;
}
removeDuplicates([true, false, true]);
