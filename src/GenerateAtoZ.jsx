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

function generateFibonacci(n) {
   if (n <= 0 || !Number.isInteger(n)) return [];
    if (n === 1) return [0]
    const arr = [0, 1]
    for (let i = 2; i < n; i++) {
      
        arr.push(arr[i-1]+arr[i-2])
    }
    console.log(arr)
}
generateFibonacci(5)

//creating a simple counter that returns a count object with methiods to increment decrement and reset with
//  chaining and taking care of shadowing concept

function makeCounter(initialValue = 0) {
    let count = initialValue;
    return {
         increment: function() {
            count++;
            return count
        },
    decrement: function () {
        count--;
        return count;
        },
        reset: function () {
            count = initialValue;
            return count;
    }
}
}
const counter = makeCounter(9)
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())

export { RemoveDuplicates, generateAtoZ, flattenArray, formLargestNumber };