import React from 'react';

import {useContext, useState} from 'react';
import {SettingsContext} from '../App.jsx';
import {SecondaryButton} from './Button.jsx';
import {ViewSettingModal} from './ViewSettingModal.jsx';

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

export const SettingsTable = () => {
	const [modalKey, setModalKey] = useState();
	const context = useContext(SettingsContext);

	return (
		<div className='flex justify-center'>
			<table
				className={classNames('m-12 table-auto self-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400')}>
				<thead
					className={classNames('text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400')}>
					<tr>
						<th scope='col' className={classNames('px-6 py-3')}>Setting</th>
						<th scope='col' className={classNames('px-6 py-3')}>Value</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(context.settings).map((key) => {
						const value = context.settings[key];
						return (
							<tr key={key} className={classNames('bg-white border-b dark:bg-gray-800 dark:border-gray-700')}>
								<th scope='row'
									className={classNames('px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white')}>{key}</th>
								<td className={classNames('px-6 py-4')}>{typeof value !== 'object' ? value.toString() : <SecondaryButton onClick={() => {
									setModalKey(key);
									context.toggleModal();
								}}>View</SecondaryButton>}</td>
							</tr>);
					})}
				</tbody>
			</table>
			{context.modalIsOpen && <ViewSettingModal propertyName={modalKey} propertyValue={context.settings[modalKey]}></ViewSettingModal>}
		</div>
	);
};