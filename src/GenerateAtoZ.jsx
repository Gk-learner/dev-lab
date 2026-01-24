 const generateAtoZ =()=> {
  const arr = [];

  for (let i = 65; i <= 90; i++){
    const letter = String.fromCharCode(i);
    // console.log(letter)
    arr.push(letter)
  }
  return arr

}
generateAtoZ();


const RemoveDuplicates = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }   
    }
    return result;
}

export { RemoveDuplicates, generateAtoZ };
