import React from 'react';

import {SecondaryButton} from './Button.jsx';
import {useCallback, useState} from 'react';
import PropTypes from 'prop-types';

export const EditableList = ({label, elements}) => {
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ');
	};

	const [, updateState] = useState();
	const forceUpdate = useCallback(() => updateState({}, []));

	return (
		<>
			<label className='font-medium block text-sm leading-6 text-gray-400'>{label}</label>
			<div>
				{elements.map((value, key) => {
					const moveItemUp = (e) => {
						e.preventDefault();
						const temp = elements[key - 1];
						elements[key - 1] = elements[key];
						elements[key] = temp;
						console.log(elements);
						forceUpdate();
					};

					const deleteItem = (e) => {
						e.preventDefault();
						elements.splice(key, 1);
						forceUpdate();
					};

					const addItem = (e) => {
						e.preventDefault();
						elements.splice(key, 0, '');
						forceUpdate();
					};

					const moveItemDown = (e) => {
						e.preventDefault();
						const temp = elements[key + 1];
						elements[key + 1] = elements[key];
						elements[key] = temp;
						console.log(elements);
						forceUpdate();
					};
					return (
						<div key={key} className="mt-2 flex">
							<input
								spellCheck='false'
								type='text'
								className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-700"
								defaultValue={value}
							/>
							<div className='ml-4 flex space-x-2'>
								<SecondaryButton
									className={classNames('text-gray-400 bg-gray-900 px-3 py-2 border border-gray-900',
										'font-semibold rounded-md hover:bg-gray-700 active:bg-gray-950')}
									disabled={key === 0}
									onClick={moveItemUp}>
                                    ^
								</SecondaryButton>
								<SecondaryButton type="button"
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
								<SecondaryButton
									className={classNames('text-gray-400 bg-gray-900 px-3 py-2 border border-gray-900',
										'font-semibold rounded-md hover:bg-gray-700 active:bg-gray-950')}
									onClick={moveItemDown} disabled={key === elements.length-1}>
                                    v
								</SecondaryButton>
							</div>
						</div>
					);
				})}
			</div>
			<SecondaryButton className='mt-4' onClick={(e) => {
				e.preventDefault();
				elements.splice(elements.length, 0, '');
				forceUpdate();
			}}>Add To Bottom</SecondaryButton>
		</>
	);
};
EditableList.propTypes = {
	label: PropTypes.string, 
	elements: PropTypes.array,
};