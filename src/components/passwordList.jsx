import { IoCopyOutline } from "react-icons/io5";
import Edit from '../assets/Edit'
import Delete from '../assets/Delete'
import { LuEyeClosed, LuEye } from "react-icons/lu";
import { toast } from 'react-toastify';
import useMediaQuery from "./usemedia";



const passwordList = ({ setDetails, details, handleDelete, handleEdit }) => {
    const isMobile = useMediaQuery("(max-width: 1024px)");
    const handleShow = (id) => {
        let updatedDetails = details.map((detail) => (
            (detail._id === id) ? { ...detail, show: !detail.show } : detail
        ))
        setDetails(updatedDetails)
    }

    const handleCopy = (text) => {
        toast.success('Copied to clipboard');
        navigator.clipboard.writeText(text)

    }

    return (<>
    {(!isMobile)?(
        <div className="passwords space-y-2">
            <div className="text-white p-2 grid grid-flow-col grid-cols-5 items-center refrence w-full  h-10 bg-[rgba(158,126,247,0.54)] rounded-[7px]">
                <span className='col-span-2 justify-center flex'>Site</span><span className=' flex justify-center'>Username</span><span className=' flex justify-center'>Password</span><span className=' flex justify-center'>Actions</span>
            </div>


            <ul className='space-y-2'>
                {
                    details.map((detail) => (
                        <li key={detail._id} className=" grid grid-flow-col grid-cols-5 items-center refrence w-full font-light text-black h-10 bg-[rgba(159,126,250,0.23)] rounded-[7px]">
                            <span className='col-span-2 flex justify-center items-center space-x-1'><IoCopyOutline className="cursor-pointer" onClick={() => handleCopy(detail.site)} /><span>{detail.site}</span></span>
                            <span className=' flex justify-center items-center space-x-1'><IoCopyOutline className="cursor-pointer" onClick={() => handleCopy(detail.username)} /><span>{detail.username} </span></span>
                            <span className=' flex justify-center items-center space-x-1'><IoCopyOutline className="cursor-pointer" onClick={() => handleCopy(detail.pass)} /><span className="flex justify-center items-center gap-2">{(detail.show) ? detail.pass : '•'.repeat(detail.pass.length)} {(detail.show) ? <LuEye onClick={() => handleShow(detail._id)} /> : <LuEyeClosed onClick={() => handleShow(detail._id)} />}</span></span>
                            <span className=' flex justify-center items-center space-x-2'><Edit onClick={() => handleEdit(detail._id)} /><Delete onClick={() => handleDelete(detail._id)} /></span>
                        </li>
                    ))
                }
            </ul>
        </div>
        ):<ul className="space-y-3 overflow-scroll h-[210px] flex flex-col items-center py-3">
    {details.map((detail) => (
      <li
        key={detail._id}
        className="flex flex-col w-[50%] max-md:w-[80%] bg-[rgba(159,126,250,0.15)] text-black text-sm rounded-md max-sm:w-[90%] p-4  max-lg:w-[70%] shadow-sm  justify-center items-center"
      >
        {/* Info Section */}
        <div className="space-y-2 flex flex-col justify-center items-center text-center text-lg max-md:text-[18px] max-sm:text-[15px]  ">
          {/* Site */}
          <div className="flex w-fit items-center justify-center">
            <span className="font-semibold text-gray-700 mb-1">Site:&nbsp;</span>
            <span className="flex  text-gray-700 mb-1 items-center gap-2 justify-center text-center">
              <span>{detail.site}</span>
              <IoCopyOutline
                className="cursor-pointer hover:text-purple-700"
                onClick={() => handleCopy(detail.site)}
              />
            </span>
          </div>

          {/* Username */}
          <div className="flex w-fit items-center justify-center">
            <span className="font-semibold text-gray-700 mb-1">Username:&nbsp;</span>
            <div className="flex  items-center text-gray-700 mb-1 gap-2 justify-center">
              <span>{detail.username}</span>
              <IoCopyOutline
                className="cursor-pointer hover:text-purple-700"
                onClick={() => handleCopy(detail.username)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex w-fit items-center justify-center">
            <span className="font-semibold text-gray-700 mb-1">Password:&nbsp;</span>
            <div className="flex  items-center gap-2 text-gray-700 mb-1 justify-center">
              <span>
                {detail.show
                  ? detail.pass
                  : '•'.repeat(detail.pass.length)}
              </span>
              {detail.show ? (
                <LuEye
                  className="cursor-pointer hover:text-purple-700"
                  onClick={() => handleShow(detail._id)}
                />
              ) : (
                <LuEyeClosed
                  className="cursor-pointer hover:text-purple-700"
                  onClick={() => handleShow(detail._id)}
                />
              )}
              <IoCopyOutline
                className="cursor-pointer hover:text-purple-700"
                onClick={() => handleCopy(detail.pass)}
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-2 border-t w-[80%] border-[rgba(159,126,250,0.38)]" />

        {/* Actions */}
        <div className="flex justify-center items-center gap-6">
          <Edit onClick={() => handleEdit(detail._id)} />
          <Delete onClick={() => handleDelete(detail._id)} />
        </div>
      </li>
    ))}
  </ul>}
    </>
    )
}

export default passwordList
