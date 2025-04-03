"use client"
// once content is placed, use server for faster/better rendering
// use server for API key security (client may expose it)
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SecondaryNav from '../components/secondarynav';

export default function PortfolioContent() {
    const router = useRouter();
    return (
        <div className="container">
            <button type="button" onClick={() => router.push(`/`)}>
                <Image
                    src="/cmklogo.png"
                    width={75}
                    height={75}
                    alt="Homepage logo"
                />
            </button>
            <SecondaryNav />
            <div className="relative min-h-screen mt-20 ml-20 mr-40 mb-20">
                <div className="text-3xl mb-6">Portfolio</div>
                <div>Do you even have the password to look at this?!</div>
            </div>
        </div>
    )
}