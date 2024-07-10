import React from 'react'

export default function Child(props) {
  return (
    <div>
        <button onClick={props.greetParent}>Click me!</button>
    </div>
  )
}
