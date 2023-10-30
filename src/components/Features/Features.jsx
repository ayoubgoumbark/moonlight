import React from 'react';
import pic1 from "../../assets/pic1.jpg"
import pic3 from "../../assets/pic3.jpg"
import pic4 from "../../assets/pic4.jpg"

import './Features.css';
const Features = () => {
  
  return (
    <div name='Features' className=' panel py-10 px-5   skills   bg-gray-100  relative  w-full   text-black'>
 <h2 className="text-3xl font-semibold text-center mb-6 ">Adventure Highlights</h2>



      <div className='flex flex-col md:flex-row gap-y-[20px] md:gap-x-[2%] h-full  '>

        <div className='flex flex-col gap-y-[20px] md:gap-x-[2%] justify-between leading-[4]     '>
          <figure className="md:flex bg-white  border-gray-300  rounded-lg border-2">

            <img src={pic3} alt="" className=" rounded-tl-lg rounded-tr-lg  object-cover  w-full md:w-1/2 md:h-auto  mx-auto" />


            <div className="p-6 md:p-8 text-center md space-y-4 ">
              <blockquote>
                <p className='text-2xl mb-5 font-bold text-black '>Stunning Nightscapes:</p>
                <p className="text-lg text-black ">
                 Immerse yourself in the mesmerizing beauty of starlit skies and moonlit landscapes.
                </p>
              </blockquote>
             
            </div>
          </figure>

          <figure className="md:flex bg-white  border-gray-300     rounded-lg border-2">

            <img src={pic4} alt="" className=" rounded-tl-lg rounded-tr-lg  object-cover  w-full md:w-1/2 md:h-auto  mx-auto" />


            <div className="p-6 md:p-8 text-center md space-y-4">
              <blockquote>
              <p className='text-black  font-bold text-2xl mb-5 '>Nighttime Cuisine</p>
                <p className="text-lg text-black ">
                Savor outdoor cooking under the stars with Moonlight Odyssey. Explore campfire delights, nocturnal delicacies, and cooking workshops. It's where culinary adventures meet the magic of the night. Indulge your taste buds and create unforgettable memories.
                </p>
              </blockquote>
             
            </div>
          </figure>
        </div>
        <div className="md:flex flex-col  bg-white   rounded-lg border-2 border-gray-300">

          <img src={pic1} alt="" className=" rounded-tl-lg rounded-tr-lg  object-cover  w-full md:h-auto  mx-auto" />


          <div className="p-6 md:p-8 text-center md space-y-4">
            <blockquote>
              <p className='text-black text-2xl mb-5 font-bold '>Fireside Conversations:</p>
              <p className="text-lg text-black ">
              Engage in heartwarming conversations with fellow adventurers and our knowledgeable guides. Share your own stories, ask questions, and learn from the experiences of others.
              </p>
            </blockquote>
          
          </div>
        </div>



      </div>
    </div>
  );
};

export default Features;
