import { FC } from 'react'

// styles
import cp from "./Basket.module.scss";

const Basket: FC = () => {

  return (
    
    <div className={cp.basketContainer}>

        <ul className={cp.basketList}>

        </ul>
      
    </div>
    
  )
}

export default Basket;