/* eslint-disable-next-line */

import Link from 'next/link';
import DialogComponent from '../dialog/dialog';
import ContactForm from '../contact-form/contact-form';

export function Footer() {

  const copyRight = new Date().getFullYear();

  return (
    <div className={'flex flex-col md:flex-row justify-end items-center w-full text-primary/50 text-sm p-3'}>
      <div className={'flex flex-row'}>
        <div className={'px-2'}>
          <DialogComponent dialogTitle={'Contact Us'} label={'Contact Us'} >
            <ContactForm />
          </DialogComponent>
        </div>
        <div className={'px-2'}>|</div>
        <div className={'px-2'}>
          <Link className={'hover:text-secondary'} href={{
            pathname: '/legal/cookie-policy'
          }}>Cookie Policy</Link>

        </div>
      </div>
    </div>
  );
}

export default Footer;
