import { productList } from '../data/ProductList'
import { useShopingCart } from '../context/ShoppingCartContext'

type CartItemProps = {
    id: number
    quantity: number
}

function ShoppingCartItem({ id, quantity }: CartItemProps) {

    const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } = useShopingCart()

    const item = productList.find(i => i.id === id)
    if (item == null) return null

    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img src={item.imgUrl} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="#">{item.name}</a>
                        </h3>
                        <p className="ml-4">{item.price}</p>
                    </div>
                    
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex items-center justify-center mt-6">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-l"
                            onClick={() => increaseCartQuantity(item.id)}
                        >
                            +
                        </button>
                        <span className="text-black mx-4"> {quantity} in Cart</span>
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-r"
                            onClick={() => decreaseCartQuantity(item.id)}
                        >
                            -
                        </button>
                    </div>

                    <div className="flex">
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeFromCart(id)}>Remove</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ShoppingCartItem