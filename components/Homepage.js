import React from 'react'
import Author from "./Author";
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css'
import Image from 'next/image'




function Homepage() {

  SwiperCore.use([Autoplay]);

  return (
    <section className='py-16'>
      <div className="container mx-auto md:px-20">
       <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

          <Swiper
          slidesPerView={1}
          autoplay={{
            delay:2000
          }}
          loop={true}
          >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>

          </Swiper>



    </div>
    </section>
  )
}


function Slide() {
    return (
      <div className="grid md:grid-cols-2">
        <div className="images">
            <a>
            <Image
                src={"/images/blogpic.jpg"}                
                className="rounded"
                height={400}
                width={500}
              />
              
            </a>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="cat">
              <a className="text-orange-600 hover:text-orange-800">
                Business, Travel
              </a>
              <a className="text-gray-800"> - June 10, 2022</a>
          </div>
          <div className="title">
              <a className="text-3xl cursor-pointer md:text-6xl font-bold text-gray-800 hover:text-gray-600">
                Your most unhappy customers are your greatest source of learning
              </a>
          </div>
          <p className="text-gray-500 py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            porro fuga, culpa reprehenderit odit harum perspiciatis, dolorum
            repudiandae expedita repellat voluptate nesciunt, maxime alias
            incidunt. Ut fuga cum blanditiis corporis?
          </p>
          <Author />
        </div>
      </div>
    );
  }

export default Homepage