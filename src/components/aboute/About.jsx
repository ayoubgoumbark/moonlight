import React from 'react';


import tree1 from '../../assets/tree-top-right.svg';
import tree2 from '../../assets/tree-top-left.svg';
import tree3 from '../../assets/tree-bottom-right.svg';
import tree4 from '../../assets/tree-bottom-left.svg';

import tree from '../../assets/tree.svg';

import './Aboute.css';

const About = (props) => {
  return (
    <div name='about' className='aboute panel  relative  w-full pb-80 pt-10    dark:text-white text-black dark:bg-black bg-white'>
           <img src={ tree } alt="" className={` ${props.darkMode ? '-top-[4%]  md:-top-[21%]  ' : '-top-[4%] md:-top-[21%] '}     topaboute w-full  absolute z-20 object-contain`}/>
         
         
         
         
            

            

           <div className=' flex flex-col  items-center  w-full h-full '>
       
        
         
        
       <div className='md:w-1/2     '>
       <img  src={tree3} alt="" className=" tree3  absolute z-20 w-1/4  bottom-0 right-0"/>
           <img src={tree4} alt="" className="tree4   absolute z-20 w-1/4  bottom-0 left-0"/>
           <img src={tree1} alt="" className="tree1 absolute z-20 w-1/4  top-0 right-0" />
           <img src={tree2} alt="" className=" tree2  absolute z-20 w-1/4  top-0 left-0"/>

        
       <p className='aboute-title text-4xl font-bold   text-center block'>
       About Us
      </p>
    
        
           <p className=' text-2xl aboute-title text-center  leading-9 mt-4'>  At Moonlight Odyssey, we are passionate about unlocking the mysteries of the night and sharing its enchanting beauty with adventurers like you. Our mission is to provide unforgettable experiences that connect you with the magic of the nocturnal world.</p>  
           
        
       </div>



           <div className=' flex  mt-20 text-center '>
           <div className='flex-auto w-1/2 leading-10 ' > 
           <span className='block aboute-title font-bold  text-3xl '>What Sets Us Apart?</span>
<ul className='lg:flex lg:justify-between   mt-10'>
  <li><strong className='block'>Expert Guides:</strong> Our team consists of dedicated and knowledgeable guides who are experts in the field of night exploration. They bring a wealth of experience and a deep appreciation for the natural world.</li>
  <li ><strong className='block'>Unique Adventures: </strong>We offer carefully crafted adventures that go beyond the ordinary. Whether you're stargazing under a blanket of stars or observing elusive nocturnal wildlife, each experience is designed to be extraordinary.</li>
  <li><strong className='block'>Safety First:</strong>Your safety is our top priority. We provide all the necessary guidance and equipment to ensure your adventure is both thrilling and secure.</li>
</ul>


 </div>

           </div>

           <div className='flex flex-col mt-20 text-center  md:w-1/2 leading-10 ' > 
           <span className='block aboute-title font-bold  text-3xl '>Join Us on This Journey</span>
<p className='mt-10 px-6 md:px-0'>We invite you to join us on a journey that transcends the boundaries of day and night. Whether you're a seasoned night explorer or embarking on your first adventure, there's always something new to discover in the world of Moonlight Odyssey.</p>
           </div>
      

           </div>   
          
          





        
  </div>
  );
};

export default About;
