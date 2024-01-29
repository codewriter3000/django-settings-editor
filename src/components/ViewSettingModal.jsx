import {Fragment, useContext, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {SettingsContext} from "../App.jsx";

// eslint-disable-next-line react/prop-types
export default function ViewSettingModal({propertyName, propertyValue}) {
    const [open, setOpen] = useState(true)
    const context = useContext(SettingsContext);
    const cancelButtonRef = useRef(null)

    const indentObject = (obj) => {
        let temp = JSON.stringify(obj);
        for(let i = 0; i < JSON.stringify(obj).length; i++){
            console.log(JSON.stringify(obj)[i] === '[')
            if(JSON.stringify(obj)[i] === '['){
                temp = temp.slice(0, i) + '\n' + JSON.stringify(obj).slice(i);
            }
            if(JSON.stringify(obj)[i] === ','){
                temp = temp.slice(0, i+1) + '\n' + JSON.stringify(obj).slice(i+1);
            }
        }
        return temp;
    }

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
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel
                                className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3"
                                                          className="text-base font-semibold leading-6 text-gray-400">
                                                {propertyName}
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    {indentObject(propertyValue)}
                                                </p>
                                                {/* eslint-disable-next-line react/prop-types */}
                                                {/*{propertyValue.map(value => {*/}
                                                {/*    return (*/}
                                                {/*        <p key={value} className="text-sm text-gray-500">*/}
                                                {/*            {value}*/}
                                                {/*        </p>*/}
                                                {/*    )*/}
                                                {/*})}*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                        onClick={() => {
                                            context.toggleModal(false)
                                            setOpen(false)
                                        }}
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
