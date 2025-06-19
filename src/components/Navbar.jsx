import React, {useState}from "react";
import {TfiAlignJustify, TfiAlignRight} from 'react-icons/tfi'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font-bold text-[#000]'>Jeany Florencia</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Profile</li>
                <li className='p-4'>Projects</li>
                <li className='p-4'>Contact</li>
            </ul>

            <div onClick={handleNav}>
                {!nav ? <TfiAlignRight size={20}/> : <TfiAlignJustify size={20}/>}
            </div>

            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#F8F1DE] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#000] m-4'>Jeany Florencia</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-white'>Home</li>
                    <li className='p-4 border-b border-white'>Profile</li>
                    <li className='p-4 border-b border-white'>Projects</li>
                    <li className='p-4 border-b border-white'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar