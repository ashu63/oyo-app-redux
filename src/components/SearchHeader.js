import React from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useHistory } from "react-router";


function SearchHeader() {

  const history = useHistory()

  return (
    <div className=" searchHeader flex items-center -mt-3 sticky -top-3 bg-white z-100">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_(logo).png"
        alt=""
        className="h-14 ml-20 mr-20 flex items-center mt-5 cursor-pointer"
        onClick={() => history.push('/')}
      />
      <div className="max-w-8xl flex justify-center pt-5 h-20 ">
        <input
          type="search"
          className="banner__input2 border-r-2 z-100 relative focus:outline-none pl-6 border  "
          placeholder="Search by city, hotel, or neighborhood"
        />
        <RangeDatePicker
          className="w-full  "
          startDate={new Date(2021, 5, 6)}
          endDate={new Date(2021, 5, 7)}
          startDatePlaceholder="From"
          endDatePlaceholder="To"
          highlightToday
        />
        <button className="w-40 text-white text-lg font-bold banner__button2 transition hover:bg-green-600 focus:outline-none">
          Search
        </button>
        <button className=" flex items-center mr-8 font-bold  px-5 focus:outline-none"><PersonOutlineIcon className="mr-1"/>Login<span className="mx-1">/</span>Signup</button>
      </div>
    </div>
  );
}

export default SearchHeader;
