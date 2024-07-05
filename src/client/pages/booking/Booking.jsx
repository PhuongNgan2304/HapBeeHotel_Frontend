// import React, { useEffect, useState } from 'react'
// import './Booking.css'
// import axios from 'axios'
// import server from '../../../api/APIPath';
// import RoomTag from '../../components/roomTag/RoomTag';
// import { useNavigate } from 'react-router-dom';
// import { useToast } from '@chakra-ui/react';

// const Booking = () => {
//   const navigate = useNavigate();
//   const toast = useToast();
//   const [rooms, getRooms] = useState([])
//   useEffect(() => {
//     fetchRooms();
//   }, [])
//   const fetchRooms = async() => {
//     axios.get(server+"/api/v1/room-type/all")
//     .then((response) => {
//       console.log(response)
//       getRooms(response.data)
//     })
//     // console.log(data)
//   }
  
//   const addItemsToCart = (room) => {
    

//   // axios.post(`${server}/api/v1/users/addRoomToCart/${room.id}`,  {
//   //     headers: {
//   //       'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
//   //     }
//   // }).then((response) => {
//   //     console.log(response);
//   //     navigate('/cart');
//   // }).catch((error) => {
//   //     console.log(error);
//   // });
//   axios({
//     method: 'post',
//     url: `${server}/api/v1/users/addRoomToCart/${room.id}`,
//     headers: {
//       'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
//     }
//   }).then((response) => {
//     console.log(response);
//     toast({
//       title: "Thêm phòng vào giỏ hàng thành công!",
//       status: "success",
//       duration: 9000,
//       isClosable: true,
//     })
//     // navigate('/cart');
//   }
//   )
//   }
//   return (
//     <div className='booking'>
//       <h2>Đặt phòng</h2>
//       <p>Danh sách phòng hiện có</p>
//       <div className="roomList">
//         {rooms.map((room) => (
//           <div className='roomItems'>
//           <button onClick={()=>addItemsToCart(room)} className='addToCart'>+</button>
//           <RoomTag room={room} id={room.id} key={room.id} />
//           </div>
//         ))}
//         </div>
//     </div>
//   )
// }

// export default Booking

import React, {useEffect, useState} from 'react';
import './Booking.css'
import { SlUser } from "react-icons/sl";
import { LuHotel } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";


const Booking = () =>{
  const[isGuestSelectionOpen, setIsGuestSelectionOpen] = useState(false);
  const[isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleGuestSelection = () =>{
    setIsGuestSelectionOpen(!isGuestSelectionOpen);
    setIsOverlayVisible(!isOverlayVisible);
  }
  return ( 
    <div className='pageWrapper'>

      {isOverlayVisible && (
        <div className='overlay-background' onClick={toggleGuestSelection}></div>
      )}
        <div className='user-bar_container'>
          <div className='user-bar_wrapper'>
            <div className='user-bar_left'>
              <a target="_blank" className='user-bar_logo' aria-label='HapBee Hotel homepage' href="/home"></a>
            </div>

            <div className='user-bar_right' role='navigation'>
              <div className='hotel-info_container' id='hotel-menu-flyout'>
                <button aria-haspopup="true" aria-expanded="false">
                  <LuHotel className='icon_hotel'/>
                  Hotel Info
                </button>
              </div>

              <div className='myaccount-container_container'>
                <div className='myaccount-container_user'>
                  <button aria-controls='myaccount-container-login' aria-expanded="false">
                    <SlUser className='icon_user' />
                    Members Group Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div id='hero-image' role='complementary' aria-labelledby='heroTitle' className='hero-image_hero'>
        <div className='hero-image_image'>
        </div>

        <div className='app_container'>
          <div className='hero-image_hotelDetails'>
            <p id='heroTitle' className='app_modalTitle hero-image_hotelName'> HapBee Hotel</p>
            <p className='hero-image_address'>
              <span className='hero-image_addressIcon' aria-hidden="true">
                <FaRegBuilding />
              </span>
              <span className='sr-only'>
                <span>Address:</span>
              </span>
              <span> 123 Thuy Van, Thang Tam, Vung Tau City, Ba Ria - Vung Tau</span>
            </p>

            <p className='hero-image_phone'>
              <span class="hero-image_phoneIcon" aria-hidden="true">
                <IoCallOutline />
              </span>
              <span className='sr-only'>
                <span>Phone:</span>
              </span>
              <a href="tel:+84093939110">+84093939110</a>
            </p>
          </div>
        </div>
      </div>

        <div className='app_page-animation'>
          <div className='product-availability-container_section'>
            <div className='app_container'>
              <div className='app_row'>
                <main id='mainContent' className='app_col-sm-12 app_col-md-12 app_col-lg-8'>
                  <header>
                    <div>
                      <div className='search-bar-container_wrapper'>
                        <div className='sr-only' aria-live='assertive' aria-relevant='all'></div>
                        <h2 className='sr-only'>
                          <span>Search Bar</span>
                        </h2>
                        <div className='search-bar-container_inner'>
                          <div className='search-bar-container_top'>
                            {/* <div className='search-bar-container_guestsWrapper' onClick={() => setIsOverlayVisible(isOverlayVisible)}> */}
                            <div className='search-bar-container_guestsWrapper'>
                              <button className='search-bar-container_guests' 
                                      aria-expanded="false" 
                                      onClick={toggleGuestSelection}
                                      style={{ backgroundColor: isGuestSelectionOpen ? '#EAEAEC' : '' }}
                              >
                                <SlUser className='icon-guest' style={{ color: isGuestSelectionOpen ? '#000' : '' }}/>
                                <span className='search-bar-container-guest_label'>
                                  <span>Guests</span>
                                </span>
                                {/* <span>? Adults</span>
                                ,  
                                <span> ? Children</span> */}
                                <div className='search-bar-container_caret'></div>
                              </button>

                              <div className={`guests-selection-flyout_container ${isGuestSelectionOpen ? 'open' : ''}`}  id='guests-selection-flyout'>
                                <fieldset>
                                  <legend>
                                    <div className='guests-selection-flyout_guestHeading'>
                                      <h2 className='app_subheading2'>
                                        <span>Select Guests</span>
                                      </h2>
                                    </div>
                                  </legend>
                                  <button className='guests-selection-flyout_closeButton' 
                                          aria-label='Close' 
                                          onClick={toggleGuestSelection}
                                          >
                                    <AiOutlineClose className='icon-close_guest' />
                                  </button>
                                </fieldset>
                              </div>
                            </div>





                            <button className='search-bar-container_checkIn' aria-label='Check-in .....' aria-expanded='false' aria-controls='calendar-flyout-container'>
                              <IoCalendarOutline className='icon-calendar' />
                              <span className='search-bar-container-calendar_label'>
                                <span>Check-in</span>
                              </span>
                            </button>
                            <button className='search-bar-container_checkOut' aria-label='Check-out .....' aria-expanded='false' aria-controls='calendar-flyout-container'>
                              <IoCalendarOutline className='icon-calendar' />
                              <span className='search-bar-container-calendar_label'>
                                <span>Check-out</span>
                              </span>
                            </button>
                          </div>
                          <div className='search-bar-container_advancedSearch'>

                          </div>
                          <div className='search-bar-container_mobileSearch'>

                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </main>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Booking