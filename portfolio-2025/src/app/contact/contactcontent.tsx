"use client"

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SecondaryNav from '../components/secondarynav';

export default function ContactContent() {
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
                <div className="text-3xl mb-6">Contact</div>
                <div>Do you want to talk to me? Well, too bad because I don't talk to strangers on the internet.</div>
            </div>
        </div>
    )
}