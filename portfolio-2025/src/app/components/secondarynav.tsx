
"use client"

import { useRouter } from 'next/navigation'

export default function SecondaryNav() {
  const router = useRouter();

  return (
    <div>
      <div>
        <button type="button" onClick={() => router.push('/about')} className="mx-2 px-2 py-2">
          About
        </button>
        <button type="button" onClick={() => router.push('/portfolio')} className="mx-2 px-2 py-2">
          Portfolio
        </button>
        <button type="button" onClick={() => router.push('/contact')} className="mx-2 px-2 py-2">
          Contact
        </button>
        <button type="button" onClick={() => router.push('/blog')} className="mx-2 px-2 py-2">
          Blog
        </button>
      </div>
    </div>
  );
}