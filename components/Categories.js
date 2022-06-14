import React from 'react'
import Author from './Author'
import Image from 'next/image'

function Categories() {
  return (
    <div className='container mx-auto md:px-20 py-10'>
        <div className="grid lg:grid-cols-2 ">
            <div className="item">
                <h1 className="py-12 font-bold text-4xl">Beauty</h1>
                <div className="flex flex-col gap-6">
                    {/* POst */}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </div>

            <div className="item">
                <h1 className="py-12 font-bold text-4xl">Sustainability</h1>
                <div className="flex flex-col gap-6">
                    {/* POst */}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories

function Post() {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col justify-start">
            <Image
                src={"/images/blogpic.jpg"}                
                className="rounded"
                height={250}
                width={300}
              />
            </div>

            <div className="info flex justify-center flex-col">
            <div className="cat">
              <a className="text-orange-600 hover:text-orange-800">
                Business, Travel
              </a>
              <a className="text-gray-800"> - June 10, 2022</a>
          </div>
          <Author></Author>
            </div>
        </div>
    )
}