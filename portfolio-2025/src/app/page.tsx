'use client'

export default function Home() {
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  return (
    <div>
      <div className="flex items-center justify-center min-h-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-20 text-center lg:text-left sm:mx-20">
          <div className="mt-10 mx-6 lg:mx-0lg:mt-0">
            <span className="font-bold text-6xl">
              Welcome!
            </span>
            <div className="mt-8 text-md">My name is Caroline. I'm a software engineer, musician, and runner.</div>
          </div>
        </div>
        <div className="overflow-hidden shadow max-w-xs w-full h-fit mr-30 ml-16 mb-20 hidden lg:block">
          <div>
            <img
              alt="A photo of Caroline at a museum, smiling and wearing a floral sweater."
              src="/life_photos/new_photo.jpg"
              className="w-full h-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )

}
