function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

// eslint-disable-next-line react/prop-types
const SecondaryButton = ({onClick, children, className}) => {

    return (
        <button onClick={onClick} className={classNames(className,
            'text-gray-400 bg-gray-900 px-3 py-2',
            'border border-gray-900 font-semibold rounded-md')}>
            {children}
        </button>
    )
}

export {SecondaryButton}