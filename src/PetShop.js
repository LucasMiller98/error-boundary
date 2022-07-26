import { string, number, array, func, oneOf  } from 'prop-types'

export function PetShop(props) {

  const { dogs, cats, customers, customersName, handleClick } = props

  
  return (
    <>
      <h1>Dogs: {dogs}</h1>
      <h2>cats: {cats}</h2>
      <div>
        Quantidate de clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customersName}
      </div>

      <button onClick={handleClick}>Click in me</button>
    </>
  )
}

PetShop.defaultProps = {
  cats: 0,
  customers: []
}

PetShop.propTypes = {
  dogs: number.isRequired,
  cats: number,
  customers: array,
  customersName: string.isRequired,
  handleClick: func.isRequired,
  status: oneOf(['Completed', 'Disabled'])
}