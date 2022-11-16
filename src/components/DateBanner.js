import React, { useState } from "react";
import image1 from '../images/pablita-smart-house.png'
import image2 from "../images/cherry-rent.png";
import {
  RangeDatePicker,
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { useHistory } from "react-router";

function DateBanner() {

  const history = useHistory()
  const [inputLocation, setInputLocation] = useState("")

  return (
    <div className=" h-60 bg-red-600 relative">
      <img
        src={image2}
        alt=""
        className=" h-32 opacity-20 absolute left-80 top-2"
      />
      <img
        src={image1}
        alt=""
        className=" h-32 opacity-20 absolute left-180 top-6"
      />
      <p className="text-white text-3xl flex justify-center font-bold pt-6">
        World's Fastest Growing Hotel Chain
      </p>
      
      <div className="max-w-8xl flex justify-center pt-5 h-20 ">
      <input type="search" className="banner__input border-r-2 z-100 relative focus:outline-none pl-6" placeholder="Search by city, hotel, or neighborhood" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)}/>
        <RangeDatePicker
          className="w-full  "
          startDate={new Date(2021, 5, 6)}
          endDate={new Date(2021, 5, 7)}
          startDatePlaceholder="From"
          endDatePlaceholder="To"
          highlightToday

        />
        <button className="w-40 text-white text-lg font-bold banner__button transition hover:bg-green-600 focus:outline-none" onClick={() => history.push(`/search?query=${inputLocation}`)}>Search</button>
      </div>
    </div>
  );
}

export default DateBanner;
