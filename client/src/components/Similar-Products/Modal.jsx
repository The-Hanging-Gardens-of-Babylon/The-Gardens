/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useRef, useState, useContext } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { data } from '../Overview/StyleSelector/StyleSelector.jsx';



export default function Modal({ toggleModal, compareCardId, cards }) {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)

  const currentCard = cards[0]
  const compareCard = cards.find((element) => element.id === compareCardId);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" onClick={() => { toggleModal(false) }}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/*                     <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <p>Comparing</p>
                    </div> */}
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="mt-2">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                <th scope="col" className="px-6 py-3">
                                  Current Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  Feature
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  Compared Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                  <span className="sr-only">Edit</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                compareCard.features === undefined ?
                                  <>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                      <td className="px-6 py-4">
                                      </td>
                                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                        {feature.feature}
                                      </th>
                                      <td className="px-6 py-4">
                                        {feature.value}
                                      </td>
                                    </tr>
                                  </>
                                  :
                                  compareCard.features.map((feature, index) =>
                                    <>
                                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        {
                                          <td className="px-6 py-4">
                                            {
                                              index < currentCard.features.length &&
                                                currentCard.features[index].feature === feature.feature ? currentCard.features[index].value
                                                : null
                                            }
                                          </td>
                                        }
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                          {feature.feature}
                                        </th>
                                        <td className="px-6 py-4">
                                          {feature.value}
                                        </td>
                                      </tr>
                                    </>
                                  )

                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => { setOpen(false), toggleModal(false) }}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}