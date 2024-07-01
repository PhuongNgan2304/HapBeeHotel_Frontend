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


const Booking = () =>{
  return ( 
    <div className='pageWrapper'>
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

            <p className='hero-image_phoneIcon'>
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
    </div>
  );
};

export default Booking