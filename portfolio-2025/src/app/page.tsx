'use client'

export default function Home() {

  return (
    <div>
      <div className="flex lg:flex justify-between mb-20">
        <div className="mt-8 ml-40">
          <span className="mt-80 font-bold text-6xl">
            Welcome!
          </span>
          <div className="mt-8 text-md">My name is Caroline. I'm a software engineer, musician, and runner. I'm so glad you're here!</div>
        </div>
        <div className="overflow-hidden rounded-lg bg-white shadow max-w-xs w-full h-fit mr-40">
          <div className="px-4 py-5 sm:p-6">
            <img
              alt=""
              src="/life_photos/me_photo.jpg"
              className="w-full h-auto h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex lg:flex justify-start ml-40">
        <div className="overflow-hidden rounded-lg bg-white shadow w-fit">
          <div className="px-4 py-5 sm:p-6">
            <img
              alt=""
              src="/life_photos/chicago_skyline.jpg"
              className="object-cover max-w-sm h-auto"
            />
          </div>
        </div>
        <div className="mt-20 ml-20">
          <div className="mt-8 text-md">I live in Chicago, the coolest place ever</div>
        </div>
      </div>
      <div className="flex lg:flex justify-between  ml-40 mb-40">
        <div className="mt-20 text-md">I love animals, especially dogs!</div>
        <div className="overflow-hidden rounded-lg bg-white shadow w-fit mr-40">
          <div className="px-4 py-5 sm:p-6">
            <img
              alt=""
              src="/life_photos/chewy_good_boi.png"
              className="object-cover max-w-sm h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )

}
