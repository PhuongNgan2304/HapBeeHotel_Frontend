import React, { useEffect, useState } from 'react';
import { Transition, CSSTransition } from 'react-transition-group';
import { DatePicker, Space } from 'antd';
import 'antd/dist/reset.css';
import moment from 'moment';
import './Bookbtn.css';
import { IoMdReturnLeft } from 'react-icons/io';

const Triangularbutton = () =>{
    const [showModal, setShowModal] = useState(false);
    const [disappearModal, setDisappearModal] = useState(false);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [showToast_1, setShowToast_1] = useState(false);
    const [showToast_2, setShowToast_2] = useState(false);

    const handleBookNowClick = () =>{
        setShowModal(true);
        setDisappearModal(false);
    };

    // const handleCloseModal = () =>{
    //     setShowModal(false);
    // };

    const handleCloseModal = () =>{
        setDisappearModal(true);
    };

    useEffect(() => {
        if (disappearModal) {
            const timeout = setTimeout(() => {
                setShowModal(false); // Sau khi hoàn thành hiệu ứng biến mất, đặt lại setShowModal(false) để ẩn modal hoàn toàn
            }, 300); // Độ dài của animation fadeOut, phù hợp với giá trị trong keyframes
            return () => clearTimeout(timeout);
        }
    }, [disappearModal]);

    const handleCheckInDateChange = (event) =>{
        setCheckInDate(event.target.value);
        if (checkOutDate && event.target.value > checkOutDate){
            setCheckOutDate('');
        }
    };

    const handleCheckOutDateChange = (event) => {
        setCheckOutDate(event.target.value);
    }
    
    const handleSubmit = () =>{
        if(checkInDate === '' && checkOutDate === ''){
            setShowToast_1(true);
            setShowToast_2(true);
            return;
        }

        if(checkInDate === checkOutDate){
            setShowToast(true);
            return;
        }

        if(checkInDate === ''){
            setShowToast_1(true);
            return;
        }

        if(checkOutDate === ''){
            setShowToast_2(true);
            return;
        }

        
    }

    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    // const today = moment();
    // const minCheckOutDate = checkInDate ? checkInDate.clone().add(1,'day') : today.clone().add(1, 'day');

    // Tính toán ngày sau ngày check-in
    const dayAfterCheckIn = checkInDate ? new Date(checkInDate) : tomorrow;
    if(checkInDate){
        dayAfterCheckIn.setDate(dayAfterCheckIn.getDate() + 1);
    }
    const dayAfterCheckinStr = checkInDate ? dayAfterCheckIn.toISOString().split('T')[0] : tomorrowStr;
    
    // Chọn giá trị lớn hơn giữa ngày mai và ngày sau ngày check-in
    const minCheckOutDate = dayAfterCheckinStr > tomorrowStr ? dayAfterCheckinStr : tomorrowStr;

    useEffect(()=>{
        let timeout;
        if (showToast || showToast_1 || showToast_2) {
            timeout = setTimeout(() => {
                setShowToast(false);
                setShowToast_1(false);
                setShowToast_2(false);
            }, 3000); // Thời gian hiển thị toast
        }
        return () => clearTimeout(timeout);
    },[showToast, showToast_1, showToast_2]);

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

            {/* <CSSTransition
                in={true}
                timeout={500}
                classNames="bookbtn"
                appear
            >
                {state => (
                    <div className={`bookbtn ${state}`}>
                        <a href="#" onClick={handleBookNowClick}>
                            <span>BOOK NOW</span>
                            <span>BOOK NOW</span>
                        </a>
                    </div>
                )}
            </CSSTransition> */}

{showModal && (
            // <div className={`modal-overlay ${showModal ? 'show' : 'disappear'}`}>
            <div className={`modal-overlay ${disappearModal ? 'disappear' : ''}`}>
               
                    <div className='modal'>
                    {/* <div className={`modal ${disappearModal ? 'disappear' : ''}`}> */}
                        <div className='modal-header'>
                            <h2>Book Your Stay</h2>
                            <button className='close-button' onClick={handleCloseModal}>&times;</button>
                        </div>
                        <div className='modal-body'>
                            <div className='checkin'>
                                <label>
                                    Check-in Date  
                                    <input 
                                        type="date"
                                        value={checkInDate}
                                        onChange={handleCheckInDateChange}
                                        min={today}
                                    />
                                    {/* <DatePicker 
                                        value = {checkInDate}
                                        onChange={handleCheckinDateChange}
                                        disabledDate={(current) => current && current < today.startOf('day')}
                                    /> */}
                                </label>                        
                            </div>
                            <label className='checkout'>
                                Check-out Date 
                                <input 
                                    type="date"
                                    value={checkOutDate}
                                    onChange={handleCheckOutDateChange}
                                    min={minCheckOutDate}
                                />
                                {/* <DatePicker 
                                    value={checkoutDate}
                                    onChange={handleCheckoutDateChange}
                                    disabledDate={(current) => current && current <= (minCheckoutDate.startOf('day'))}
                                /> */}
                            </label>
                            <label className='guest'>
                                Guests  
                                <select>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="3">3 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="5">5 Guests</option>
                                <option value="6">6 Guests</option>
                                <option value="7">7 Guests</option>
                                <option value="8">8 Guests</option>
                                <option value="9">9 Guests</option>
                                <option value="10">10 Guests</option>
                                <option value="11">10+ Guests</option>
                                </select>
                            </label>
                        </div>
                        <div className='modal-footer'>
                            <button onClick={handleCloseModal}>Cancel</button>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>  
            </div>
        )}

        {showToast && (
            <div className='toast-container'>
                <div className='toast'>
                    Please select different check-in and check-out dates.
                </div>
            </div>
        )}

        {showToast_1 && (
            <div className='toast-container_1'>
                <div className='toast_1'>
                    Please select check-in date
                </div>
            </div>
        )}

        {showToast_2 && (
            <div className='toast-container_2'>
                <div className='toast_2'>
                    Please select check-out date.
                </div>
            </div>
        )}
    </>
    );
};

export default Triangularbutton;
