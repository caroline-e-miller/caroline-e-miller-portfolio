'use client'

// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
]

export default function Home() {
  // const router = useRouter();

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Home logo</span>
            <img
              alt=""
              src="/cmklogo.png"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">


// <div className="flex lg:flex-1">
//           <a href="#" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Company</span>
//             <img
//               alt=""
//               src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8 w-auto"
//             />
//           </a>
//         </div>


//       <div>
//         <button type="button" onClick={() => router.push('/about')} className="mx-2 px-2 py-2">
//             About
//         </button>
//         <button type="button" onClick={() => router.push('/portfolio')} className="mx-2 px-2 py-2">
//             Portfolio
//         </button>
//         <button type="button" onClick={() => router.push('/contact')} className="mx-2 px-2 py-2">
//             Contact
//         </button>
//         <button type="button" onClick={() => router.push('/blog')} className="mx-2 px-2 py-2">
//             Blog
//         </button>
//       </div>

//       <main>
//         <div className="text-md">This is Caroline's portfolio!</div>
//       </main>
//     </div>
//   );
}
