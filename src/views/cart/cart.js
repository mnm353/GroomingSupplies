import React, { Component } from 'react';
import './cart.css';
import Header from '../../shared/header/header';
import { connect } from 'react-redux';
import * as Actions from '../../redux/action_creators/action_creator';
import axios from 'axios';
import CartItem from './components/cart_item/cart_item';
import httpRequest  from '../../shared/services/http_request'
class Cart extends Component {

	componentDidMount(){
		httpRequest.get('/api/cart', this.props)
		.then((data)=>{
			this.props.setCart(data.cartItems);
		})
	}
	removeFromCart = (id) => {
		httpRequest.delete(`/api/cart/${id}`, this.props)
		.then((data)=>{
				this.props.setCart(data.cartItems);
		})
	}

	render() {
		const cartItems = this.props.cartItems.map((e)=>{
			return <CartItem key={e.id} removeFromCart={this.removeFromCart} id={e.id} image_url={e.image_url} price={e.price} name={e.name} />
		})
		return (
			<div className="cart">
				<Header />
				{cartItems}
			</div>
		);
	}
}

export default connect(state => state, Actions)(Cart) ;
