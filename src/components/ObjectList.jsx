import React from 'react';

import {SecondaryButton} from './Button.jsx';
import PropTypes from 'prop-types';

export const ObjectList = ({label, elements}) => {
	return (
		<>
			<table
				className='m-12 table-auto w-9/12 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
				<thead
					className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
					<tr>
						<th scope='col' className={'px-6 py-3'}>{label}</th>
						<th scope='col' className={'px-6 py-3'}></th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(elements).map(key => {
						return (
							<tr key={key} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
								<td className='px-6 py-4'>{key}</td>
								<td className='px-6 py-4'><SecondaryButton>Details</SecondaryButton></td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<SecondaryButton className='mt-4'>Add {label}</SecondaryButton>
		</>
	);
};
ObjectList.propTypes = {
	label: PropTypes.string,
	elements: PropTypes.object,
};