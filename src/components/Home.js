import React, { useState } from "react";
import DateBanner from "./DateBanner";
import Header from "./Header";
import SubHeader from "./SubHeader";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import CountUp from 'react-countup';
import Footer from "./Footer";


const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    width: "80px",
    height: "30px",
    marginTop:"-10px"
  },
}))(Tooltip);

function Home() {
  const [emailIn, setEmailIn] = useState(true);
  const [emailVerify, setEmailVerify] = useState("");

  function emailSend(e) {
    e.preventDefault();
    if (emailVerify.length > 7 && emailVerify.includes("@gmail.com")) {
      setEmailIn(false);
    } else if (emailVerify === "") {
      alert("Please Enter a email");
    } else {
      alert("please Enter a valid email");
      setEmailIn(true);
    }
  }

  return (
    <div>
      <Header />
      <SubHeader />
      <DateBanner />
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/7700e1f2-3d24-41e8-8c71-f4336c625a88.jpg"
          className="h-30 mt-16 width__poster__1 rounded-md "
          alt=""
        />

        <img
          src="https://assets.oyoroomscdn.com/cmsMedia/b8bad7f9-d052-40c8-8521-bbb4937c5acc.jpg"
          className="width__poster__1 mt-20"
          alt=""
        />
      </div>{" "}
      <div className="flex justify-center items-center mt-20 relative border p-12 ">
        <div className="flex justify-between">
          {" "}
          {emailIn ? (
            <div className="flex mr-96 relative">
              <WhatshotIcon className="text-yellow-400 fireIcon mr-12 bg-gray-200 p-1 rounded-full shadow-lg" />
              <p className="text-xl"> Get access to exclusive deals </p>{" "}
              <p className="absolute top-8 left-24 text-gray-400">
                Only the best deals reach your inbox{" "}
              </p>{" "}
            </div>
          ) : (
            <div className="flex items-center">
              <WhatshotIcon className="text-yellow-400 fireIcon mr-12 bg-gray-200 p-1 rounded-full shadow-lg" />
              <p className="text-lg text-green-600">
                Congrats ! You have successfully signed up for receiving offers in
                your email.{" "}
              </p>{" "}
            </div>
          )}{" "}
          <div className="ml-30">
            {" "}
            {emailIn && (
              <form>
                <input
                  type="email"
                  placeholder="e.g., john@gmail.com"
                  className="border p-3 mr-8 focus:outline-none w-96"
                  value={emailVerify}
                  onChange={(e) => setEmailVerify(e.target.value)}
                />{" "}
                <button
                  type="submit"
                  className="bg-red-500 p-2 h-11 w-36 text-white rounded-md hover:bg-red-600 transition focus:outline-none "
                  onClick={emailSend}
                >
                  Notify me{" "}
                </button>{" "}
              </form>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="mt-20 relative flex justify-evenly  bg-gray-100 p-10">
        <div className="relative mr-32 ">
          <img
            src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetImage.jpg"
            alt=""
          />
          <LightTooltip title="UAE">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_6.jpg"
              alt=""
              className="h-28 absolute top-28 left-20 cursor-pointer"
            />
          </LightTooltip>

          <LightTooltip title="NEPAL">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_4.jpg"
              alt=""
              className="h-28 absolute top-20 left-60 cursor-pointer"
            />
          </LightTooltip>

          <LightTooltip title="CHINA">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_2.jpg"
              alt=""
              className="h-28 absolute top-52 left-52 cursor-pointer"
            />
          </LightTooltip>
          <LightTooltip title="INDIA">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_1.jpg"
              alt=""
              className="h-28 absolute left-96 bottom-32 cursor-pointer"
            />
          </LightTooltip>
          <LightTooltip title="CANADA">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_3.jpg"
              alt=""
              className="h-28 absolute left-56 -bottom-10 cursor-pointer"
            />
          </LightTooltip>
          <LightTooltip title="INDO">
            <img
              src="https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_5.jpg"
              alt=""
              className="h-28 absolute left-96 top-0 cursor-pointer"
            />
          </LightTooltip>
        </div>
        <div className="mr-20 mt-16">
          <p className="text-3xl">World's leading chain of hotels and homes</p>
          <p className=" mt-7 text-gray-500">More Destinations. More Ease. More Affordable.</p>
          <div className="mt-10 flex">
          <p className="text-4xl"><CountUp end={100}  /><span className="text-base text-gray-500 block ">Countries</span></p>
          <p className="text-7xl ml-4 font-extralight text-gray-400 -mt-4">/</p>
          <p className="text-4xl ml-8"><CountUp end={43000}  /><span className="text-base text-gray-500 block ">Hotels</span></p>
          <p className="text-7xl ml-4 font-extralight text-gray-400 -mt-4">/</p>
          <p className="text-4xl ml-8"><CountUp end={150000}  /><span className="text-sm text-gray-500 block ">Vacation Homes</span></p>

          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
