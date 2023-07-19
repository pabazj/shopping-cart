import { ReactNode, createContext, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShopingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {


    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const increaseCartQuantity = (id: number) => {
        const itemIndex = cartItems.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            const updatedItems = [...cartItems];
            
            updatedItems[itemIndex].quantity += 1;
            setCartItems(updatedItems);
        } else {
            setCartItems([...cartItems, { id, quantity: 1}]);
        }

    }
      
      
    const decreaseCartQuantity = (id: number) => {
        const updatedItems = [...cartItems];
        const itemIndex = updatedItems.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            updatedItems[itemIndex].quantity -= 1;

            if (updatedItems[itemIndex].quantity === 0) {
                updatedItems.splice(itemIndex, 1);
            }
        }

        setCartItems(updatedItems);

    }
      

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    }

    return (<ShoppingCartContext.Provider
        value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}>
        {children}
        <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>)
}