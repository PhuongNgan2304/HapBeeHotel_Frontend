import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css';

const CustomCalendar = () =>{
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startMonth, setStartMonth] = useState(new Date().getMonth());
    const currentDate = new Date();//Ngày hiện tại
    currentDate.setHours(0, 0, 0, 0)// Đặt giờ, phút, giây và mili giây thành 0 để có được ngày bắt đầu của ngày hiện tại

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [hoverDate, setHoverDate] = useState(null);

    const [dateRange, setDateRange] = useState([null, null]);

    // const datee = new Date();
    // console.log(datee.toISOString)

    const prices = {
        "2024-06-01": 1050000,
        "2024-06-02": 1100000,
        "2024-06-03": 1150000,
        "2024-06-04": 1200000,
        "2024-06-05": 1250000,
        "2024-06-06": 1300000,
        "2024-06-07": 1350000,
        "2024-06-08": 1400000,
        "2024-06-09": 1450000,
        "2024-06-10": 1500000,
        "2024-06-11": 1550000,
        "2024-06-12": 1600000,
        "2024-06-13": 1650000,
        "2024-06-14": 1700000,
        "2024-06-15": 1750000,
        "2024-06-16": 1800000,
        "2024-06-17": 1850000,
        "2024-06-18": 1900000,
        "2024-06-19": 1950000,
        "2024-06-20": 2000000,
        "2024-06-21": 1000000,
        "2024-06-22": 1200000,
        "2024-06-23": 900000,
        "2024-06-24": 950000,
        "2024-06-25": 1000000,
        "2024-06-26": 1050000,
        "2024-06-27": 1100000,
        "2024-06-28": 1150000,
        "2024-06-29": 1200000,
        "2024-06-30": 1250000
    }
    const handleDateChange = (date) =>{
        if(!startDate || (startDate && endDate)){
            setStartDate(date);
            setEndDate(null);
        } else {
            if(date < startDate){
                setEndDate(startDate);
                setStartDate(date);
            } else{
                setEndDate(date);
            }
        }
    };

    const handleMouseEnter = (date) => {
        if (startDate && !endDate) {
            setHoverDate(date);
        }
    };

    const isSameDate = (date1, date2) => {
        if (date1 instanceof Date && date2 instanceof Date){
            //return date1.toISOString().split('T')[0] === date2.toISOString().split('T')[0];
            return date1.toLocaleDateString('en-CA') === date2.toLocaleDateString('en-CA');
        }
    };

    const isInRange = (date) => {
        if(!startDate || !endDate) return false;
        return date >= startDate && date <= endDate;
    }
    // const isInRange = (date) => {
    //     const [start, end] = dateRange;
    //     if (!start || !end) return false;
    //     return date >= start && date <= end;
    // };

    
    const isPastDate = (date) => {
        // Kiểm tra nếu date là ngày trong quá khứ (không tính ngày hiện tại)
        if(date instanceof Date){
            return date < currentDate && !isSameDate(date, currentDate);
        }
    };

    const handleActiveStartDateChange = ({ activeStartDate  }) =>{
        if (activeStartDate instanceof Date) {
            setStartMonth(activeStartDate.getMonth());
        }
    }

    const isHoverRange = (date) => {
        if (!startDate || endDate || !hoverDate) return false;
        if (hoverDate > startDate) {
            return date > startDate && date < hoverDate;
        }
        return date > hoverDate && date < startDate;
    };
    
    const renderTileContent = ({date, view}) => {
        if (view === 'month' && date instanceof Date){
            // const dateString = `${year}-${month}-${day}`;
            const dateString = date.toLocaleDateString('en-CA'); // en-CA gives format YYYY-MM-DD   
            const price = prices[dateString];
            const isPastDate = date < currentDate && !isSameDate(date, currentDate);
            //const isSelected = isSameDate(date, selectedDate);
            const isSelected = (startDate && isSameDate(date, startDate)) || (endDate && isSameDate(date, endDate));
            const inRange = isInRange(date) || isHoverRange(date);
            const isHover = isHoverRange(date);
            // const isSelected = dateString === selectedDate.toLocaleDateString('en-CA');
            return (
                <div
                    // className={`tile-content ${isSelected ? 'selected' : ''} ${isPastDate ? 'past' : ''}`}>
                    className={`tile-content ${isSelected ? 'selected' : ''} ${inRange ? 'in-range' : ''} ${isPastDate ? 'past' : ''} ${isHover ? 'hover-range' : ''}`}
                    onMouseEnter={() => handleMouseEnter(date)}
                >
                    {price && <div className='price'>{price.toLocaleString('en-US', { style: 'currency', currency: 'VND' })}</div>}
                
                </div>
            );   
        }
    };

    

    return(
        <div className='calendar-container'>
            <Calendar
                // onChange={setSelectedDate}
                // value={selectedDate}
                selectRange={true}
                onChange={handleDateChange}
                value={startDate}
                //onMouseOver={({ activeStartDate, date }) => handleMouseEnter(date)}
                tileContent={renderTileContent}
                tileDisabled={({ date }) => isPastDate(date)}
                view='month'
                //Hiển thị tháng hiện tại
                activeStartDate={new Date(selectedDate.getFullYear(), startMonth, 1 )}
                onActiveStartDateChange={handleActiveStartDateChange}
            />

            {/* <Calendar
                // onChange={setSelectedDate}
                // value={selectedDate}
                selectRange={true}
                onChange={handleDateChange}
                value={startDate}
                //onMouseOver={({ activeStartDate, date }) => handleMouseEnter(date)}
                tileContent={renderTileContent}
                tileDisabled={({ date }) => isPastDate(date)}
                view='month'
                //Hiển thị tháng kế tiếp
                activeStartDate={new DSate(selectedDate.getFullYear(), startMonth+1, 1)}
                onActiveStartDateChange={handleActiveStartDateChange}
            /> */}
        </div>
    );
};

export default CustomCalendar;