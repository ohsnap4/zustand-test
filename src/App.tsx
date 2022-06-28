import React from 'react'
import { useStore } from './store'
import { BearState } from './store'

const App = () => {
  // simple way of getting the state from zustand store
  // const bears = useStore((state) => state.bears)
  // const increase = useStore((state) => state.increase)
  // const decrease = useStore((state) => state.decrease)
  // const zero = useStore((state) => state.zero)
  // destructural way of getting the state from zustand store
  const { bears, increase, decrease, zero } = useStore()

  return (
    <>
      <h1>Zustand</h1>
      <div>
        <p>{bears} bears</p>
        <button onClick={() => increase(4)}>Increase Bears</button>
        <button onClick={() => decrease(4)}>Increase Bears</button>
        <button onClick={() => zero()}>Increase Bears</button>
      </div>
    </>
  )
}

export default App