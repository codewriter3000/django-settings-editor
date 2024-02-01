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
import Switch from './Switch.jsx';
import {useContext, useState} from 'react';
import {SettingsContext} from '../App.jsx';
import Textbox from './Textbox.jsx';
import {SecondaryButton} from "./Button.jsx";

export default function Example() {
    const [unmaskSecretKey, setUnmaskSecretKey] = useState(false);
    const context = useContext(SettingsContext);
    return (
        <form className='m-10 bg-gray-800 p-6 rounded-xl'>
            <div className='space-y-12'>
                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Basic Configurations</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                        Find basic settings that are modified frequently
                    </p>

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='col-span-full'>
                            <div className='mt-3'>
                                <Switch id='debug' flag={context.debug} defaultValue={context.debug}
                                        label='Debug Mode'/>
                            </div>
                        </div>
                        <div className='col-span-full'>
                            <label className='font-medium block text-sm leading-6 text-gray-400'>Installed Apps</label>
                            <div>
                                {context.settings.INSTALLED_APPS.map(app => {
                                    return (
                                        <div key={app} className="mt-2 flex">
                                            <input
                                                spellCheck='false'
                                                type='text'
                                                className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-700"
                                                defaultValue={app}
                                            />
                                            <div className='ml-4 flex space-x-2'>
                                                <SecondaryButton
                                                    className="text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                    ^
                                                    <span className="sr-only">Add item</span>
                                                </SecondaryButton>
                                                <SecondaryButton type="button"
                                                                 className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                                                    -
                                                    <span className="sr-only">Remove item</span>
                                                </SecondaryButton>
                                                <SecondaryButton
                                                    className="text-green-400 border border-green-400 hover:bg-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500">
                                                    +
                                                    <span className="sr-only">Add item</span>
                                                </SecondaryButton>
                                                <SecondaryButton
                                                    className="text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                    v
                                                    <span className="sr-only">Add item</span>
                                                </SecondaryButton>
                                            </div>
                                        </div>
                                    )
                                })}
                                <SecondaryButton className='mt-4'>Add To Bottom</SecondaryButton>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Middleware</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>Manage your middleware configurations</p>

                    <div className='col-span-full mt-10'>
                        <div>
                            {context.settings.MIDDLEWARE.map(app => {
                                return (
                                    <div key={app} className="mt-2 flex">
                                        <input
                                            spellCheck='false'
                                            type='text'
                                            className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-700"
                                            defaultValue={app}
                                        />
                                        <div className='ml-4 flex space-x-2'>
                                            <SecondaryButton
                                                className="text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                ^
                                                <span className="sr-only">Add item</span>
                                            </SecondaryButton>
                                            <SecondaryButton type="button"
                                                             className="text-red-400 border border-red-400 hover:bg-red-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                                                -
                                                <span className="sr-only">Remove item</span>
                                            </SecondaryButton>
                                            <SecondaryButton
                                                className="text-green-400 border border-green-400 hover:bg-green-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800 dark:hover:bg-green-500">
                                                +
                                                <span className="sr-only">Add item</span>
                                            </SecondaryButton>
                                            <SecondaryButton
                                                className="text-blue-400 border border-blue-400 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                v
                                                <span className="sr-only">Add item</span>
                                            </SecondaryButton>
                                        </div>
                                    </div>
                                )
                            })}
                            <SecondaryButton className='mt-4'>Add To Bottom</SecondaryButton>
                        </div>
                    </div>
                </div>

                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Templates</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your template configurations
                    </p>

                    <div className='mt-10 space-y-10'>

                    </div>
                </div>

                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Static/Media</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your static and media configurations
                    </p>

                    <div className='mt-10 space-y-10'>
                        <Textbox label='Static URL' defaultValue={context.settings.STATIC_URL}/>
                        <Textbox label='Static Root' defaultValue={context.settings.STATIC_ROOT}/>
                        <Textbox label='Media URL' defaultValue={context.settings.MEDIA_URL}/>
                        <Textbox label='Media Root' defaultValue={context.settings.MEDIA_ROOT}/>
                    </div>
                </div>
                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Databases</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your database configurations
                    </p>
                    <table
                        className='m-12 table-auto w-9/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead
                            className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className={'px-6 py-3'}>Database</th>
                            <th scope='col' className={'px-6 py-3'}></th>
                        </tr>
                        </thead>
                        <tbody>
                        <div className='mt-10 space-y-10'>
                            {Object.keys(context.settings.DATABASES).map(key => {
                                return (
                                    <tr key={key} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                        <td className='px-6 py-4'>{key}</td>
                                        <td className='px-6 py-4'><SecondaryButton>Details</SecondaryButton></td>
                                    </tr>
                                )
                            })}
                        </div>
                        </tbody>
                    </table>
                </div>
                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Authentication</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your authentication configurations
                    </p>

                    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                        <div className='col-span-full'>
                            <label htmlFor='about' className='block text-sm font-medium leading-6 text-gray-400'>
                                Secret Key
                            </label>
                            <div className='mt-2'>
                                <input
                                    type={unmaskSecretKey ? 'text' : 'text'}
                                    id='secretKey'
                                    name='secretKey'
                                    className='block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-700'
                                    defaultValue={context.settings.SECRET_KEY}
                                />
                            </div>
                            <div className='mt-3'>
                                <Switch secondary={true} label='Show Key' id='generateKey'
                                        flagMethod={setUnmaskSecretKey}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-400/10 pb-12'>
                    <h2 className='text-base font-semibold leading-7 text-gray-400'>Localization</h2>
                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your localization configurations such as time zones and language codes
                    </p>

                    <div className='mt-10 space-y-10'>
                        <Textbox label='Language Code' defaultValue={context.settings.LANGUAGE_CODE}/>
                        <Textbox label='Time Zone' defaultValue={context.settings.TIME_ZONE}/>
                        <Switch label='Use I18n' defaultValue={context.settings.USE_I18N}/>
                        <Switch label='Use L10n' defaultValue={context.settings.USE_L10N}/>
                        <Switch label='Use TZ' defaultValue={context.settings.USE_TZ}/>
                    </div>
                </div>
            </div>

            <div className='mt-6 flex items-center justify-end gap-x-6'>
                <SecondaryButton type='button' className='text-sm font-semibold leading-6 text-gray-400'>
                    Cancel
                </SecondaryButton>
                <SecondaryButton
                    type='submit'
                    className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                    Save
                </SecondaryButton>
            </div>
        </form>
    )
}
