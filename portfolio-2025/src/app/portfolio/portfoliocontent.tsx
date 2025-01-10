"use client"

import { useRouter } from 'next/navigation'

export default function PortfolioContent() {
    const router = useRouter();
    return (
        <div className="mt-4 ml-4">
            <button type="button" onClick={() => router.push(`/`)}>Home</button>
            <div className="relative min-h-screen mt-20 ml-20 mr-40 mb-20">
                <div className="text-3xl mb-6">Portfolio</div>
                <div>Do you even have the password to look at this?!</div>
            </div>
        </div>
    )
}