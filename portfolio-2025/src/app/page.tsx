'use client'

export default function Home() {

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-20">
          <div className="mt-8">
            <span className="font-bold text-6xl">
              Welcome!
            </span>
            <div className="mt-8 text-md">My name is Caroline. I'm a software engineer, musician, and runner.</div>
          </div>
        </div>
        <div className="overflow-hidden shadow max-w-xs w-full h-fit mr-30 ml-16 mb-20">
          <div>
            <img
              alt=""
              src="/life_photos/me_photo.jpg"
              className="w-full h-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )

}
