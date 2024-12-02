import styles from './page.module.css';
import {Footer} from '@northern-star/features';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>

      <div className={'absolute w-full bottom-0 text-white z-20'}>
        <Footer/>
      </div>

      <div className="absolute z-10 w-full h-full max-w-none">
        <video playsInline={true} muted={true} autoPlay={true} loop={true}
               className="object-cover w-full h-full"
        >
          <source src="/videos/6s_loop_20mbs.webm" type="video/webm"/>
          <source src="/videos/6s_loop_20mbs.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>


    </div>
  );
}
