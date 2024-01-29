/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {PhotoIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import Switch from "./Switch.jsx";
import {useContext, useState} from "react";
import {SettingsContext} from "../App.jsx";
import Textbox from "./Textbox.jsx";

export default function Example() {
    const [generateKey, setGenerateKey] = useState(false);
    const context = useContext(SettingsContext);
    return (
        <form className='m-10 bg-gray-800 p-6 rounded-xl'>
            <div className="space-y-12">
                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Basic Configurations</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Find basic settings that are modified frequently
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <div className='mt-3'>
                                <Switch id='debug' flag={context.debug} defaultValue={context.debug} label='Debug'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Middleware</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">Manage your middleware configurations</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                    </div>
                </div>

                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Templates</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Manage your template configurations
                    </p>

                    <div className="mt-10 space-y-10">

                    </div>
                </div>

                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Static/Media</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Manage your static and media configurations
                    </p>

                    <div className="mt-10 space-y-10">

                    </div>
                </div>
                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Databases</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Manage your static and database configurations
                    </p>

                    <div className="mt-10 space-y-10">

                    </div>
                </div>
                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Authentication</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Manage your authentication configurations
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-400">
                                Secret Key
                            </label>
                            <div className="mt-2">
                                <input
                                    type='text'
                                    disabled={generateKey}
                                    id="secretKey"
                                    name="secretKey"
                                    className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-700"
                                    defaultValue={context.settings.SECRET_KEY}
                                />
                            </div>
                            <div className='mt-3'>
                                <Switch secondary={true} label='Generate Key' id='generateKey' flagMethod={setGenerateKey}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b border-gray-400/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Localization</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-400">
                        Manage your localization configurations such as time zones and language codes
                    </p>

                    <div className="mt-10 space-y-10">
                        <Textbox label='Language Code' defaultValue={context.settings.LANGUAGE_CODE}/>
                        <Textbox label='Time Zone' defaultValue={context.settings.TIME_ZONE}/>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-400">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}
