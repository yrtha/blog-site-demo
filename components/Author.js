import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Author() {
  return (
    <div className='flex py-5'>
        <Image src={"/images/author1.jpg"} className="rounded-full" width={60} height={60} />
        <div className="flex flex-col justify-center px-4">
                <a className='text-md font-bold text-gray-800 hover:text-gray-600'>Yathartha Shrestha</a>
                <span className='text-sm text-gray-500'>CEO and Founder</span>
        </div>
    </div>
  )
}

export default Author