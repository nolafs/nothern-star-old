'use client';
import styles from './dialog.module.scss';
import {Fragment, useState} from 'react'
import {Dialog, DialogPanel, DialogTitle, Transition, TransitionChild} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
/* eslint-disable-next-line */
export interface DialogProps {
  children: React.ReactNode;
  dialogTitle: string;
  icon?: any;
  hasIcon?: boolean;
  label: string;
}

export function DialogComponent({children, label, dialogTitle, icon, hasIcon}: DialogProps) {

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true);
  }

  return (<>
    <div className={styles['container']}>
      { (!hasIcon) && <button className={'hover:text-secondary'} onClick={handleClick}>{label}</button> }
      {( hasIcon) && <button className={'w-20 h-20 p-5 fill-primary border border-primary bg-neutral rounded-full hover:text-secondary'} onClick={handleClick}>{icon}</button>}
    </div>

      <Transition show={open} as={Fragment}

      >
        <Dialog className="relative z-10" onClose={setOpen}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"/>
          </TransitionChild>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  className="relative transform overflow-hidden rounded-lg bg-neutral-900 px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="absolute top-0 right-0 flex h-12 w-12 items-center justify-center  cursor-pointer" onClick={() => setOpen(false)}>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <DialogTitle as="h3" className="text-primary font-semibold leading-6">
                        {dialogTitle}
                      </DialogTitle>
                      <div className="mt-2">
                        {children}
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

    </>
  );
}

export default DialogComponent;
