import React from 'react'

const EventHandling = () => {
  const sayHi = () => {
    alert('Hi everyone!')
  } 

  return (
    <div>
      <button onClick={sayHi}>Say Hi</button>
    </div>
  )
}

export default EventHandling

/*
  # Event Handling: Logic to execute when an event occurs
    - Events:
      - click
      - input
      - change
    - Event Handlers:
      - onclick
      - oninput
      - onchange

    - Syntax in JSX:
      <button onClick={func1}>Click</button>

      - Event handlers need to be added in camelCase
        - onClick, onInput, onChange, etc.
      - {} needs to be used instead of "" (Referencing a function is an expression and expressions need to be specified in {} in JSX)
      - Function need to be assigned as a reference instead of being invoked within the event handlers
*/