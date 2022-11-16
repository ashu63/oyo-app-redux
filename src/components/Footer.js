import React from "react";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

function Footer() {
  return (
    <div className="footer">
      <div className="flex items-center justify-between pt-10  text-white border-b border-white pb-8">
        <div className="flex items-center ml-10 font-semibold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_(logo).png"
            alt=""
            className="h-20"
          />
          <p className="text-xl ml-5">
            The World's Fastest Growing Hotel Chain
          </p>
        </div>

        <div className="flex mr-5 font-semibold items-center">
          <p className="text-xl mr-14">
            Join our network and grow your business!
          </p>
          <button className="bg-white text-black p-2 text-xs rounded-md">
            <HomeWorkIcon className="mr-3 text-gray-400 " />
            List your property
          </button>
        </div>
      </div>
      <div className="flex justify-evenly pt-10 text-white font-semibold border-b border-white pb-12">
        <div>
          <p className="text-xl tracking-wider">OYO Townhouse</p>
          <p className="text-sm mt-2 -ml-8 ">Your friendly Neighbourhood Hotel</p>
        </div>
        <div>
          <p className="text-xl tracking-wider">OYO SilverKey</p>
          <p className="text-sm mt-2 ml-6">Executive Stays</p>
        </div>
        <div>
          <p className="text-xl tracking-wider">OYO HOME</p>
          <p className="text-sm mt-2 ">Unlocking Homes</p>
        </div>
      </div>

      <p className="text-white font-semibold mb-7 mt-10 text-xl oyo__hotels">OYO HOTELS</p>

      <div className="flex flex-wrap justify-evenly text-white footer__list border-b border-white pb-14 ">
          <div>
              <ul >
                  <li>Hotels near me</li>
                  <li>Hotels In Manali</li>
                  <li>Hotels In Nanital</li>
                  <li>Hotels In Mount Abu</li>
                  <li>Hotels In Agra</li>
                  <li>Hotels In Haridwar</li>
                  <li>Hotels In Gurgaon</li>
                  <li>Hotels In Coimbatore</li>
                  <li>OYO Hotel UK</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>Hotels In Kasauli </li>
                  <li>Hotels In Goa</li>
                  <li>Hotels In Udaipur</li>
                  <li>Hotels In Lonavala</li>
                  <li>Hotels In Kodaiknal</li>
                  <li>Hotels In Gangtok</li>
                  <li>Hotels In Kolkata</li>
                  <li>Hotels In Mandarmoni</li>
                  <li>OYO Hotel USA</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>Hotels in Puri</li>
                  <li>Hotels In Mussoorie</li>
                  <li>Hotels In Munnar</li>
                  <li>Hotels In Hyderabad</li>
                  <li>Hotels In Coorg</li>
                  <li>Hotels In Ahmedabad</li>
                  <li>Hotels In Daman</li>
                  <li>Hotels In Dehradun</li>
                  <li>OYO Hotel Mexico</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>Hotels in Mahabaleshwar</li>
                  <li>Hotels In Pondicherry</li>
                  <li>Hotels In Banglore</li>
                  <li>Hotels In Pune</li>
                  <li>Hotels In Chennai</li>
                  <li>Hotels In Shillong</li>
                  <li>Hotels In Yercaud</li>
                  <li>Travel Guide</li>
                  <li>OYO Hotel Brasil</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>Hotels In Jaipur</li>
                  <li>Hotels In Delhi</li>
                  <li>Hotels In Mysore</li>
                  <li>Hotels In Chandigarh</li>
                  <li>Hotels In Tirupati</li>
                  <li>Hotels In Rishikesh</li>
                  <li>Hotels In Amritsar</li>
                  <li>All Cities Hotels</li>
                  <li>OYO Hotel China</li>
              </ul>
          </div>
          <div>
              <ul>
                  <li>Hotels In Shimla</li>
                  <li>Hotels In Mumbai</li>
                  <li>Hotels In Darjeeling</li>
                  <li>Hotels In Shirdi</li>
                  <li>Hotels In Dalhousie</li>
                  <li>Hotels In Varanasi</li>
                  <li>Hotels In Madurai</li>
                  <li>Coupons</li>
                  <li>OYO Hotel Indonesia</li>
              </ul>
          </div>
      </div>

      <div className="mt-10 flex justify-between items-center pb-10" >
          <div className="footer__icons flex ml-10 cursor-pointer">
                <img src="https://image.flaticon.com/icons/png/512/20/20673.png" alt="facebookIcon"/>
                <img src="https://image.flaticon.com/icons/png/128/1384/1384156.png" alt="" />
                <img src="https://image.flaticon.com/icons/png/512/739/739257.png" alt="" />
                <img src="https://image.flaticon.com/icons/png/128/13/13021.png" alt="" />
                <img src="https://image.flaticon.com/icons/png/128/160/160178.png" alt="" />
          </div>

          <div className="mr-20 text-white">
                <p className="text-xs font-semibold">2013-2021 © Oravel Stays Private Limited</p>
          </div>
      </div>
    </div>
  );
}

export default Footer;
