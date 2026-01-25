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

const flattenArray = (arr) => {
    return arr.reduce((acc, curr) => {
        Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr)
    }, [])
}

const formLargestNumber = (arr) => {
    const result = arr.map(String)
    .sort((a,b)=>(b+a)-(a+b))
    .join("")

    return result[0]==="0" ? "0" : result   ;
}

export { RemoveDuplicates, generateAtoZ, flattenArray, formLargestNumber };