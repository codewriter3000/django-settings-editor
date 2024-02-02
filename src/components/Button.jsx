import React from 'react';

import PropTypes from 'prop-types';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const SecondaryButton = ({onClick, children, className, disabled}) => {
	return (
		<button onClick={onClick} className={classNames(className,
			'text-gray-400 bg-gray-900 px-3 py-2',
			'border border-gray-900 font-semibold rounded-md',
			'hover:bg-gray-700 active:bg-gray-950',
			'disabled:bg-gray-800')} disabled={disabled}>
			{children}
		</button>
	);
};
SecondaryButton.propTypes = {
	onClick: PropTypes.func, 
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element,
	]),
	className: PropTypes.string, 
	disabled: PropTypes.bool,
};

const PrimaryButton = ({onClick, children, className, disabled}) => {

	return (
		<button onClick={onClick} className={classNames(className,
			'text-gray-400 bg-indigo-600 px-3 py-2',
			'border border-gray-900 font-semibold rounded-md')} disabled={disabled}>
			{children}
		</button>
	);
};
PrimaryButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.element,
	]),
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

export {PrimaryButton, SecondaryButton};