import {combineReducers} from 'redux'

const user = (state= {}, action) => {
    switch(action.type){
        case 'set_user':
            return action.payload;
        default:
            return state;
    }
}
const cartItems = (state= [], action) => {
    switch(action.type){
        case 'set_cart':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({user, cartItems});