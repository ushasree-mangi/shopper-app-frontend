import {Link} from 'react-router-dom'

import './index.css'
const CartItem =(props) => {
    const {name,productId,price,quantity,imageUrl}=props
    return(
        <Link to={`/products/${productId}`} className='cart-item-container'>
             <img alt="product" src={imageUrl}/>
             <div>
                <p className='cart-item-name'>{name}</p>
                
                <p className='cart-item-price'>Price : {price}</p>
                <p className='cart-item-quantity'>Quantity : {quantity}</p>
            </div>
        </Link>
    )

}

export default CartItem