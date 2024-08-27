import React, { useEffect, useRef, useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './Homepage.css';
import logo from './logo1_hapbee.png';
import { img_beach_building, img_beach, img_look, img_true_perf, flower_1 } from './images/Export_images';
import BeeIcon from './images/Bee_icon';
import Bookbtn from './button/Bookbtn'
import { GoArrowDown } from "react-icons/go";
// import LocomotiveScroll from 'locomotive-scroll';
// import LocomotiveScroll_CSS from 'locomotive-scroll/dist/locomotive-scroll.css';

const Homepage = () => {
  const audioRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);
  // const [showBookNow, setShowBookNow] = useState(false);

  useEffect(() => {
    // const scroll  = new LocomotiveScroll ({
    //   el: document.querySelector('.container'),
    //   smooth: true
    // });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const section = document.querySelector('.homepage');
      if (scrollTop > lastScrollTop) {
        // Cuộn xuống
        section.classList.add('scrolled-down');
        section.classList.remove('scrolled-up');
      } else {
        // Cuộn lên
        section.classList.add('scrolled-up');
        section.classList.remove('scrolled-down');
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); 
    };
  
    window.addEventListener('scroll', handleScroll);

    setTimeout(() => {
      document.querySelector('.homepage').style.opacity = '1';
      document.querySelector('.hotel-name img').style.opacity = '1';
      //document.querySelector('.Booknow').style.opacity = '1';
      
      //setShowBookNow(true); 
    }, 500);
    
    if(audioRef.current){
      audioRef.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    };
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const images = document.querySelectorAll('.img-container img');
    const flower_image = document.querySelectorAll('.flower-background img');
    const text = document.querySelectorAll('.reveal');
    // const text = document.querySelectorAll('.introText-right p');

    images.forEach(image => {
      observer.observe(image);
    });

    flower_image.forEach(f_image =>{
      observer.observe(f_image);
    })

    text.forEach(t =>{
      observer.observe(t);
    })

    return () => {
      //scroll.destroy;

      window.removeEventListener('scroll', handleScroll);

      if (audioRef.current) {
        audioRef.current.pause();
      }
      images.forEach(image => {
        observer.unobserve(image);
      });
      flower_image.forEach(f_image =>{
        observer.unobserve(f_image);
      });
      text.forEach(t => {
        observer.unobserve(t);
      });
    };
  }, [lastScrollTop]);

  return (
    <div className='container'>
      <BeeIcon/>
      <div className="Booknow">
          <Bookbtn/>
      </div>
      <audio ref = {audioRef} src="./relaxing-audio-for-yoga-131673.mp3" loop autoPlay></audio>
      <section className='homepage'>
        <div className='hero-image'>
          <div className='hotel-name'>
            <img src={logo} alt="HapBee Hotel"/>
          </div>
          <div className='scrolldown'>
            <Link to="section2" smooth={true} duration={500}>
              <GoArrowDown size={40}/>
            </Link>
          </div>
          <div className='scrolldown-text'>
            <p>
              SCROLL DOWN<br />
              TO START THE EXPERIENCE
            </p>
          </div>
        </div>
      </section> 

      <Element name="section2">
        <section className='two'>
          <div className="container_1">
            <div className="row" id="row-1">
              <div className="col">
                <div className="img-container img-container-left">
                  <img src={img_look} alt="img_look" />
                </div>
              </div>
              <div className="col">
                <div className="flower-background flower-background-right">
                  <img src={flower_1} alt="flower_1" />
                </div>
              </div>
              {/* <div className="col">
                <div className='flower_background right'>
                  <img src={flower_1} alt="flower_1" />
                </div>
              </div> */}
            </div>
            <div className="row" id="row-2">
              <div className="col"></div>
              <div className="col">
                <div className="img-container img-container-right">
                  <img src={img_beach} alt="img_beach" />
                </div>
              </div>
            </div>
            <div className="row" id="row-3">
              <div className="col">
                <div className="img-container img-container-left">
                  <img src={img_true_perf} alt="img_true_perf" />
                </div>
              </div>
              <div className="col"></div>
            </div>
            <div className="row" id="row-4">
              <div className="col"></div>
              <div className="col">
                <div className="img-container img-container-right">
                  <img src={img_beach_building} alt="img_beach_building" />
                </div>
              </div>
            </div>

            <div className="row" id="row-5">
              <div className="col"></div>
              <div className="col">
                <div className="introText-right reveal">
                  <p>
                    <strong>Tastemakers of Understated Chic Luxury</strong>
                    <br/>
                    <br/>
                    "Sitting atop the curvaceous cliffs of Italy’s Amalfi Coast, Casa Angelina offers a sublime slice of modern minimalism on the Mediterranean, with an emphasis on barefoot luxury and top-level gastronomy."
                    <br/>
                    <br/>
                    "Our 36-room hotel serves as a sanctuary, bearing a fresh, white-washed aesthetic that accentuates every space, from the azure sea and sky outside to the contemporary artworks on display inside."
                    <br />
                    <br />
                    "We work to ensure everything about your stay is true perfection, from our welcome amenities and the thoughtful turndown services to the curated dishes from our chefs and activities organized by our concierge."
                  </p>
                </div>
              </div>
            </div>

            <div className="row" id="row-6">
              <div className="col"></div>
              <div className="col">
                <div className="img-container img-container-right">
                  <img src={img_beach_building} alt="img_beach_building" />
                </div>
              </div>
            </div>

            <div className="whitespace"></div>
          </div>
        </section>
      </Element>

      <Element>
        <section className='three'>
          <h1>Third Page</h1>
        </section>
      </Element>
    </div>
  );
};

export default Homepage;
