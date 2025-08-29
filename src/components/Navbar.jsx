import React from 'react'
import Logo from '../assets/logo'

// {/* <style>
//     /* Group 4 */

//     position: absolute;
//     width: 3205px;
//     height: 184px;



//     /* Rectangle 3 */

//     position: absolute;
//     width: 3205px;
//     height: 184px;

//     background: #B7B7B7;


//     /* SourceCode */

//     position: absolute;
//     width: 374px;
//     height: 77px;

//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 400;
//     font-size: 64px;
//     line-height: 77px;

//     color: #000000;



// /* <PassGo /> */

//     position: absolute;
//     width: 372px;
//     height: 86px;

//     font-family: 'Inter';
//     font-style: normal;
//     font-weight: 600;
//     font-size: 64px;
//     line-height: 77px;

//     color: #5D5D5D;


// </style> */}
const Navbar = () => {
    return (
        <nav className='flex h-[10vh] w-full fixed top-0 max-sm:h-[8vh]  bg-[#d6c5ff4b] font-semibold text-[24px] justify-between max-lg:px-20 max-sm:px-5 px-40 items-center'>
            <Logo/>
            <span className="source hover:bg-[#d6c5ff51] rounded-[20px] py-2 px-4">
                <a target='_blank' href="https://github.com/DevKartikSharma/Todo-ReactJS"><span className='text-black'>Source</span><span className='text-[#5D5D5D]'>Code</span></a>
            </span>
        </nav>
    )
}

export default Navbar
