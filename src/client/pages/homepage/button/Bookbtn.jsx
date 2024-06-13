import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import './Bookbtn.css';

const Triangularbutton = () =>{
    const [showModal, setShowModal] = useState(false);

    const handleBookNowClick = () =>{
        setShowModal(true);
    };

    const handleCloseModal = () =>{
        setShowModal(false);
    };

    return (
        <>
        <Transition in={true} timeout={500}>
        {state => (
            <div className={`bookbtn ${state}`}>
                <a href="#" onClick={handleBookNowClick}>
                    <span>BOOK NOW</span>
                    <span>BOOK NOW</span>
                </a>
            </div>
        )}
    </Transition>
    {showModal && (
            <div className={`modal-overlay ${showModal ? 'show' : ''}`}>
                <div className='modal'>
                    <div className='modal-header'>
                        <h2>Book Your Stay</h2>
                        <button onClick={handleCloseModal}>&times;</button>
                    </div>
                    <div className='modal-body'>
                        <div className='checkin'>
                            <label>
                                Check-in Date  
                                <input type="date"/>
                            </label>                        
                        </div>
                        <label className='checkout'>
                            Check-out Date 

                            <input type="date" />
                        </label>
                        <label className='guest'>
                            Guests  

                            <select>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            </select>
                        </label>
                    </div>
                    <div className='modal-footer'>
                        <button onClick={handleCloseModal}>Close</button>
                        <button>Book Now</button>
                    </div>
                </div>  
            </div>  
        )}
    </>
    );
};

export default Triangularbutton;