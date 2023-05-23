import './App.css';
import { register } from 'swiper/element/bundle';
import { Autoplay, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-cards";

register();

function App() {

  const[girl, setGirl] = useState([]);
  const searchParams = new URLSearchParams(document.location.search)


  useEffect(() => {
      req()
  }, [])


  const req = async() => {
    await axios.get(`https://deviant-girls.online/girls/yanka-wildy${searchParams.get('app') !== null ? "?app=" : ""}`)
    .then((res) => {
      setGirl(res.data)
        if(res.status === 200){
          window.history.pushState({}, document.title, window.location.pathname);
        }else{
          axios.get(`https://deviant-girls.online/`)
        }
  })}



  const handlerClick = () => {
      window.location.href = girl.links[0].link
  }

  const handlerSubmit = (item) => {
    window.location.href = item
}

  return (
    
    <div className="App relative mt-5 max-md:mt-7">

    <div className="clouds"></div>


                  {/* HEADER */}

        <div className="flex flex-col mb-4">
          <p className="text-4xl max-md:text-6xl text-center pt-2 tracking-widest">{girl.nickname}</p>
            <div className=" flex items-center justify-center">
                <div className="blob green max-md:mt-1"></div>
                <p className='ml-1 max-md:text-xl tracking-widest'>online</p>
            </div>
        </div>

                            {/* SWIPER */}
          
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            autoplay={{delay:3000}}
            className="mySwiper"
          >
          {girl.avatars?.map((item, idx) => (
            <SwiperSlide key={idx} virtualIndex={idx} className='relative' >
              {idx === 0 ? <img src={item.avatar} alt=""/> 
              :  <div>
                    <div className="NOTblur" onClick={() => {handlerClick()}}>
                      <img src={item.avatar} alt="" />
                    </div>
                      <svg width="30" height="30" viewBox="0 0 126 126" fill="" xmlns="http://www.w3.org/2000/svg" className='absolute bottom-36 right-12 max-md:bottom-48 max-md:right-16'>
                            <defs>  
                              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%" > 
                                  <stop offset="0%" stopColor="#00C9F7">
                                      <animate attributeName="stop-color" values="#00C9F7; #ACE1E7; #00C9F7" dur="4s" repeatCount="indefinite"></animate>
                                  </stop>

                                  <stop offset="50%" stopColor="#54CDE6">
                                      <animate attributeName="stop-color" values="#54CDE6; #ACE1E7; #54CDE6" dur="4s" repeatCount="indefinite"></animate>
                                  </stop>

                                  <stop offset="100%" stopColor="#ACE1E7">
                                      <animate attributeName="stop-color" values="#ACE1E7; #60D5F0; #ACE1E7" dur="4s" repeatCount="indefinite"></animate>
                                  </stop>
                              </linearGradient> 
                          </defs>
                        <path fill="url('#logo-gradient')" d="M87.1172 59.6768H95.3623C96.4687 59.6768 97.3311 60.6611 97.3311 61.7676V105.08C97.3311 106.187 96.4687 107.049 95.3623 107.049H31.5C30.3936 107.049 29.5312 106.187 29.5312 105.08V61.7676C29.5312 60.6611 30.3936 59.6768 31.5 59.6768H76.7812V40.4814C76.7812 34.2051 71.6113 28.9131 65.2129 28.9131H61.3974C55.1211 28.9131 49.9551 34.2051 49.9551 40.4814V47.7422H39.4971V39.4971C39.4971 28.1768 46.7578 18.8252 57.9561 18.8252H68.5401C79.8604 18.8252 87.1211 28.1768 87.1211 39.4971V59.6768H87.1172ZM57.5859 94.5H69.1543L66.3232 82.0733C68.292 81.0889 69.6465 78.9981 69.6465 76.6592C69.6465 73.0918 66.8154 70.3828 63.3701 70.3828C59.9248 70.3828 57.2158 73.0918 57.2158 76.6592C57.2158 78.9981 58.5703 81.0889 60.5391 82.0733L57.5859 94.5Z"/>
                      </svg>
                      <a href={girl.links[0].link} className='absolute bottom-36 left-16 text-xl text-gray-300 font-bold tracking-widest unlock max-md:left-20 max-md:text-2xl'>UNLOCK</a>
                </div>
            }              
            </SwiperSlide>
          ))}
        </Swiper>
  
                              {/* LINKS */}

      <div className="flex flex-col items-center z-10">
      <p className=' text-lg mt-2 mb-2 h-full max-md:text-2xl max-s:w-80 max-sm:w-96 max-md:mt-4 max-md:mb-4 text-center tracking-widest'>{girl.additional_info}</p>

      {girl.links?.map((item, idx) => 
        item.flag === true ? <button className="blob purple mb-10 mx-1 font-semibold tracking-widest" key={idx} onClick={() => {handlerSubmit(item.link)}}>{item.title}</button> 
            : <button className="linkBtn mb-5 mx-1 tracking-widest" key={idx} onClick={() => {handlerSubmit(item.link)}}>{item.title}</button> 
      )}
      </div>
    </div>
  );
}

export default App;
