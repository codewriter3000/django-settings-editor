import React from 'react';
import PropTypes from 'prop-types';
import {Textbox} from './Textbox.jsx';

export const KeyValueTextbox = ({keyV, value}) => {

	console.log(`${keyV}: ${value}`);

	return (
		<div className='grid grid-cols-5 gap-4'>
			<div className='col-start-1 col-end-3'>
				<Textbox defaultValue={keyV}/>
			</div>

			<div className='col-end-6 col-span-3'>
				<Textbox defaultValue={value}/>
			</div>
		</div>
	);
};
KeyValueTextbox.propTypes = {
	keyV: PropTypes.string,
	value: PropTypes.any,
};