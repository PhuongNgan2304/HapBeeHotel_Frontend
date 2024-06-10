import React, { useEffect } from 'react'
import beeIcon from './bee_cursor.png';
import './BeeIcon.css';

const BeeIcon = () =>{
    useEffect(()=>{
        // const handleMouseMove = (event) =>{
        //     const bee = document.querySelector('.bee-icon');
        //     bee.style.left = `${event.pageX}px`;
        //     bee.style.top = `${event.pageY}px`;
        // };
        // document.addEventListener('mousemove', handleMouseMove);

        // return () =>{
        //     document.removeEventListener('mousemove', handleMouseMove);
        // };
        let bee = null;
        let mouseX = 0, mouseY = 0;
        let beeX = 0, beeY = 0;

        const handleMouseMove = (event) =>{
            mouseX = event.pageX;
            mouseY = event.pageY;
        };

        const updateBeePosition = () =>{
            const speed = 0.1;
            beeX += (mouseX - beeX) * speed;
            beeY += (mouseY - beeY) * speed;

            if(bee){
                bee.style.transform = `translate3d(${beeX}px, ${beeY}px, 0)`;
            }

            requestAnimationFrame(updateBeePosition)
        };

        document.addEventListener('mousemove', handleMouseMove);

        bee = document.querySelector('.bee-icon');
        requestAnimationFrame(updateBeePosition);

        return () =>{
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <img src={beeIcon} alt="Bee Icon" className='bee-icon' />
};

export default BeeIcon;