// eslint-disable-next-line react/prop-types
const SecondaryButton = ({onClick, children}) => {
    return (
        <button onClick={onClick} className='bg-gray-900 px-3 py-2 border border-gray-900 font-semibold rounded-md'>
            {children}
        </button>
    )
}

export {SecondaryButton}