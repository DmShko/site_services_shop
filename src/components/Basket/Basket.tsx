import { FC } from 'react';

import { nanoid } from 'nanoid';

// own dispatch hook
import { useAppSelector, useAppDispatch} from "../../app.hooks";

// styles
import cp from "./Basket.module.scss";

const Basket: FC = () => {

const basketSelector = useAppSelector(state => state.ser.basket);

  return (

    <div className={cp.basketContainer}>
        
        <ul className={cp.basketList}>
            {basketSelector.map( element => 
              <li className={cp.basketItem} key={nanoid()} id={element.id}>
                <p>Name</p>{element.name}
                <p>Cost</p>{element.cost}
                <p>Quantity</p>{element.quantity}</li>
            )}
        </ul>
      
    </div>
    
  )
}

export default Basket;