import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  '/reading-list': {
    name: 'Reading List',
  },
  '/resume': {
    name: 'Resume',
  },
}

export function Navbar() {
  return (
    <aside className="mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative justify-between  items-center h-10"
          id="nav"
        >
          <p className="flex flex-row space-x-0 h-full items-center font-semibold text-lg">
            Cameron Gera
          </p>
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
