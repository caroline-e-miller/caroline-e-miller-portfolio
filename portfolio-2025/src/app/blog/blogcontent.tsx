"use client"

import { useRouter } from 'next/navigation'

export default function BlogContent() {
    const router = useRouter();

    return (
        <div className="mt-4 ml-4">
            <button type="button" onClick={() => router.push(`/`)}>Home</button>
            <div className="relative min-h-screen mt-20 ml-20 mr-40 mb-20">
                <div className="text-3xl mb-6">Blog</div>
                <div className="text-xl">January 9, 2025</div>
                <div className="text-md">
                    Well, today I started bulding my portfolio from scratch. And I have to tell you, I'm genuinely enjoying it. Now I understand the stereotype of programmers who struggle to step away from their computers. While I type this, there are fresh-baked brownies sitting on the counter. And I'm not even eating them! I'm too excited to see if my new routing strategy works!
                </div>
            </div>
        </div>
    )
}