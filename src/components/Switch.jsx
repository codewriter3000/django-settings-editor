import React from 'react';

import {useState} from 'react';
import {Switch as HeadlessSwitch} from '@headlessui/react';
import PropTypes from 'prop-types';

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

export const Switch = ({flagMethod, defaultValue, label, id, secondary}) => {
	const [enabled, setEnabled] = useState(defaultValue || false);

	return (
		<div className='flex space-x-4'>
			<label htmlFor={id} className={classNames(!secondary && 'font-medium', 'block text-sm leading-6 text-gray-400')}>
				{label}
			</label>
			<HeadlessSwitch
				checked={enabled}
				onChange={() => {
					setEnabled(!enabled);
					flagMethod(!enabled);
				}}
				className={`${
					enabled ? 'bg-blue-600' : 'bg-gray-200'
				} relative inline-flex h-6 w-11 items-center rounded-full`}
			>
				<span className="sr-only">Enable notifications</span>
				<span
					className={`${
						enabled ? 'translate-x-6' : 'translate-x-1'
					} inline-block h-4 w-4 transform rounded-full bg-white transition`}
				/>
			</HeadlessSwitch>
		</div>

	);
};
Switch.propTypes = {
	flagMethod: PropTypes.func,
	defaultValue: PropTypes.bool,
	label: PropTypes.string,
	id: PropTypes.string,
	secondary: PropTypes.bool,
};