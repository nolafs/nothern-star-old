'use client';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';

import {getLocalStorage, setLocalStorage} from '@northern-star/utils';

declare const window: any;

export const CookieBanner = () => {
  const [isClient, setIsClient] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null)

    setCookieConsent(storedCookieConsent)
  }, [setCookieConsent])


  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied'

    if(typeof window === 'undefined') return;

    if(!window?.gtag) return;

    window?.gtag("consent", 'update', {
      'analytics_storage': newValue
    });

    setLocalStorage("cookie_consent", cookieConsent)
  }, [cookieConsent]);



  return ((isClient) ? <div>
    <div className={`my-10 mx-auto max-w-max md:max-w-screen-lg
                        fixed z-50 bottom-0 left-0 right-0
                        flex px-3 md:px-4 py-3 ${cookieConsent != null ? "hidden" : "flex"}  justify-between items-center flex-col sm:flex-row gap-4
                         bg-gray-700 rounded-lg shadow`}>

      <div className='text-left'>
        <Link href={"/legal/cookie-policy"}><p>We use cookies for better user experience and site analytics. By continuing,
          you agree to our use of cookies. Learn more in our <span
            className='font-bold text-sky-400'>Cookie Policy</span>.</p>
        </Link>
      </div>


      <div className='flex gap-2'>
        <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900'
                onClick={() => setCookieConsent(false)}>Decline
        </button>
        <button className='bg-gray-900 px-5 py-2 text-white rounded-lg whitespace-nowrap'
                onClick={() => setCookieConsent(true)}>Allow Cookies
        </button>
      </div>
    </div>
    </div> : null
  );
};

export default CookieBanner;
