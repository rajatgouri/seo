import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Search from './Search'

const DesktopNav = () => {
  return (
    <>
      <div className="hidden sm:block">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  )
}

export default DesktopNav
