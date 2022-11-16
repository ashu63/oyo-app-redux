import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import TvIcon from "@material-ui/icons/Tv";
import CheckIcon from "@material-ui/icons/Check";
import ViewHotelMeals from "./ViewHotelMeals";
import hotelPolicies from "../data2";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import CreateIcon from "@material-ui/icons/Create";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 320,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    width: "460px",
    height: "140px",
    paddingTop: "5px",
  },
}))(Tooltip);

function ViewHotelFeed() {
    const history = useHistory()
  const [showDescription, setShowDescription] = useState(false);
  const [policies, setPolicies] = useState(hotelPolicies);

  function showDescriptionData() {
    if (!showDescription) {
      setShowDescription(true);
    } else {
      setShowDescription(false);
    }
  }
  return (
    <div className="flex justify-around mb-20">
      <div className="pt-16 ">
        <p className="text-4xl font-semibold">OYO 30358 Hotel Asia Palace</p>
        <p className="text-gray-300 mt-2">
          Near Peer Baba chowk, Jodhamal Bagh, Pathankot
        </p>
        <p className="p-2 mt-5 viewHotelpatti text-sm font-semibold">
          {" "}
          <FavoriteBorderIcon /> No Check in after 06:00 PM, Weekend lockdown
          due to Local Authority Restrictions.
        </p>
        <p className="text-xl font-bold mt-7">Description</p>
        <p className="mt-4 text-gray-500 viewHotelDescription">
          Did you know that we’ve got 2.5 Crore bookings since March 2020? And
          this is all thanks to the sanitisation & safety measures followed at
          our properties, from disinfecting surfaces with high-quality cleaning
          products and maintaining social distance to using protective gear and
          more.
        </p>

        {showDescription && (
          <>
            <p className="mt-5 font-bold mb-3">Location</p>
            <p className="text-gray-600 viewHotelDescription ">
              Hotel Asia Palace located at Dhangu Road, Pathankot is a trendy
              and modern property and comes at a budget-friendly range. It is
              near to Kali Mata Mandir, Environment Park and Shri Shani Dev
              Mandir.
            </p>
            <p className="mt-5 font-bold mb-3">Special Features</p>
            <p className="text-gray-600 viewHotelDescription">
              the rooms are tastefully done in modern wooden furniture. The door
              re large and have wooden carvings. Trendy sofas, wall art and
              lighting add to the decor of the rooms. The sitting area and
              corridors are large and well lit.
            </p>
            <p className="mt-5 font-bold mb-3">Amenities</p>
            <p className="text-gray-600 viewHotelDescription">
              Wooden Floors, AC, Laundry service, Parking Facility, 24/7
              Checkin, Room Service, Free Wifi, Geyser, Complimentary Veg
              Breakfast, Modern Wardrobe, TV, Fire-Extinguisher, Attached
              Bathroom, First Aid, Banquet Hall, Work Space, Mirror, CCTV
              Cameras are among the amenities featured at this property for a
              comfortable stay
            </p>
            <p className="mt-5 font-bold mb-3">What's Nearby</p>
            <p className="text-gray-600 viewHotelDescription">
              Bachan Kulcha House, Moti Mahal Grand and Sagar Ratna are some of
              the many eateries available in the vicinity of the hotel.
            </p>
          </>
        )}
        <p
          className="mt-7 text-red-600 font-bold cursor-pointer"
          onClick={showDescriptionData}
        >
          {!showDescription ? "Read More" : "Read Less"}
        </p>

        <p className="mt-10 text-2xl font-semibold mb-3">Choose your room</p>

        <div className="flex justify-between border pt-5 pb-5 viewHotelRoomWidth">
          <div className="pl-3">
            <p className="font-semibold mb-2">Deluxe (3X)</p>
            <p>Room size: 182 sqft</p>
            <p class="mt-6 flex ">
              <CallToActionIcon className="mr-2 text-yellow-500" /> AC{" "}
              <span className="pl-7">
                <TvIcon className="mr-2 text-yellow-500" /> TV
              </span>
            </p>
          </div>
          <div className="pr-4">
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/thumb/d96fa21ef5b9946a.jpg"
              alt=""
              className="h-28"
            />
          </div>
        </div>

        <div className="flex justify-between p-4 border viewHotelRoomWidth">
          <div className="ml-2">
            <p className="text-xl font-bold">
              ₹1822{" "}
              <span className="text-gray-500 text-base ml-3 line-through font-normal">
                ₹3471
              </span>
            </p>
          </div>
          <div className="mr-4 flex items-center">
            <button className="border py-2 px-10 text-sm flex ">
              <CheckIcon className="viewHotelCheckIcon bg-green-500  text-white rounded-full mt-1" />{" "}
              SELECTED
            </button>
          </div>
        </div>

        <p className="mt-12 mb-6 text-xl font-semibold">
          Enjoy meals during your stay
        </p>

        <div className="flex viewHotelRoomWidth2">
          <ViewHotelMeals
            ViewHotelMealsImg=""
            ViewHotelMealsTitle="Breakfast"
            ViewHotelMealsSubTitle="Continental and Indian menu"
            ViewHotelMealsRate="₹60"
          />
          <ViewHotelMeals
            ViewHotelMealsImg=""
            ViewHotelMealsTitle="Lunch"
            ViewHotelMealsSubTitle="Veg/Non-Veg premium  Thali"
            ViewHotelMealsRate="₹400"
          />
          <ViewHotelMeals
            ViewHotelMealsImg=""
            ViewHotelMealsTitle="Dinner"
            ViewHotelMealsSubTitle="Veg/Non-Veg premium Thali"
            ViewHotelMealsRate="₹400"
          />
        </div>

        <p className="text-2xl font-semibold mt-8 mb-8">Hotel Policies</p>

        {policies.map((policy) => {
          return (
            <li className="viewHotelRoomWidth pb-2 tracking-wide text-gray-600">
              {policy.policy}
            </li>
          );
        })}
      </div>

      <div className="mt-20">
        <div className="viewHotelFeedPayCard bg-white shadow-xl sticky top-28">
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
                <span className=" px-3 text-gray-300 text-sm">|</span> 1 Room, 1
                Guest
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

            <button className="w-full mt-3 bg-green-500 py-3 rounded-md text-white font-bold payButton focus:outline-none" onClick={() => history.push(`/search/viewHotel/checkIn?07%02%RFGHh&ROOMS=1&GUESTS=1&rooms_config=1&&HGYFTJJHH1233`)}>
              Continue to Book
            </button>

            <HtmlTooltip
              title={
                <>
                  <p className="font-semibold text-lg">Cancellation Policy</p>
                  <ul>
                    <li className="mt-2 text-sm">
                      For cancellation done prior 9 AM on the check-in date,
                      100% Refundable
                    </li>
                    <li className="mt-2 text-sm">
                      For cancellation done post 9 AM on the check-in date, Non
                      Refundable
                    </li>
                  </ul>
                </>
              }
            >
              <p className="text-red-600 font-semibold mt-4 cursor-pointer">
                Cancellation Policy
              </p>
            </HtmlTooltip>
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
  );
}

export default ViewHotelFeed;
