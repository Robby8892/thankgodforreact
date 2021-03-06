import React from 'react'
import {Button, Header, Modal, Image } from 'semantic-ui-react'
import './index.css'

export default function CartModal(props) {
	console.log('here is props on cartModal', props);
		const userCartInfo = props.userCartInfo.map(({cartId, name, price, imgOfTreat, _id, quantity}) =>{

			return(
				<div key={_id}>
					<Header className='name-header' as='h4'>{name}</Header>
					<p>${price*quantity}</p>
					<span>Quantity: <strong>{quantity}</strong></span>
					<Image className='modal-img' size='small'  src={process.env.REACT_APP_API_URI + `image/treat/${_id}`} alt={name}/>
					<Button color='red' className='delete-button' onClick={() => props.deleteItemFromCart(_id) }>Delete {name} from cart</Button>
				</div>
			)
		})
		return(
			<Modal className='modal-container' size='small' closeIcon open={props.cartModal} onClose={props.closeCartModal}>
				<Header as='h2'>{props.contentsInCart  ? 'Here are items in your cart.' : 'Your cart is empty'}</Header>
				{props.contentsInCart ? 
					<Modal.Content className='content-container'>
						<span>Your total is: ${props.total}.00</span>
						{userCartInfo}
						<Modal.Actions>
							<Button onClick={props.cartCheckOut} color='green'>Checkout</Button>
							<Button onClick={props.clearCart} color='red'>Clear Cart</Button>
						</Modal.Actions>
					</Modal.Content>
				 :
				 null
				  }
			</Modal>
	)
}