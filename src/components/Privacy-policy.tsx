/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { Button } from 'antd';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setOpen(true), 1000);

    return () => clearTimeout(timeOut);
  }, []);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 z-10 overflow-y-auto'
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6'>
              <div className='mt-3 sm:mt-5'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-bold leading-6 text-gray-900'
                >
                  COMPANY CORPORATE POLICY
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-justify text-gray-500'>
                    KMC shall fully comply with the obligations and requirements
                    of the Data Privacy Act and, when applicable, the GDPR.
                    KMC’s officers, management, and employees shall, at all
                    times, respect the confidentiality and security of all
                    personal data collected and/or stored and/or transmitted
                    and/or used for, or on behalf of KMC. KMC shall ensure all
                    collection, storage, transmission and other handling or
                    usage of personal data by KMC shall be done in accordance
                    with the obligations and requirements of the Data Privacy
                    Act and when applicable, the GDPR. Where an individual
                    legitimately requests access to and/or correction of
                    personal data relating him/her, held by KMC, KMC shall
                    provide and/or correct that data in accordance with the data
                    privacy laws.
                  </p>
                </div>
              </div>
              <div className='mt-3 sm:mt-5'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-bold leading-6 text-gray-900'
                >
                  SECURITY OF PERSONAL DATA
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-justify text-gray-500'>
                    Physical records containing personal data are securely
                    stored in locked areas when not in use. Computer data are
                    stored on computer systems and storage media to which access
                    is strictly controlled and/or are located within restricted
                    areas. Access to records and data without appropriate
                    management authorization are strictly prohibited.
                    Authorizations are granted only on a 'need to know' basis.
                    Where KMC holds, uses and/or transmits personal data, the
                    data will be adequately protected from accidental and/or
                    unauthorized disclosure, change and/or destruction.
                  </p>
                </div>
              </div>
              <div className='mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense'>
                <Link to='/home'>
                  <Button className='w-full' size='large'>
                    Return to home
                  </Button>
                </Link>
                <Button
                  type='primary'
                  onClick={() => setOpen(false)}
                  size='large'
                >
                  Proceed as guest
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PrivacyPolicy;
