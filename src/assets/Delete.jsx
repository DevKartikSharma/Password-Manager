import React from 'react'

const Delete = ({onClick}) => {
    return (
        <button className='text-sm' onClick={onClick}>
            <lord-icon
                src="https://cdn.lordicon.com/jzinekkv.json"
                trigger="hover"
                stroke="regular"
                colors="primary:#121331,secondary:#000000"
                className="w-[30px] h-[28px] pt-[2px] max-lg:w-[30px] max-lg:h-[26px] max-lg:pt-[1px]">
            </lord-icon>
        </button>
    )
}

export default Delete
