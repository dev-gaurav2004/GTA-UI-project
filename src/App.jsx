import react, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'

const App = () => {

  let [showContent , setshowContent] = useState(false);
  
  useGSAP(()=>{
    let tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:15,
      duration:2,
      ease:'Power4.easeInOut',
      transformOrigin:'50% 50%'
    })
    .to('.vi-mask-group' , {
      scale:10,
      duration:2,
      ease:'expo.inOut',
      transformOrigin:'50% 50%',
      delay:-1.6,
      opacity:0,

      onUpdate: function(){
        if(this.progress() >= 0.8){
          document.querySelector('.svg').remove();
          this.kill();
          setshowContent(true);
        }
      }
    })
  })

  useGSAP(()=>{
   if(!showContent) return;

   gsap.to('.main',{
    scale:1,
    rotate:0,
    duration:2,
    delay:-0.8,
    ease:'expo.inOut',
   });

   gsap.to('.sky',{
    scale:1.2,
    rotate:0,
    duration:2,
    delay:-0.8,
    ease:'expo.inOut',
   });

   gsap.to('.background',{
    scale:1.2,
    rotate:0,
    duration:2,
    delay:-0.8,
    ease:'expo.inOut',
   });

   gsap.to('.girl',{
    scale:1,
    x:'-50%',
    rotate:0,
    duration:2,
    delay:-0.8,
    ease:'expo.inOut',
   })

    let main = document.querySelector('.main');

    main?.addEventListener('mousemove',function(e){

      let xmove = (e.clientX / window.innerWidth - 0.6) * 40;

      gsap.to('.main .landing .images .text',{
        x:`${xmove * 0.5}%`,
      });

      gsap.to('.main .landing .images .sky', {
        x: xmove,
      });

      gsap.to('.main .landing .images .background', {
        x: xmove * 1.8,
      });

    })
  },[showContent])



  return(
    <>
      <div className="svg flex items-center w-full h-screen overflow-hidden bg-[#000]">

         <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="220"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className='main w-full scale-[1.4] rotate-[-10deg]'>
          <div className="landing w-full h-screen bg-black relative">

            <div className="navbar w-full px-8 py-6 z-[50] absolute top-0 left-0 flex gap-4 leading-none ">
              <div className="lines flex flex-col gap-1 ">
                <div className="line w-10 h-1.5 bg-white "></div>
                <div className="line w-7 h-1.5 bg-white "></div>
                <div className="line w-4 h-1.5 bg-white "></div>
              </div>

              <h3 className='text-white text-2xl -mt-2.5'>Rokstar</h3>
            </div>

            <div className="images w-full h-screen relative overflow-hidden">
              
              <img className='sky w-full h-full scale-[1.5] rotate-[-15deg] object-cover absolute' src="/sky.png" alt="" />

              <img className='background w-full h-full scale-[1.5] rotate-[-15deg] object-cover absolute' src="/bg.png" alt="" />

              <div className='text text-[8rem] absolute top-0 left-1/2 -translate-x-1/2 text-white leading-none'>
                <h1 className='-ml-40'>grand</h1>
                <h1 className='ml-20'>theft</h1>
                <h1 className='-ml-40'>auto</h1>
              </div>

              <img className='girl absolute h-[130%] scale-[1.8] rotate-[-25deg] -bottom-[45%] left-1/2 -translate-x-1/2' src="/girlbg.png" alt="" />

            </div>

            <div className="bottombar w-full px-8 py-6 z-[50] absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent">
              <div className='text-white flex gap-2 items-center w-fit'>
                <i className="text-2xl font-bold ri-arrow-down-long-line"></i>
                <h1 className='text-xl'>Scroll Down</h1>
              </div>
              <img className='w-[20%] absolute left-1/2 bottom-2 -translate-x-1/2 leading-none' src="/ps5.png" alt="" />
            </div>

          </div>

          <div className="nextpage w-full h-screen bg-black flex justify-center">

           <div className='w-[30%] py-30 relative'>
             <img className='scale-[1.2] absolute left-1/2 -translate-x-1/2' src="/imag.png" alt="" />
           </div>

            <div className="info text-white w-[30%] py-30 flex flex-col justify-center gap-5 ">
              <h1 className='text-6xl'>Its Running, <br /> Not Hunting</h1>

              <p className='font-sans text-[0.9rem]/4 text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam saepe necessitatibus iusto deserunt aspernatur quasi perferendis nam tempora error hic, explicabo beatae magni esse aut mollitia, amet autem deleniti aliquam?</p>

              <p className='font-sans text-[0.9rem]/4 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor magnam error corporis hic facilis quia in cupiditate est doloremque, suscipit debitis, doloribus, eius perferendis omnis tempore culpa fuga esse. Qui!
              </p>

              <p className='font-sans text-[0.9rem]/4 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias laborum quos velit ipsum quisquam voluptatum vitae porro saepe! Consectetur?</p>

              <button className='bg-red-500 w-[60%] py-4 text-xl text-black'>Download Now</button>

            </div>

            
          </div>
        </div>
      )}
    </>
  )
}


export default App