import React from 'react'
import LOGO from '../../Images/logo.png'
function Intro() {
  return (
    <>
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white ">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            class="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4"
            autoplay
            muted
            loop
          ></video>
        </div>
        <div class="video-content space-y-2 z-10">
          <h1 class="font-light text-6xl">full Hero Video</h1>
          <h3 class="font-light text-3xl">with TailwindCSS</h3>
        </div>
      </section>
    </>
  );
}

export default Intro