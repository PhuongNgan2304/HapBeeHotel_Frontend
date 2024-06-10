import React, { useEffect, useRef } from 'react';
import './Homepage.css';
import logo from './logo1_hapbee.png';
import { img_beach_building, img_beach, img_look, img_true_perf } from './images/Export_images';
import BeeIcon from './images/Bee_icon';
import { GoArrowDown } from "react-icons/go";

const Homepage = () => {
  const audioRef = useRef(null);

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

    images.forEach(image => {
      observer.observe(image);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      images.forEach(image => {
        observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className='container'>
      <BeeIcon/>
      <audio ref = {audioRef} src="./relaxing-audio-for-yoga-131673.mp3" loop autoPlay></audio>
      <section className='homepage'>
        <div className='hero-image'>
          <div className='hotel-name'>
            <img src={logo} alt="HapBee Hotel"/>
          </div>
          <div className='scrolldown'>
            <GoArrowDown size={40}/>
          </div>
          <div className='scrolldown-text'>
            <p>
              SCROLL DOWN<br />
              TO START THE EXPERIENCE
            </p>
          </div>
        </div>
      </section> 

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
          <div className="whitespace"></div>
        </div>
      </section>

      <section className='three'>
        <h1>Third Page</h1>
      </section>
    </div>
  );
};

export default Homepage;
