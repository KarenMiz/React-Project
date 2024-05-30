import React, { memo } from 'react'

export default memo(function ChildComponent({ data, PrintSomething }) {
  PrintSomething();
  console.log("child");
  return (
    <div>Helllllo! {data.firstName}</div>
  )
});
