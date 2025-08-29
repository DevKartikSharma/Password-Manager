import React from 'react'

const Edit = ({onClick}) => {
    return (
        <button onClick={onClick} className='text-sm'>
            <lord-icon
                src="https://cdn.lordicon.com/exymduqj.json"
                trigger="hover"
                stroke="regular"
                state="hover-line"
                colors="primary:#121331,secondary:#000000"
                className="w-[30px] h-[28px] pt-[2px] max-lg:w-[30px] max-lg:h-[26px] max-lg:pt-[1px]">
            </lord-icon>
        </button>
    )
}

export default Edit
