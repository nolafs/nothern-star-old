import Image from "next/image";
import React from "react";

import {Footer} from '@northern-star/features';


const Page404 = () => (<>
      <main className="relative isolate w-full h-screen  mb-52 text-primary">
        <div className="absolute z-10 w-full h-full max-w-none opacity-50">
          <video playsInline={true} muted={true} autoPlay={true} loop={true}
                 className="object-cover w-full h-full"
          >
            <source src="/videos/6s_loop_20mbs.webm" type="video/webm"/>
            <source src="/videos/6s_loop_20mbs.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 w-full h-screen z-20 flex flex-col justify-center">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex justify-center">
              <a href="/" className="text-sm font-semibold leading-7 ">
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className={'absolute w-full bottom-0'}>
        <Footer/>
      </div>
    </>
  )
;

export default Page404;
