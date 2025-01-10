"use client"

import { useRouter } from 'next/navigation'

export default function AboutContent() {
    const router = useRouter();
    return (
        <div className="mt-4 ml-4">
            <button type="button" onClick={() => router.push(`/`)}>Home</button>
            <div className="relative min-h-screen mt-20 ml-20 mr-40 mb-20">
                <div className="text-3xl mb-6">About</div>
                <div>Caroline Miller King is a creative, adaptive, and innovative software engineer living in the windy city of Chicago, Illinois.</div>
            </div>
        </div>
    )
}