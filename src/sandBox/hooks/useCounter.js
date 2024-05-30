import { useCallback, useEffect, useState } from "react";

export default function useCounter(initialValue = 0, step = 1) {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter((prev) => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCounter((prev) => prev - step);
  }, [step]);

  const resetCounter = useCallback(() => {
    setCounter(initialValue);
  }, [initialValue]);
  useEffect(() => {

    if (counter % 7 === 0 || counter.toString().includes("7")) {
      console.log("BOOM");
    }

    return () => {
      console.log("count has unmounted");
    };
  }, [counter]);


  return { counter, increment, decrement, resetCounter };
}
