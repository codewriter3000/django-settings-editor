import React from 'react';

import {Switch} from './Switch.jsx';
import {useContext, useState} from 'react';
import {SettingsContext} from '../App.jsx';
import {Textbox} from './Textbox.jsx';
import {PrimaryButton, SecondaryButton} from './Button.jsx';
import {EditableList} from './EditableList.jsx';
import {ObjectList} from './ObjectList.jsx';

export const EditSettings = () => {
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
								<Switch label='Debug Mode' defaultValue={context.settings.DEBUG}/>
							</div>
						</div>
						<div className='col-span-full'>
							<EditableList label='Installed Apps' elements={context.settings.INSTALLED_APPS}/>
						</div>
					</div>
				</div>

				<div className='border-b border-gray-400/10 pb-12'>
					<h2 className='text-base font-semibold leading-7 text-gray-400'>Middleware</h2>
					<p className='mt-1 text-sm leading-6 text-gray-400'>Manage your middleware configurations</p>

					<div className='col-span-full mt-10'>
						<EditableList label='Middleware' elements={context.settings.MIDDLEWARE}/>
					</div>
				</div>

				<div className='border-b border-gray-400/10 pb-12'>
					<h2 className='text-base font-semibold leading-7 text-gray-400'>Templates</h2>
					<p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your template configurations
					</p>
					<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
						<div className='col-span-full'>
							<div className='mt-3'>
								<Textbox label='Backend' defaultValue={context.settings.TEMPLATES[0].BACKEND}/>
								<Textbox label='Directory' defaultValue={context.settings.TEMPLATES[0].DIRS[0]}/>
							</div>
						</div>
						<div className='col-span-full'>
							<EditableList label='Context Processors'
								elements={context.settings.TEMPLATES[0].OPTIONS.context_processors}/>
						</div>
					</div>
				</div>

				<div className='border-b border-gray-400/10 pb-12'>
					<h2 className='text-base font-semibold leading-7 text-gray-400'>Static/Media</h2>
					<p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your static and media configurations
					</p>

					<div className='mt-10 space-y-10'>
						<div className='col-span-full'>
							<div className='mt-3'>
								<Textbox label='Static URL' defaultValue={context.settings.STATIC_URL}/>
								<Textbox label='Static Root' defaultValue={context.settings.STATIC_ROOT}/>
								<Textbox label='Media URL' defaultValue={context.settings.MEDIA_URL}/>
								<Textbox label='Media Root' defaultValue={context.settings.MEDIA_ROOT}/>
							</div>
						</div>
					</div>
				</div>
				<div className='border-b border-gray-400/10 pb-12'>
					<h2 className='text-base font-semibold leading-7 text-gray-400'>Databases</h2>
					<p className='mt-1 text-sm leading-6 text-gray-400'>
                        Manage your database configurations
					</p>
					<ObjectList label='Database' elements={context.settings.DATABASES}/>
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
						<div className='col-span-full'>
							<div className='mt-3'>
								<Textbox label='Language Code' defaultValue={context.settings.LANGUAGE_CODE}/>
								<Textbox label='Time Zone' defaultValue={context.settings.TIME_ZONE}/>
							</div>

							<div className='mt-10 space-y-10'>
								<Switch label='Use I18n' defaultValue={context.settings.USE_I18N}/>
								<Switch label='Use L10n' defaultValue={context.settings.USE_L10N}/>
								<Switch label='Use TZ' defaultValue={context.settings.USE_TZ}/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-6 flex items-center justify-end gap-x-6'>
				<SecondaryButton>
                    Cancel
				</SecondaryButton>
				<PrimaryButton>
                    Save
				</PrimaryButton>
			</div>
		</form>
	);
};
