import { useState, useEffect } from 'react';
export const Test1 =  ({a}) => {
    const [marks, setMarks] = useState('');
          // setMarks(a);

    useEffect(() => {
      setMarks(a);
    },[a])

  return (
    <div>test1 marks is {marks}</div>
  )
}
