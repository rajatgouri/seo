import Sidebar from '@/components/Sidebar'

function categories() {
  return (
    <>
      <Sidebar />
      <div className="home-page-wrapper mt-5">
        <div class="container mx-auto px-3">
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
                Categories
              </h1>
            </div>
            <div className="container py-12">
              <div className="flex -m-4">
                <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
                    <img
                      alt="blogs"
                      src="https://source.unsplash.com/random/500x500"
                      className="lg:h-48 md:h-36 object-cover object-center"
                      width={544}
                      height={306}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
                        Category Name
                      </h2>
                      <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                      <button className="ml-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
                    <img
                      alt="blogs"
                      src="https://source.unsplash.com/random/500x500"
                      className="lg:h-48 md:h-36 object-cover object-center"
                      width={544}
                      height={306}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
                        Category Name
                      </h2>
                      <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                      <button className="ml-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
                    <img
                      alt="blogs"
                      src="https://source.unsplash.com/random/500x500"
                      className="lg:h-48 md:h-36 object-cover object-center"
                      width={544}
                      height={306}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
                        Category Name
                      </h2>
                      <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                      <button className="ml-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                  <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
                    <img
                      alt="blogs"
                      src="https://source.unsplash.com/random/500x500"
                      className="lg:h-48 md:h-36 object-cover object-center"
                      width={544}
                      height={306}
                    />
                    <div className="p-6">
                      <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
                        Category Name
                      </h2>
                      <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Edit
                      </button>
                      <button className="ml-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default categories
