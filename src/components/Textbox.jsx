import React from 'react';

import PropTypes from 'prop-types';

export const Textbox = ({defaultValue, disabled, id, name, label}) => {
	return (
		<>
			<div className="mt-2">
				<label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-400">
					{label}
				</label>
				<input
					spellCheck='false'
					type='text'
					disabled={disabled}
					id={id}
					name={name}
					className="block w-full rounded-md border-0 py-1.5 bg-transparent text-gray-400 shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-gray-700"
					defaultValue={defaultValue}
				/>
			</div>
		</>
	);
};
Textbox.propTypes = {
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	id: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
};