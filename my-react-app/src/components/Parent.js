import React from 'react'
import Child from './Child'


export default function Parent() {
   function greetParent() {
    console.log("This is child calling parent :)");
   }
  return (
    <div>
        <Child greetParent={greetParent}> </Child>
    </div>
  )
}
