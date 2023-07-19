import { useState } from 'react'
import { formatCurrency } from '../utilities/formatCurrency'
import { useShopingCart } from '../context/ShoppingCartContext'
import ProductQuickview from './ProductQuickview'

type ShopItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

function ProductItem({ id, name, price, imgUrl }: ShopItemProps) {

    const { getItemQuantity } = useShopingCart()

    const [isOpen, setIsOpen] = useState(false)

    const quantity = getItemQuantity(id)

    const handleProductQuickView = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="group relative">

                <div className="group relative">
                    {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80 relative"  > */}
                    <div className="group group-hover:bg-opacity-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80 relative transition duration-500 relative bg-gray-200 dark:hover:bg-gray-700 sm:p-28 py-36 px-10 flex justify-center items-center" style={{ pointerEvents: 'auto', zIndex: 1 }}>
                        <img src={imgUrl} alt="Front of men's Basic Tee in black." className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        <div className="flex flex-col top-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
                            <button style={{ cursor: 'pointer' }}
                                onClick={handleProductQuickView}
                            >
                                <img className="dark:hidden filter invert" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2.svg" alt="view" />
                                <img className="hidden dark:block filter invert" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg2dark.svg" alt="view" />

                            </button>
                            <button style={{ cursor: 'pointer' }}>
                                <img className="dark:hidden filter invert" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3.svg" alt="like" />
                                <img className="hidden dark:block filter invert" src="
 https://tuk-cdn.s3.amazonaws.com/can-uploader/product-grid-2-svg3dark.svg" alt="like" />
                            </button>
                        </div>
                    </div>
                </div>
                <fieldset className="mt-3">
                    <legend className="sr-only">Choose a color</legend>
                    <span className="flex items-center space-x-3">

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                            <span id="color-choice-0-label" className="sr-only">White</span>
                            <span aria-hidden="true" className="h-5 w-5 bg-white rounded-full border border-black border-opacity-10"></span>
                        </label>

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                            <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                            <span id="color-choice-1-label" className="sr-only">Gray</span>
                            <span aria-hidden="true" className="h-5 w-5 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                        </label>

                        <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                            <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                            <span id="color-choice-2-label" className="sr-only">Black</span>
                            <span aria-hidden="true" className="h-5 w-5 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                        </label>
                    </span>
                </fieldset>

                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">

                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {name}

                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">Black</p> */}

                    </div>
                    <p className="text-sm font-medium text-gray-900">{formatCurrency(price)}</p>
                </div>
                {/* <button type="submit" className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-6 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Shop Now</button> */}


            </div>

            {isOpen &&
                <ProductQuickview
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    item={{ id, name, price, imgUrl }}
                    quantity={quantity}
                />
            }
        </>

    )
}

export default ProductItem