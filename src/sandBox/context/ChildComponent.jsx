import React from 'react'
import GrandChildComponent from './GrandChildComponent'
import { useData } from './DataProvider'

export default function ChildComponent() {
  const context = useData();
  return (
    <div>
      ChildComponent data1 = {context.data1}
      <GrandChildComponent />
    </div>
  )
}
