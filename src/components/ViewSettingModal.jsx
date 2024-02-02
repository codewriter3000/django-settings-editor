import React from 'react';

import {Fragment, useContext, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {SettingsContext} from '../App.jsx';
import PropTypes from 'prop-types';

export const ViewSettingModal = ({propertyName, propertyValue}) => {
	const [open, setOpen] = useState(true);
	const context = useContext(SettingsContext);
	const cancelButtonRef = useRef(null);

	const ValueList = ({propertyName, propertyValue}) => {
		switch (propertyName) {
		case 'ALLOWED_HOSTS':
		case 'INSTALLED_APPS':
		case 'MIDDLEWARE':
			return (
				<div>
					{propertyValue.map(element => {
						return (<p key={element}>{element}</p>);
					})}
				</div>
			);
		case 'AUTH_PASSWORD_VALIDATORS':
			return (
				<div>
					{propertyValue.map(element => {
						return (<p key={element.NAME}>{element.NAME}</p>);
					})}
				</div>
			);
		case 'DATABASES':
			return (
				<div>
					{Object.entries(propertyValue['default']).map(([k, v], key) => {
						return (<p key={key}>{k}: {v}</p>);
					})}
				</div>
			);
		case 'TEMPLATES':
			console.log(JSON.stringify(propertyValue));
			// eslint-disable-next-line no-case-declarations
			const template = propertyValue[0];
			return (
				<div>
					<p>BACKEND: {template['BACKEND']}</p>
					<p>DIRS: {template['DIRS']}</p>
					{Object.entries(template['OPTIONS']).map(([k, v], key) => {
						console.log(`${k}: ${v}`);
						return (<div key={key}>{k.toUpperCase()}:
							{v.map(value => {
								return (
									<p key={value}>- {value}</p>
								);
							})}
						</div>);
					})}
				</div>
			);
		}
	};

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
											<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-400">
												{propertyName}
											</Dialog.Title>
											<div className="mt-2">
												<div className="text-sm text-gray-500">
													<ValueList propertyName={propertyName} propertyValue={propertyValue}/>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
										onClick={() => {
											context.toggleModal(false);
											setOpen(false);
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
	);
};
ViewSettingModal.propTypes = {
	propertyName: PropTypes.string,
	propertyValue: PropTypes.any,
};
