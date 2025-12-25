import { useState, useRef, useEffect } from 'react'
import PasswordList from './passwordList';
import Logo from '../assets/logo'
import Add from '../assets/add'
import { LuEyeClosed, LuEye } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';



const Manager = () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '/api'

    const fetchFromDB = async () => {
        try {
            let res = await fetch(BACKEND_URL)
            let passwords = await res.json()
            return Array.isArray(passwords) ? passwords : []
        } catch (e) {
            console.log(e);
            return []
        }

    }

    const SetPassFromDB = async () => {
        const passwords = await fetchFromDB()
        SetDetails(passwords)
    }

    const [details, SetDetails] = useState([])
    const siteRef = useRef()
    const usernameRef = useRef()
    const passRef = useRef()

    useEffect(() => {
        SetPassFromDB()
    }, [])
    const handleSubmit = async () => {
        const Site = siteRef.current.value
        const Username = usernameRef.current.value
        const Pass = passRef.current.value
        if (Site && Username && Pass) {
            try {

                const passTobeAdd = { site: Site, username: Username, pass: Pass, show: false }
                const res = await fetch(BACKEND_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(passTobeAdd)
                })
                const response = await res.json()
                console.log(response);
                SetPassFromDB()
                toast.success('Password Saved');
            } catch (err) {
                console.log(err);
            }
        }
        else {
            toast.error('Fill all details first')
        }
        siteRef.current.value = ''
        usernameRef.current.value = ''
        passRef.current.value = ''
    }

    const handleDelete = async (id) => {
        const res = await fetch(`${BACKEND_URL}/${id}`, { method: 'DELETE' })
        const response = await res.json()
        console.log(response);

        await SetPassFromDB()
        toast.success('Password deleted');
    }

    const handleEdit = async (id) => {
        const element = details.find((detail) => (detail._id === id))
        siteRef.current.value = element.site
        usernameRef.current.value = element.username
        passRef.current.value = element.pass
        await handleDelete(id)
    }

    useEffect(() => {
        console.log(details);
        localStorage.setItem('details', JSON.stringify(details))
    }, [details])

    const [show, SetShow] = useState(false)

    const handleShow = () => {
        SetShow(!show)
    }


    return (<>
        <ToastContainer
            position="bottom-left"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            draggable
            pauseOnHover
            toastClassName="bg-[rgba(159,126,250,0.9)] text-white rounded-lg font-light shadow-md"
            bodyClassName="text-sm flex items-center"
            progressClassName="bg-white"
        />

        <div className="absolute top-0 inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_%_200px,#d5c5ff,transparent)]">
            <div className='h-[10vh] max-sm:h-[7vh]'></div>
            <div className='flex flex-col items-center w-[80%] m-auto h-[90vh]  space-y-3'>

                <div className="intro bg-[#d6c5ff4b] h-fit w-fit flex flex-col justify-center items-center pt-5 p-7 space-y-5 mt-5 rounded-[10px]">
                    <Logo />
                    <p className="desc text-xl font-light">
                        Your own password manager
                    </p>
                </div>
                <div className="addSection flex justify-center flex-col bg-[#d6c5ff4b] h-10vh p-5 rounded-[10px] w-[80%] max-sm:w-full gap-1">
                    <div className="inputs grid space-y-1 justify-center m-auto items-center w-[60%] max-md:w-full max-xl:flex max-xl:flex-col">

                        <input type="text" ref={siteRef} placeholder='Enter URL' className='flex cursor-default border-transparent outline-none rounded-[10px] bg-[rgba(158,126,247,0.4)] placeholder:text-white p-2 pl-4 focus:border focus:border-black border-[1px] text-white max-xl:w-full  ' />

                        <div className='grid grid-flow-col grid-cols-6 space-x-1 relative max-xl:flex max-xl:flex-col max-xl:gap-1 max-xl:w-full'>
                            <input type="text" ref={usernameRef} placeholder='Username' className='  col-span-4 cursor-default border-transparent outline-none rounded-[10px] bg-[rgba(158,126,247,0.4)] text-white placeholder:text-white p-2 pl-4 focus:border focus:border-black border-[1px] max-xl:mr-0 ' />

                            <input type={(show) ? "text" : "password"} ref={passRef} placeholder='Password ' className='  cursor-default col-span-2 border-transparent outline-none rounded-[10px] bg-[rgba(158,126,247,0.4)] text-white placeholder:text-white p-2 pl-4 pr-10 mr-0 focus:border focus:border-black border-[1px]' />
                            {(show) ? <LuEye onClick={handleShow} className='text-white absolute top-3 right-4 max-xl:top-[59px]' /> : <LuEyeClosed onClick={handleShow} className='text-white absolute top-3 max-xl:top-[59px] right-4' />}
                        </div>
                    </div>
                    <div className="save max-xl:w-[60%] max-md:w-full m-auto flex justify-center items-center">
                        <button onClick={handleSubmit} className=' flex items-center justify-center w-full px-4 bg-[rgba(158,126,247,0.4)] rounded-[10px] space-x-1'><span className='pt-[5px]'> <Add /> </span><span className='text-center text-white'>Add password</span></button>
                    </div>
                </div>
                <div className="passSection bg-[#d6c5ff4b] h-fit max-sm:h-[270px] p-5 pb-3 rounded-[10px] w-[80%] max-sm:w-full max-xl:w-[100%] max-lg:w-[80%]">
                    <div className="Passhead text-xl font-semibo ld font-[] mb-3">
                        Passwords:
                    </div>
                    {
                        (details?.length > 0) ? <PasswordList setDetails={SetDetails} details={details} handleEdit={handleEdit} handleDelete={handleDelete} /> : 'No Passwords are saved!'
                    }
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Manager
