/* eslint-disable-next-line */
import {Footer} from '@northern-star/features';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className={'flex flex-col space-y-10 container'}>
      <main>
        <div className={'absolute left-0 top-0 -translate-y-1/2 w-full z-1'}>
          <video playsInline={true} muted={true} autoPlay={true} loop={true}
                 className="object-cover w-full h-full"
          >
            <source src="/videos/6s_loop_20mbs.webm" type="video/webm"/>
            <source src="/videos/6s_loop_20mbs.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={'relative z-10 mt-48'}>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
