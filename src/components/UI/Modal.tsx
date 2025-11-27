import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, type ReactNode } from 'react'
import Button from './Button'

interface IProps {
isOpen:boolean;
title?:string;
closeModal:()=>void;
children:ReactNode;


}

const Modal = ({isOpen, closeModal,title, children}:IProps) => {
  //  const [isOpen, setIsOpen] = useState(true)

  // function open() {
  //   setIsOpen(true)
  // }

  // function close() {
  //   setIsOpen(false)
  // }

  return (
    <>
     

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-[#50484842] backdrop-blur-xl">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-[#33333342] p-6 backdrop-blur-3xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>}
              
              
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Modal

