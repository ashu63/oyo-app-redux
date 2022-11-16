import React, { useState } from "react";
import SearchContentFeed from "./SearchContentFeed";
import cities from "../data";

function SearchContent() {
  const [showMap, setShowMap] = useState(false);
 

  function mapShow() {
    if (!showMap) {
      setShowMap(true);
    } else {
      setShowMap(false);
    }
  }

  return (
    <div className="w-full p-8 relative z-0 ">
      <div
        className={
          showMap
            ? "flex justify-between relative  border-b pb-5 "
            : "flex justify-between relative items-center border-b pb-5"
        }
      >
        <div>
          <p className="text-2xl font-semibold z-0">
            4 OYOs in Talwara, Punjab
          </p>
        </div>

        <div>
          <label className="text-lg mr-4 font-semibold">Map View </label>
          <input type="checkbox" onClick={mapShow} className="cursor-pointer" />
        </div>

        <div>
          <label className="mr-5">Sort By</label>
          <select className="border p-3 ">
            <option>Popularity</option>
            <option>Guest Rating</option>
            <option>Price Low To High</option>
            <option>Price High To Low</option>
            <option>Show Closest OYO</option>
          </select>
        </div>
        {showMap && (
          <iframe
            title="map"
            className={showMap ? "absolute right-0" : "flex"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27084.271943891927!2d75.85475904055298!3d31.94640704875031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b72e4241d2943%3A0xb592151fd2e55678!2sTalwara%20Twp%2C%20Punjab%20144216!5e0!3m2!1sen!2sin!4v1623001035843!5m2!1sen!2sin"
            width="800"
            height="600"
          ></iframe>
        )}
      </div>

      <SearchContentFeed
        img1="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/5034e118b4bb46ae.jpg"
        img2="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/c6e40177a168a465.jpg"
        img3="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/2420ba9c92ef1896.jpg"
        img4="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/8d47d6b1bb9cdd25.jpg"
        img5="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/308da20ba0fe8929.jpg"
        img6="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/a75312efc5929f4d.jpg"
        img7="https://images.oyoroomscdn.com/uploads/hotel_image/51582/medium/c0be63f70b5c4ae9.jpg"
        hotelName="OYO 30358 Hotel Asia Palace"
        hotelLocation="Near Peer Baba Chowk, Jodhamal Bagh, Pathankot ."
        hotelDistance="34.9 Km"
        hotelStar=" 4.3"
        hotelRating="(354 Ratings)"
        hotelPrice="₹1776"
        hotelCutPrice="₹3382"
        hotelDiscount="47% off"
      />
      <SearchContentFeed
        img1="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/f284268a90f83f35.jpg"
        img2="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/520205ad958aaeff.jpg"
        img3="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/c0b00141bef39996.jpg"
        img4="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/97ec46c81d3ae49e.jpg"
        img5="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/98acb34e28272e32.jpg"
        img6="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/80045d4be278cca6.jpg"
        img7="https://images.oyoroomscdn.com/uploads/hotel_image/57272/medium/b49407e4e88afbb1.jpg"
        hotelName="Capital O 38623 Pathankot Club"
        hotelLocation="Near Mahindra Showroom, Dalhousie Road, Pathankot"
        hotelDistance="36.3 Km"
        hotelStar=" 4.0"
        hotelRating="(50 Ratings)"
        hotelPrice="₹1529"
        hotelCutPrice="₹3494"
        hotelDiscount="56% off"
      />
      <SearchContentFeed
        img1="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/3ea89f0c9dcba26f.jpg"
        img2="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/d2e964fdc6b5e736.jpg"
        img3="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/de3f791176cd64b3.jpg"
        img4="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/aad8b0968d9d8932.jpg"
        img5="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/523cfab6d43df74c.jpg"
        img6="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/ffa63b73d3f76477.jpg"
        img7="https://images.oyoroomscdn.com/uploads/hotel_image/101235/medium/aad8b0968d9d8932.jpg"
        hotelName="OYO 72452 Hotel Roice Inn"
        hotelLocation="Near bansal tower, bhogpur , Jalandhar"
        hotelDistance="45.6 Km"
        hotelStar=" 4.7"
        hotelRating="(45 Ratings)"
        hotelPrice="₹2127"
        hotelCutPrice="₹4051"
        hotelDiscount="47% off"
      />
      <SearchContentFeed
        img1="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/acbe341ed356dfb3.jpg"
        img2="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/09a4fcc2b9d15047.jpg"
        img3="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/92fa8ac85c58a35e.jpg"
        img4="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/30c5b636ac284f82.jpg"
        img5="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/ca78c22c4716d4b0.jpg"
        img6="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/98a0367332829016.jpg"
        img7="https://images.oyoroomscdn.com/uploads/hotel_image/58730/medium/55b5bbe8bf2e75f4.jpg"
        hotelName="OYO 40258 Riverview Health Resort"
        hotelLocation="Near Mukteshwar Dham, Madhopur Road, Pathankot"
        hotelDistance="46.5 Km"
        hotelStar="3.9"
        hotelRating="(346 Ratings)"
        hotelPrice="₹1518"
        hotelCutPrice="₹3469"
        hotelDiscount="56% off"
      />
    </div>
  );
}

export default SearchContent;
