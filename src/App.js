import { Button } from './Components/Button'

export function App() {
  const handleClick = () => {
    console.log('Adicionando ao carrinho')
  }
  
  return (
    <Button onClick={handleClick}>
      Adicionar no carrinho
    </Button>
  )
}































// import { useEffect, useRef, useState } from 'react'

// export function App() {
//   const inputRef = useRef()
//   const count = useRef(1)
//   const [_, setValue] = useState(false)
  
//   const handleClick = () => {
//     inputRef.current.focus()
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       count.current = 300
//       setValue(true)
//     }, 3000)
//   })
  
//   return (
//     <>
//       <h1>Valor count: {count.current}</h1>
//       foco: <input type="text" ref={inputRef} />

//       <button onClick={handleClick}>Focar</button>
//     </>
//   )
// }




























// import { PetShop } from './PetShop'

// export function App() {
//   const handleClick = () => {
//     console.log('Hello World') 
//   }
  
//   return (
//     <>
//       <PetShop cats={222} dogs={122} customers={[1, 3, 1]} customersName='Lucas' handleClick={handleClick} status='Completed' />
//     </>
//   )
// }






























// import './App.css';
// import { ErrorBoundary } from './Error-boundary';

// function App() {
//   const obj = {}

//   const array = ['Lucas', 'Miller', 'Santos']
  
//   return (
//     <>
//       { array.map(arr => (
//         <div key={arr}>
//           <ErrorBoundary>
//             <h1>{obj}</h1>
//           </ErrorBoundary>
//         </div>
//       )) }
//     </>
//   );
// }

// export default App;
