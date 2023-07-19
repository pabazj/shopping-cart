import { Link } from "react-router-dom"
function Home() {
  return (
    <>
      <div className="relative overflow-hidden bg-white px-24">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40" >
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
              <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
            </div>
            <div>
              <div className="mt-10">

                <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/products/053023c9ae2eebfdd467f304060586b14533ade1.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/products/af93132b17e12ca223f5838002647c328c2b0171.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/products/e7f7225668ebd24256c209711be3d8eaeef19c08.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/products/06953fc26446d6ac23a118ceb4dcab61cf60a238.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/products/dac3a2d01b7ddbb51b0cd8b081fcea679f52a066.jpg" alt="" className="h-full w-full object-cover object-center" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <Link to="/womens-wear" className="rounded-lg px-8 py-3 border-2 border-indigo-700 text-indigo-700 font-medium hover:bg-indigo-700 hover:text-indigo-700 duration-300">Shop Collection</Link>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="relative overflow-hidden bg-white">
        <div className="mt-6 mb-6 space-y-12 px-24 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/collections/c5a10b5325225f5689394dc6482ccca272f6fc60.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Premium Dresses
              </a>
            </h3>

          </div>
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/collections/5a7764882e83b358f107d9cde37a72afc6edebd8.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                sporty
              </a>
            </h3>

          </div>
          <div className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="https://lk-kellyfelder.s3.ap-southeast-1.amazonaws.com/collections/1a056ac5ed86ea87fc07f1d18ee1cb9bfdf92fb9.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center" />
            </div>
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              <a href="#">
                <span className="absolute inset-0"></span>
                Best Sellers
              </a>
            </h3>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home