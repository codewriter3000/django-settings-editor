import SettingsTable from "./SettingsTable.jsx";
import {SettingsContext} from "../App.jsx";
import {useContext} from "react";
import EditSettings from "./EditSettings.jsx";

// eslint-disable-next-line react/display-name,react/prop-types
export default () => {
    const context = useContext(SettingsContext);
    return (
        <div>
            {context.activeControl === 'SettingsTable' ? <SettingsTable/> : <EditSettings/>}

        </div>
    )
}