import {useState} from 'react'
import {Switch} from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/display-name,react/prop-types,no-unused-vars
export default ({flag, flagMethod, defaultValue, label, id, secondary}) => {
    const [enabled, setEnabled] = useState(defaultValue || false);

    return (
        <div className='flex space-x-4'>
            <label htmlFor={id} className={classNames(!secondary && 'font-medium', 'block text-sm leading-6 text-gray-400')}>
                {label}
            </label>
            <Switch
                checked={enabled}
                onChange={() => {
                    setEnabled(!enabled);
                    flagMethod(!enabled);
                    flag = enabled;
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
            </Switch>
        </div>

    )
}