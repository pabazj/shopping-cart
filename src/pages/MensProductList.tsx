import { productList } from '../data/ProductList'
import ProductItem from '../components/ProductItem'

export default function MensProductList() {

  const mensList = productList.filter(item => item.category === 'men')
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-10 py-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-20">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {mensList.map(item => (
            <ProductItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>

  )
}
