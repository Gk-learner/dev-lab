import './App.css'
import Duplicates from './Duplicates.jsx'
import AutoSave from './AutoSave.js'
import SmallestNum from './SmallestNum.jsx'
import ChipsInput from './chips.jsx'
import { Test2 } from './test2.jsx'
import { Test3 } from './Test3.jsx'
import Accordion from './Acordion.jsx'
import EvenOrodd from './EvenOrodd.jsx'
import CapitalizeWords from './CapitalizeWords.jsx'
import RecipeFilterApp from './RecipeFilterApp.jsx'
import TabSwitcher from './TabSwitcher.jsx'
function App() {
//   const [test3Data, setTest3Data] = useState('')

// //  const fun = useCallback(() => {
// //     console.log('test3Data in App:',test3Data);
// //   },[])
// //   fun()

// function fibonacci(num) {
//   let a = 0;
//   let b=1; 
//   let c;

//   for(let i=0; i<num; i++){    //i=0;c=1,i=1 c=2,i=2 c=4;i=3 c
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return c
//   }

// let fib = fibonacci(10);
// console.log(fib)
// function palindrome(str) {
// //   let strArr = str.split('');
// // console.log(strArr)
// //   let rev = strArr.reverse();

// //or


// let rev = [...str].reverse().join('');
// console.log(rev)

// }
//  palindrome('mom');
  return (
    <>
      <div>
        {/* <Test2 test3Data={test3Data} /> */}
        {/* <ChipsInput /> */}
        {/* <AutoSave/> */}
        {/* <EvenOrodd/>  */}
        {/* <SmallestNum></SmallestNum> */}
        {/* <Accordion/> */}
        {/* <Duplicates/> */}
        {/* <CapitalizeWords/>   */}
        <RecipeFilterApp/>
        {/* <TabSwitcher/> */}
       
      </div>
    </>
  )
}

export default App
// function recurssion(num){
//   if(num <=1){
//     return num;
//   }
//   return recurssion(num-1) + recurssion(num-2);
// }
// recurssion(6)
// let res = recurssion(6);
// console.log(res);