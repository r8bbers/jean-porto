import HeroImage from "./assets/heroImg.png";
import Divider from "./assets/divider.png";
import { FaGithub, FaEnvelope, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import bgImage from "./assets/bubbles-bg.png";
import descImage from "./assets/descriptionImage.png";
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projectImage from "./assets/projectImg.png";
import dummyImage from "./assets/dummyImg.jpg"
import javaLogo from './assets/javaLogo.png';
import flutterLogo from './assets/flutterLogo.png';
import htmlLogo from './assets/htmlLogo.png';
import cssLogo from './assets/cssLogo.png';
import reactLogo from './assets/reactLogo.png';
import laravelLogo from './assets/laravelLogo.png';
import mysqlLogo from './assets/mysqlLogo.png';
import tailwindLogo from './assets/tailwindLogo.png';
import cLogo from './assets/cLogo.png';
import figmaLogo from './assets/figmaLogo.png';
import githubLogo from './assets/githubLogo.png';
import bootstrapLogo from './assets/bootstrapLogo.png';
import webReuse from './assets/webReuse.png';
import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [state, handleSubmit] = useForm("xyzjnvvn");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);
  
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      const timer = setTimeout(() => setShowSuccess(false), 3000);

      if (formRef.current) {
        formRef.current.reset();
      }

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
    
    {/* Hero Section */}
    <section className=" bg-white p-6">
      <div className="min-h-screen flex items-center justify-center p-6">
          <div className="w-full bg-[#005D90] rounded-2xl md:h-[800px] shadow-lg transition-all duration-500 px-6 md:px-10 py-6 md:py-12">
            <div className="flex flex-col md:flex-row items-center justify-between h-full gap-6 md:gap-10">

              {/* Left: Text */}
              <div className="text-white text-center md:text-left flex flex-col justify-center h-full min-w-0 flex-1">
                
                {/* Top Text (A - ...) */}
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                    A —{" "}
                    <span>
                      <Typewriter
                        words={[
                          'Web Developer',
                          'Sleepyhead',
                          'UI/UX Enthusiast',
                          'Cat Person',
                          'Cybersecurity Enthusiast',
                          'Bookworm',
                          '???',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                      />
                    </span>
                  </h1>
                </div>

                {/* Stacked Name */}
                <div className="mt- md:mt-25">
                  <h1 className="text-5xl md:text-8xl font-extrabold text-[#91B4CC] leading-tight">
                    JEANY<br />FLORENCIA
                  </h1>
                </div>

              </div>

              {/* Right: Image */}
              <div className="flex justify-center items-center flex-shrink-0">
                <div className=" p-2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] flex items-center justify-center mr-15 md:mr-10">
                  <img
                    src={HeroImage}
                    alt="Jeany waving"
                    className="object-contain h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    {/* End of Hero Section */}

    {/* About Me Section */}
    <section id="profile" className="bg-white p-4 px-6 md:px-20">
      <div className="flex h-full"> 
        {/* Left - Image */}
        <div className="p-2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center mr-6 md:mr-10">
          <img
            src={descImage}
            alt="Jeany waving"
            className="object-contain h-full"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#005D90] leading-tight mb-2">
            Hello!
          </h1>
          <p className="text-[#005D90] text-base md:text-lg leading-relaxed">
            My name is <strong>Jeany Florencia</strong> (She/They). You can call me <strong>Jean</strong> for short.
            I am a third year Informatics student at Atma Jaya Yogyakarta. I have a 
            huge interest towards UI/UX Design, and also Frontend Website Developing. Welcome to my portfolio and feel free to take a look to projects I’ve done below!
          </p>
          
          {/* Download CV Button */}
          <div className="mt-5">
            <a 
              href="/CV_Jeany Florencia.pdf" 
              download 
              className="bg-[#005D90] text-white rounded-xl py-1 px-4 inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End of About Me Section */}

    {/* Skills Carousel Section */}
    <section className="bg-[#005D90] px-6 md:px-20 py-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] leading-tight mb-8 text-center md:text-left">
          Tools I've Used..
        </h1>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 15 },
            768: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 25 },
          }}
          spaceBetween={10}
          grabCursor={true}
          freeMode={true}
        >
          {[
            { name: "Java", src: javaLogo },
            { name: "Flutter", src: flutterLogo },
            { name: "HTML", src: htmlLogo },
            { name: "CSS", src: cssLogo },
            { name: "React", src: reactLogo },
            { name: "Laravel", src: laravelLogo },
            { name: "MySQL", src: mysqlLogo },
            { name: "Tailwind", src: tailwindLogo },
            { name: "C", src: cLogo },
            { name: "Bootstrap", src: bootstrapLogo },
            // { name: "JavaScript", src: descImage },
            { name: "Figma", src: figmaLogo },
            { name: "Github", src: githubLogo },
          ].map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFFFFF] rounded-xl p-4 flex flex-col items-center justify-center w-[120px] h-[120px] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img
                  src={skill.src}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 mb-2 object-contain"
                />
                <p className="text-[#] text-sm font-bold text-center">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    {/* End of Skills Carousel Section */}

    {/* Project Header Section */}
    <section id="projects" className="bg-white px-6 md:px-20 py-10 flex items-center justify-between">
      
      {/* Left side - layered "PROJECTS" text */}
      <div className="relative w-[450px] h-[100px]">
        <h1 className="text-[64px] font-bold text-[#005D90] opacity-20 absolute bottom-8 left-2">
          PROJECTS
        </h1>
        <h1 className="text-[64px] font-bold text-[#005D90] opacity-30 absolute bottom-4 left-8">
          PROJECTS
        </h1>
        <h1 className="text-[64px] font-bold text-[#005D90] opacity-100 absolute bottom-0 left-14">
          PROJECTS
        </h1>
      </div>

      {/* Right side - image */}
      <div className="w-[180px] md:w-[250px]">
        <img src={projectImage} alt="Project" className="w-full h-auto object-contain" />
      </div>
    </section>
    {/* End of Project Header Section */}

    {/* Projects Section */}
        <section className="bg-white px-6 md:px-20 py-10 space-y-14 text-[#005D90]">
         
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Carousel Image */}
            <div className="w-full md:w-[500px] rounded-xl border-4 border-[#005D90] overflow-hidden">
              <Swiper
                modules={[ Pagination, Autoplay]}
                
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay:3000, disableOnInteraction: false }}
              >
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 1" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 2" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 3" className="w-full h-auto" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                ReUseMart (Website) <span className="flex-grow h-[2px] bg-[#005D90]"></span>
              </h2>
              <p className="mt-2 text-sm">
                ReUseMart is a website based e-commerce made as a capstone project for Software Development Project course. Made by team of 3, ReUseMart is an e-commerce with focus on selling secondhand stuffs. With React Vite, I managed to create sign-up system, reset password method, seller profile, and also purchase transaction.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">React Vite</span>
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">Laravel</span>
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">MySQL</span>
              </div>
            </div>
          </div>
          {/* End of Project 1 */}

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
            
            {/* Carousel Image */}
            <div className="w-full md:w-[500px] rounded-xl border-4 border-[#005D90] overflow-hidden">
              <Swiper
                modules={[ Pagination, Autoplay]}
                
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay:3000, disableOnInteraction: false }}
              >
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 1" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 2" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 3" className="w-full h-auto" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                ReUseMart (Mobile) <span className="flex-grow h-[2px] bg-[#005D90]"></span>
              </h2>
              <p className="mt-2 text-sm">
                ReUseMart is a website based e-commerce made as a capstone project for Software Development Project course. Made by team of 3, ReUseMart is an e-commerce with focus on selling secondhand stuffs. With React Native, I managed to create log in system for all role, and also focused on courier functionality, such as profile, page contains list of packages to deliver, and also history of package sent by the courier.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">React Native</span>
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">Laravel</span>
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">MySQL</span>
              </div>
            </div>
          </div>
          {/* End of Project 2 */}

          {/* Project 3 */}
          {/* <div className="flex flex-col md:flex-row items-center md:items-start gap-6"> */}
            
            {/* Carousel Image */}
            {/* <div className="w-full md:w-[300px] rounded-xl border-4 border-[#005D90] overflow-hidden">
              <Swiper
                modules={[ Pagination, Autoplay]}
                
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay:3000, disableOnInteraction: false }}
              >
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 1" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 2" className="w-full h-auto" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={webReuse} alt="Project 1 - Slide 3" className="w-full h-auto" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                ReUseMart (Website) <span className="flex-grow h-[2px] bg-[#005D90]"></span>
              </h2>
              <p className="mt-2 text-sm">
                ReUseMart is a website based e-commerce made as a capstone project for Software Development Project course. Made by team of 3, ReUseMart is an e-commerce with focus on selling secondhand stuffs. With React Vite, I managed to create sign-up system, reset password method, seller profile, and also purchase transaction.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">React Vite</span>
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">Laravel</span>
                <span className="bg-[#005D90] text-white px-3 py-1 rounded-full text-xs">MySQL</span>
              </div>
            </div>
          </div> */}
          {/* End of Project 3 */}

        </section>
    {/* End of Project Section */}
    
    {/* Contact Section */}
      <section id="contact" className="bg-white px-6 md:px-20 py-16 text-[#005D90]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Left Column - Socials */}
            <div>
              <h2 className="text-2xl font-bold uppercase mb-4">SOCIALS</h2>
              <ul className="space-y-2 text-lg font-semibold">
                <li><a href="https://github.com/r8bbers" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#005D90]">github</a></li>
                <li><a href="https://www.linkedin.com/in/jeany-florencia-07035b255/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#005D90]">linkedin</a></li>
                <li><a href="https://instagram.com/jflooos" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#005D90]">instagram</a></li>
              </ul>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#005D90] p-6 rounded-xl w-full max-w-md text-white">
              <h2 className="text-lg font-bold mb-4 text-white">Send some messages..</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 rounded-md text-white border"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                
                <label className="block text-sm mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 rounded-md text-white border"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                
                <button
                  type="submit"
                  className="bg-white text-[#005D90] px-4 py-1 rounded-md text-sm font-semibold"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send"}
                </button>
              </form>
            </div>

          </div>
      </section>
    {/* End of Contact Section */}
    
    {/* Footer Section */}
      <section className="bg-[#005D90] py-6">
          <p className="text-center text-white text-sm font-semibold">
            © 2025 Jeany Florencia. All rights reserved.
          </p>
      </section>
    {/* End of Footer Section */}
    </>
  );
}

export default App;
