"use client"
// once content is placed, use server for faster/better rendering
// use server for API key security (client may expose it)

export default function PortfolioContent() {
    return (
        <div>
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
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}