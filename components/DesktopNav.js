import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'


const DesktopNav = () => {
  return (
    <>
      <div className="hidden sm:block">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="p-1font-medium rounded-lg text-gray-900 sm:p-4 dark:text-gray-100
            hover:bg-blue-500 
            hover:shadow-2xl
            "
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  )
}

export default DesktopNav
