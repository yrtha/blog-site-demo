import React from 'react'
import Link from 'next/link'

import {ImFacebook, ImTwitter, ImYoutube} from 'react-icons/im'

function Header() {
  return (
    <div className='bg-gray-50'>
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input className='mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  ' type="text" placeholder='Search...' />
            </div>


            <div className="shrink w-80 sm:order-2">
                <a className='font-bold uppercase text-3xl' href="">Design</a>
            </div>


            <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
           <a><ImFacebook color='#888888'/></a>
            <a><ImTwitter color='#888888'/></a>
            <a><ImYoutube color='#888888'/></a>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Header