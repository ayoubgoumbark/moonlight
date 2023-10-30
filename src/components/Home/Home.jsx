import React from 'react';

import './Home.css';

import moon from "../../assets/moon.png"
import blacksky from "../../assets/blacksky.jpg"


const Home = (props) => {

  var nbrimages=0;

  const handleImageLoad = () => {
    nbrimages++;
    console.log("loaded");
    props.loadimages(nbrimages)
   };
  return (
    <div name='home' className='relative panel home w-full h-screen '>
     


      <img   onLoad={handleImageLoad} src={  blacksky } alt="" className="h-screen w-full absolute  object-cover"/>



      <div className='   mx-auto px-8 flex flex-col justify-center h-full'>
  
<div className='grid gap-2 description-profile  '>

 
        <h1 className='text-center sm:text-start text-4xl sm:text-5xl font-bold text-[#4f2f54] dark:text-white'>
        Moonlight Odyssey
        </h1>
        <h2 className='text-center sm:text-start  text-2xl sm:text-3xl font-bold text-[#464f5e] dark:text-[#bdbdbd]'>
        Unveil the Secrets of the Night
        </h2>
    
        <div className='  t-4 flex absolute bottom-20  md:bottom-6 w-full left-0 sm:static   justify-center sm:justify-start'>
          <a href='https://drive.google.com/file/d/1esmZo2mWYMVbnHgs3x4Ry-_OLj1mHWbA/view?usp=share_link' className=' border-2 dark:border-white md:dark:border-black border-[#4f2f54] dark:bg-black bg-[#4f2f54] text-white   dark:text-white hover:dark:text-[#4f2f54] group  px-6 py-3  flex items-center hover:dark:bg-white hover:dark:border-white'>
           <span className='hover:dark:font-bold' >Join</span> 
           <span className=''>
             
            </span>
          </a>
        
        </div>

</div>
       

        <img   onLoad={handleImageLoad} className='moon sm:w-1/2 sm:right-0 sm:absolute ' src={moon} alt="invalid" />



        
        
      </div>
    </div>
  );
};

export default Home;
