"use client"
import { useState } from 'react'
// once content is placed, use server for faster/better rendering
// use server for API key security (client may expose it)

export default function PortfolioContent() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const validatePassword = async () => {
        try {
            const res = await fetch('../api/validate-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            })

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setMessage(data.message);
        } catch (error) {
            setMessage('Oopsie.');
        }
    };
    return (
        <div className="px-6 py-24 mx-40">
            <span className="block text-lg font-bold text-gray-900">For security purposes, a password is required to view this content. To acquire the password, please fill out the contact form <a href="/contact" className="underline underline-offset-2 text-blue-600">here</a>.</span>
            <div className="flex lg:flex justify-center">
                <div className="mt-20 w-80">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                        Input password to view portfolio content
                    </label>
                    <div className="mt-2 grid grid-cols-1">
                        <input
                            id="password"
                            name="password"
                            type="text"
                            placeholder="Password"
                            className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={validatePassword}
                            className="rounded bg-blue-500 mt-2 px-2 py-1 w-auto text-xs font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        >
                            Submit
                        </button>
                        {message && <p>{message}</p> }
                    </div>
                </div>
            </div>
        </div>
    )
}