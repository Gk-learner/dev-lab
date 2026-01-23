export default function generateAtoZ() {
  const arr = [];

  for (let i = 65; i <= 90; i++){
    const letter = String.fromCharCode(i);
    // console.log(letter)
    arr.push(letter)
  }
  return arr

}
generateAtoZ();
