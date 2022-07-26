import { useRef } from 'react'

export function Ref() {
  const ref = useRef()
  
  return (
    <h1>{ref.current}</h1>
  )
}