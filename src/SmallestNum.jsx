export default function SmallestNum(arr) {
  if (!Array.isArray(arr)) return false;
    if (arr.length === 0) return null;
  if (!arr.every(x => typeof x === 'number' && Number.isFinite(x))) return false;
  return arr.reduce((acc, curr) => (acc < curr ? acc : curr));
}
//   console.log(SmallestNum([34, 15, 88, 2, -4, []]));

SmallestNum([34, 15, 88, 2]);
// findSmallest([34, -345, 88, 2]);
// findSmallest([]);
// findSmallest([34, '15', 88, 2]);
// findSmallest('hello');
// findSmallest([1, 2, 3, NaN]);
// findSmallest([1, 2, 3, Infinity]);
// findSmallest([1, 2, 3, -Infinity]);
// findSmallest([1, 2, 3, null]);
// findSmallest([1, 2, 3, undefined]);
// findSmallest([1, 2, 3, {}]);
// findSmallest([1, 2, 3, []]);
// findSmallest([1, 2, 3, () => {}]);
