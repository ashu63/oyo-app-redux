import React, { useState } from "react";
import CheckInHeader from "../components/CheckInHeader";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import CreateIcon from "@material-ui/icons/Create";

import { useHistory } from "react-router";


function CheckIn() {
  const history = useHistory();
  const [phoneInput, setPhoneInput] = useState('');
  const [checkIn, setCheckIn] = useState(false)

  const checkInDone = (e) => {
    if (phoneInput === ""){
      alert("Phone Number is Required💀");
    }
    else if (phoneInput.length < 10){
      alert("Please Enter a valid Phone Number📞");
    }
    else{
      setCheckIn(true);
    }
  }

  return (
    <div>
      <CheckInHeader />
      <p className="mt-10 pl-36 text-red-600 font-semibold">
        <ArrowBackIosIcon onClick={() => history.push("/search/viewHotel?checkin=07%02%RFGHh&ROOMS=1&GUESTS=1&rooms_config=1&&HGYFTJJHH1233")}  className=" cursor-pointer"/> Modify your booking
      </p>

      <div className=" checkIn__container px-20 flex ml-16">
        <div className="checkIn__left mt-5">
          <div className="">
            <p className="bg-yellow-50 p-4 border border-yellow-300 text-yellow-400 px-36 ">
              🎉 Yay! you just saved ₹655 on this booking!
            </p>
          </div>
          <div className="border mt-5">
            <div className="bg-gray-50 p-4">
              <p className="font-semibold text-xl flex items-center">
                <span className="bg-black text-white py-1 px-2 text-xs rounded-md mr-2">
                  1
                </span>{" "}
                Enter your details
              </p>
            </div>
            <p className="mt-8 p-4">
              We will use these details to share your booking information
            </p>

            <div className="flex p-5">
              <div className="mr-20">
                <p className="text-lg font-semibold">Full Name</p>
                <input
                  className="border p-2 w-64 mt-3 focus:outline-none "
                  type="text"
                  placeholder="Enter first and last name"
                />
              </div>
              <div>
                <p className="text-lg font-semibold">Email Address</p>
                <input
                  className="border p-2 w-64 mt-3 focus:outline-none "
                  type="email"
                  placeholder="name@abc.com"
                />
              </div>
            </div>
            <p className="text-lg font-semibold p-5">Mobile Number</p>
            <div className="px-5 pb-12">
              <input
                type="text"
                placeholder="e.g 12345678"
                className="border p-2 w-64 focus:outline-none mr-20"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
              />
              <button type="submit" className={!checkIn ? "bg-gray-500 text-white py-3 px-16 -ml-1 focus:outline-none font-semibold " : "bg-white text-white py-3 px-24 -ml-1 focus:outline-none font-semibold text-lg transition transform animate-bounce"} onClick={checkInDone}>
               {!checkIn ?  "Send Passcode" : "✔"}
              </button>
            </div>
          </div>

          <div className="p-5 text-gray-600 border mt-5">
            <p>
              <span className="bg-gray-500 text-white py-1 px-2 text-xs rounded-md mr-6 font-bold">
                2
              </span>
              Complete your booking
            </p>
          </div>
        </div>

        <div>
          <div className="viewHotelFeedPayCard bg-white shadow-xl sticky top-28 ml-40 mt-5 ">
            <div className="flex items-center justify-evenly bg-gradient-to-r from-red-300 via-red-400 to-red-500 text-white p-2">
              <p className="text-xs font-bold">
                LOGIN NOW TO GET EXCLUSIVE DEALS
              </p>
              <button className="text-xs font-bold payCard__button py-1 px-2">
                LOGIN
              </button>
            </div>
            <div className="py-4 px-6">
              <p>
                <span className="text-2xl font-semibold mr-1">₹1965</span>{" "}
                <span className="mr-3 line-through">₹3742</span>
                <span className="text-yellow-600 font-semibold ">47% off</span>
              </p>
              <p className="text-gray-500 text-xs mt-1 ml-1">
                inclusive of all taxes
              </p>
              <div className="mt-3 border bg-white shadow-md py-4 px-2">
                <p className="font-semibold text-sm ml-1">
                  Mon, 7 Jun - Tue, 8 Jun{" "}
                  <span className=" px-3 text-gray-300 text-sm">|</span> 1 Room,
                  1 Guest
                </p>
              </div>

              <div className="mt-4 bg-white shadow-md flex items-center justify-between px-2 py-3">
                <p className="flex items-center font-semibold">
                  <MeetingRoomIcon className="text-gray-400 mr-2" /> Deluxe (3X)
                </p>
                <CreateIcon className="text-red-600 text-xs viewHotelFeed__pencilIcon mr-2" />
              </div>

              <div className="mt-7 flex items-center justify-between">
                <p className="font-semibold">FINDOYO coupon applied</p>
                <p className="font-semibold">-₹655</p>
              </div>

              <div className="border-b-2 pb-5 border-dashed">
                <p className="text-xs mt-2 border border-green-400 cursor-pointer text-gray-500 font-semibold inline-block py-1 px-2 moreOffres__button  ">
                  MORE OFFERS
                </p>
              </div>

              <div className="flex items-center justify-between mt-3">
                <p className="font-semibold text-gray-500">Your Savings</p>
                <p className="font-semibold">₹655</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="font-semibold text-gray-500">Total Price</p>
                <p className="font-semibold">₹1965</p>
              </div>
              <p className="text-xs text-gray-400">(incl. of all taxes)</p>

              <button
                className="w-full mt-3 bg-green-500 py-3 rounded-md text-white font-bold payButton focus:outline-none"
                onClick={() =>
                  history.push(
                    "/payment"
                  )
                }
              >
               Pay
              </button>

              <p className="text-red-600 font-semibold text-sm mt-2">
                Follow safety measures advised at the hotel
              </p>
              <p className="text-gray-400 text-sm mt-2">
                By proceeding, you agree to our{" "}
                <span className="text-red-600 font-semibold">
                  Guest Policies.
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckIn;
