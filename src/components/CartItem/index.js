import {Component} from 'react'
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";

import './index.css'
class CartItem extends Component {

   state={isClickedOnDelete:false}
    
    onDeleteCartItem=()=>{
        const {productId}=this.props
        this.setState((prev)=>({isClickedOnDelete:!prev.isClickedOnDelete}))
        const {deleteCartItem}=this.props
        deleteCartItem(productId)

    }

    render(){ 
        const {name,productId,price,quantity,imageUrl}=this.props 
        return(
            <Link to={`/products/${productId}`} className='cart-item-container'>
                <img alt="product" src={imageUrl}/>
                <div>
                    <p className='cart-item-name'>{name}</p>
                    
                    <p className='cart-item-price'>Price : {price}</p>
                    <p className='cart-item-quantity'>Quantity : {quantity}</p>
                    <p className='cart-item-total-price'>Total Price : {price*quantity}</p>
                </div>
                <div className='delete-icon'>
                    <button type="button" onClick={this.onDeleteCartItem}>
                        <MdDelete style={{ fontSize: '25px' }}/>
                    </button>
                
                </div>
            </Link>
        ) 
    }

}

export default CartItem