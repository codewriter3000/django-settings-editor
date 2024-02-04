import React, {Fragment, useContext, useRef, useState} from 'react';
import {SettingsContext} from '../App.jsx';
import {Dialog, Transition} from '@headlessui/react';
import PropTypes from 'prop-types';
import {KeyValueTextbox} from './KeyValueTextbox.jsx';
import {PrimaryButton, SecondaryButton} from './Button.jsx';

export const ObjectConfigModal = ({configurations}) => {
	const [open, setOpen] = useState(true);
	const context = useContext(SettingsContext);
	const cancelButtonRef = useRef(null);
	const [values, setValues] = useState(Object.entries(configurations));
	
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ');
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
											<Dialog.Title as="h3"
												className="text-base font-semibold leading-6 text-gray-400">
												Database Settings
											</Dialog.Title>
											<div className="mt-2">
												<div className="text-sm text-gray-500">
													{values.map(([k, v]) => {
														const deleteItem = (e) => {
															e.preventDefault();
															setValues(values.filter((key) => {
																console.log(`key: ${key}`);
																return key[0] !== k;
															}));
														};

														const addItem = (e) => {
															e.preventDefault();
															console.log(values);
															setValues([...values.slice(0, k), ['', ''], ...values.slice(k)]);
														};

														return (
															<div key={k} className='grid grid-cols-6'>
																<div className='col-start-1 col-span-5'>
																	<KeyValueTextbox keyV={k} value={v}/>
																</div>
																<div className='col-span-1 col-end-7'>
																	<SecondaryButton type="button"
																		value={k}
																		className={classNames('text-red-400 bg-gray-900 px-3 py-2 border border-gray-900',
																			'font-semibold rounded-md hover:bg-red-950 active:bg-gray-950',
																			'hover:border-red-950')}
																		onClick={deleteItem}>
																		-
																	</SecondaryButton>
																	<SecondaryButton
																		className={classNames('text-green-400 bg-gray-900 px-3 py-2 border border-gray-900',
																			'font-semibold rounded-md hover:bg-green-950 active:bg-gray-950',
																			'hover:border-green-950')}
																		onClick={addItem}>
																		+
																	</SecondaryButton>
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row space-x-4 sm:px-6">
									<SecondaryButton
										type="button"
										onClick={() => {
											context.toggleModal(false);
											setOpen(false);
										}}
									>
										Cancel
									</SecondaryButton>
									<PrimaryButton
										type="button"
										onClick={() => {
											context.toggleModal(false);
											setOpen(false);
										}}
									>
										Save
									</PrimaryButton>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
ObjectConfigModal.propTypes = {
	configurations: PropTypes.object
};