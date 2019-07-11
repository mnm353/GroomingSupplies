import React, { Component } from 'react';
import axios from 'axios';
import './details.css';
import { connect } from 'react-redux';
import * as Actions from '../../redux/action_creators/action_creator'
import httpRequest  from '../../shared/services/http_request'
class Details extends Component {
	state = {
		product: {}
	};
	// http://localhost:8065/api/products/2
	componentDidMount() {
		httpRequest.get(`/api/products/${this.props.match.params.id}`, this.props)
		.then((data) => {
			this.setState({
				product: data.product
			})
		});
	}

	addToCart = () => {
		const product = this.state.product;
		httpRequest.post('/api/cart',this.props, { product })
			.then((data) => {
				this.props.setCart(data);
				this.props.history.push('/cart');
			});
	};

	render() {
		return (
			<div className="details">
				<div>
					<img src={this.state.product.image_url} alt="product image" />
					<h1> {this.state.product.name}</h1>
				</div>
				<div>
					<p>{this.state.product.description}</p>
					<h4>{this.state.product.price}</h4>
					<button onClick={this.addToCart}>Add to Cart</button>
				</div>
			</div>
		);
	}
}

export default connect(null, Actions)(Details);
