import React from 'react';

import {SettingsTable} from './SettingsTable.jsx';
import {SettingsContext} from '../App.jsx';
import {useContext} from 'react';
import {EditSettings} from './EditSettings.jsx';

export const ActiveContainer = () => {
	const context = useContext(SettingsContext);
	return (
		<div>
			{context.activeControl === 'SettingsTable' ? <SettingsTable/> : <EditSettings/>}

		</div>
	);
};