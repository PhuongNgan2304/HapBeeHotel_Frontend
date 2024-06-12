import React, { useEffect, useRef, useState } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import './Homepage.css';
import logo from './logo1_hapbee.png';
import { img_beach_building, img_beach, img_look, img_true_perf } from './images/Export_images';
import BeeIcon from './images/Bee_icon';
import { GoArrowDown } from "react-icons/go";

const Homepage = () => {
  const audioRef = useRef(null);
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.homepage').style.opacity = '1';
      document.querySelector('.hotel-name img').style.opacity = '1';
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
    const text = document.querySelectorAll('.reveal');
    // const text = document.querySelectorAll('.introText-right p');

    images.forEach(image => {
      observer.observe(image);
    });

    text.forEach(t =>{
      observer.observe(t);
    })

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      images.forEach(image => {
        observer.unobserve(image);
      });
      text.forEach(t => {
        observer.unobserve(t);
      });
    };
  }, []);

  return (
    <div className='container'>
      <BeeIcon/>
      <audio ref = {audioRef} src="./relaxing-audio-for-yoga-131673.mp3" loop autoPlay></audio>
      <section className='homepage'>
        <div className='hero-image'>
          <div className='booknow-btn'>
            
          </div>
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
              <div className="col"></div>
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
