import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StarIcon from "@material-ui/icons/Star";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import WifiIcon from "@material-ui/icons/Wifi";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { useHistory } from "react-router";

SwiperCore.use([Navigation]);

function SearchContentFeed({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  hotelName,
  hotelLocation,
  hotelDistance,
  hotelStar,
  hotelRating,
  hotelPrice,
  hotelCutPrice,
  hotelDiscount,
})

{
  
const history = useHistory()
  return (
    <div>
      <div className="flex mt-20 border-b pb-12 cursor-pointer">
        <div className="w-96 mt-2 ">
          <Swiper navigation={true} className="mySwiper">
            <SwiperSlide>
              <img src={img1} className="" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="px-4" >
          <p className="text-xl font-semibold">{hotelName}</p>
          <p className="text-lg text-gray-500">
            {hotelLocation}
            <LocationOnIcon className="text-red-600" /> {hotelDistance}{" "}
          </p>
          <p className="pt-6 pb-2 text-sm">
            <span className="bg-green-600 text-white text-sm p-1 mr-2 pl-2 rounded-sm ">
              {hotelStar} <StarIcon className="starIcon" />
            </span>
            <span className="mr-2">{hotelRating}</span>
            <span className="mr-1 ">.</span> Very Good{" "}
          </p>

          <div className="flex items-center mt-3">
            <div className="mr-8">
              <p>
                <EmojiTransportationIcon className="text-gray-600" /> Parking
                Facility
              </p>
            </div>

            <div className="mr-8">
              <p>
                <WifiIcon className="text-gray-600" /> Free Wifi
              </p>
            </div>

            <div className="mr-8">
              <p>
                <DoneOutlineIcon className="text-yellow-400 " /> 24/7 CheckIn
              </p>
            </div>

            <div className="mr-8">
              <p>+10 More</p>
            </div>
          </div>

          <p className="mt-3 border pb-1 border-gray-400 w-40 px-2">
            Sanitised b4 ur eyes
          </p>

          <div className="flex justify-between mt-6">
            <div>
              <p>
                {" "}
                <span className="text-3xl text-red-600 font-bold">
                  {" "}
                  {hotelPrice}{" "}
                </span>
                <span className="text-gray-500 line-through text-lg ">
                  {hotelCutPrice}
                </span>{" "}
                <span className="ml-4 text-yellow-400 font-semibold">
                  {hotelDiscount}
                </span>
              </p>
              <p className="ml-2 text-gray-500 text-xs">Per Room Per Night</p>
            </div>

            <div className="ml-10 ">
              <button className="border border-gray-500 font-semibold px-4 py-2 mr-5 focus:outline-none" onClick={() => history.push(`/search/viewHotel?checkin=07%02%RFGHh&ROOMS=1&GUESTS=1&rooms_config=1&&HGYFTJJHH1233`)}>
                View Details
              </button>
              <button className="px-5 py-2 font-semibold bg-green-600 text-white focus:outline-none" onClick={() => history.push('/search/viewHotel/checkIn?07%02%RF%%cjhejhnkenjk9877fddfd.GHh&ROOMS=1&GUESTS=1')}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContentFeed;
