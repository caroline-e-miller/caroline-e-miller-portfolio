'use client'

import { useState } from 'react'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function PrimaryNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-transparent">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Home logo</span>
            <img
              alt=""
              src="/cmklogo.png"
              className="h-16 w-auto rounded-3xl"
            />
          </a>
        </div>

        {/* desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>

        {/* desktop github link */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://github.com/caroline-e-miller/portfolio-mcportface">
            <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* mobile hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* mobile navigation */}
      {isOpen && (
        <>
          <div className="lg:hidden fixed top-24 left-0 right-0 bottom-0 backdrop-blur-sm bg-white/10 z-40" />
          <div className="lg:hidden fixed top-24 left-0 right-0 bg-white border-b border-gray-200 z-50 w-full">
            {/* <div className="px-6 py-4 space-y-2"> */}
            <div>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://github.com/caroline-e-miller/portfolio-mcportface"
                className="block px-6 py-4 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  )
}