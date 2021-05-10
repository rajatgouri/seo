const { default: Search } = require("@/components/Search")

const Categories = () => {
    return (
        <div>
            <Search/>
            <h1 className="text-3xl border-b-2 pb-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Categories
          </h1>
        </div>
    )
}

export default Categories
