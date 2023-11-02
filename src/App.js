import About from "./components/aboute/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import Reviews from "./components/Reviews/Reviews";
import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Loading from "./assets/loading.svg"
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer"

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setloading] = useState(true);
  function setdarkMode() {
   // setloading(true)
    setDarkMode(!darkMode)
   // setTimeout(() => {
    //  setloading(false)
  ////  }, 4000);

  }
  function loadimages(value) {

   

    if(value===2)
    {
      setloading(false)
      console.log("r")
    }
    
  }

  const component = useRef('');



  useEffect(() => {


   
     
      if(loading===false)
      {
        /*  const ctx = */ gsap.context(() => {


      ScrollTrigger.matchMedia({
	
        // large
        "(min-width: 960px)": function() {
          // setup animations and ScrollTriggers for screens 960px wide or greater...
          // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
                 /* aboute / dark trees animation */ 
                 gsap.from(component.current.querySelector(".top-card"), {
  
             
                  x:"-100%",
                   scrollTrigger: {
                     trigger: component.current.querySelector(".top-card "),
                   
                     start:"top 60%",
                     end:"top 80px",
                scrub:true,
                
                    
                   },
    
                   
           
                 })
                 gsap.from(component.current.querySelector(".bottom-card"), {
  
             
                  x:"100%",
                   scrollTrigger: {
                     trigger: component.current.querySelector(".bottom-card "),
                   
                     start:"0px 60%",
                     end:"top 80px",
                scrub:true,
                
                    
                   }
                 })
    
                 gsap.from(component.current.querySelector(".right-card"), {
      
                 
                  x:"-100%",
                   scrollTrigger: {
                     trigger: component.current.querySelector(".right-card "),
                   
                     start:"0px 60%",
                     end:"top 80px",
                scrub:true,
                
                    
                   }
                 })
    
    
    
                /*  scale images when scroll */
                gsap.from(component.current.querySelector(".top-card  img"), {
      
                 opacity:0,
                  scale:2,
                   scrollTrigger: {
                     trigger: component.current.querySelector(".top-card   "),
                   
                     start:"0px 60%",
                     end:"top 80px",
                scrub:true,
                
                    
                   },
    
                 })
                 
                gsap.from(component.current.querySelector(".bottom-card  img"), {
      
                  opacity:0,
                  scale:2,
                   scrollTrigger: {
                     trigger: component.current.querySelector(".bottom-card   "),
                   
                     start:"0px 60%",
                     end:"top 80px",
                scrub:true,
                
                    
                   },
    
                 })
                  
                gsap.from(component.current.querySelector(".right-card  img"), {
      
                  opacity:0,
                  scale:2,
                   scrollTrigger: {
                     trigger: component.current.querySelector(".right-card   "),
                   
                     start:"0px 60%",
                     end:"top 80px",
                scrub:true,
                
                    
                   },
    
                 })
        },
      
        // medium
        "(min-width: 600px) and (max-width: 959px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
       /* aboute / dark trees animation */ 
      
   
        },
      
        // small
        "(max-width: 599px)": function() {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore. 
         
    
        },
        
        // all 
        "all": function() {
          // ScrollTriggers created here aren't associated with a particular media query,
          // so they persist.

          /* header animation */ 
      const showAnim = gsap.from('.navbar', {
        yPercent: -100,
        paused: true,
        duration: 0.2
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        }
      });














      gsap.from(component.current.querySelector(".tree1"), {

        x:300,
         scrollTrigger: {
           trigger: component.current.querySelector(".tree1"),
           start:"bottom bottom",
           end:"top top",
           scrub: true,
          
         },
 
       })

       gsap.from(component.current.querySelector(".tree3"), {

         x:300,
         scrollTrigger: {
           trigger: component.current.querySelector(".tree3"),
          
           start:`center bottom`,
           end:`center center`,
         
           scrub: true,
         
         },
 
       })

       gsap.from(component.current.querySelector(".tree2"), {

        x:-300,
         scrollTrigger: {
           trigger: component.current.querySelector(".tree2"),
          
           start:"bottom bottom",
           end:"top top",
         
           scrub: true,
          
         },
 
       })

       gsap.from(component.current.querySelector(".tree4"), {

        x:-300,
         scrollTrigger: {
           trigger: component.current.querySelector(".tree4"),
          
           start:`center bottom`,
           end:`center center`,
        
           scrub: true,
          
         },
 
       })

      
















 /* aboute-details  animation    */ 
 /* 
 gsap.to(component.current.querySelector(".aboute"), {

y:"-100%",
scrollTrigger: {
trigger: component.current.querySelector(".aboute "),
start:"top bottom",
end:"bottom top",
scrub:true,

    
   },

 }) */










 // Pin the first panel
 gsap.to('.home', {
  scrollTrigger: {
    trigger: '.home',
    start: 'top top',
    pin: true,
    pinSpacing: false,
  },
});



// Create a ScrollTrigger for the second panel
ScrollTrigger.create({
  trigger: '.aboute',
  start: 'top top',
  end: 'top top', // Adjust this value as needed to control how far it should scroll above the first panel
  pin: true,
  pinSpacing: false,
 
});
















       

  
            
         


          


  
  
  
   /*panels animation  
        gsap.utils.toArray(".panel").forEach((panel, i) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            pin: true,
            pinSpacing: false
          });
         
        });
        
        ScrollTrigger.create({
          snap: 1 / 3 // snap whole page to the closest section!
        });
 */


        gsap.from(component.current.querySelector(".moon"), {
          left:"-20vw",
          rotationZ:360,
         duration:"3"
   
         })


        }
      })













      










    }, component);
   

  }
 

  }, [loading]);



















  



















  return (
   
 
<>
{loading &&  <img className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2" src={Loading} alt="error"/>
}

    <div  ref={component} className={darkMode ? `dark overflow-hidden ${loading ? 'hidden':''} ` : `overflow-hidden ${loading ? 'hidden':''}`}  >


     



  
  <Navbar setdarkMode={setdarkMode}/>
  <Home loadimages={loadimages} darkMode={darkMode}/>
  <About darkMode={darkMode}/>
  <Features />
  <Reviews />
  <Footer />
  












</div>

</>
    

  );
}

export default App;
