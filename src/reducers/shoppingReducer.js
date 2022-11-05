import { TYPES } from '../actions/ShoppingActions'
export const shoppingCartInitial = {
    products: [
        { id: 1, name: "Producto 1", price: 100 },
        { id: 2, name: "Producto 2", price: 200 },
        { id: 3, name: "Producto 3", price: 300 },
        { id: 4, name: "Producto 4", price: 400 },
        { id: 5, name: "Producto 5", price: 500 },
        { id: 6, name: "Producto 6", price: 600 },
    ],
    cart: [],
    importeTotal: 0,
    cantidad: 0
}

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(product => product.id === action.payload);
            // console.log(newItem);
            let itemInCart = state.cart.find(item => item.id === newItem.id);
            return itemInCart
                ? {
                    // Cuando tenemos un elemento itemCart que ya esta en cart, lo que hacemos es que comparamos con el map a cual objeto es el que esta igual, si este elemento corresponde, se agrega a quantity mas uno
                    ...state, cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item

                    ),
                }
                :
                // Esta parte es cuando el item se agraga por primera vez al elemento carrito, solo se agrega la propiedad de quantity.
                {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }]
                }

        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find(item => item.id === action.payload)
            return itemToDelete.quantity > 1
                ?
                {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload
                        ?
                        { ...item, quantity: item.quantity - 1 }
                        : item
                    )
                }
                :
                {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }

        }
        case TYPES.TOTALIMPORTE: {
            return {
                cantidad:state.cantidad+1
            }

        }
        case TYPES.CLEAR_CART:
            // regresamos al estado inicial, que en este caso es la variable shoppingCartInitial
            return shoppingCartInitial;
        default:
            return state;
    }
}