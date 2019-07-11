import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './views/product_list/product_list';
import Details from './views/details/details';
import Cart from './views/cart/cart';
import Login from './views/login/login';
import axios from 'axios';

import './App.css';

class App extends Component {
  componentDidMount(){
    axios.get('/api/test')
      .then((response)=>{
        console.log(response.data)
      })
  }
	render() {
		return (
			<div className="app">
				<Router>
					<Switch>
						<Route path="/details/:id" component={Details} />
						<Route path="/products" component={ProductList} />
						<Route path="/cart" component={Cart} />
						<Route path="/" component={Login} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
