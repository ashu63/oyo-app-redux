import React from "react";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/outline";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
  const user = useSelector(selectUser);

  return (
    <div className="flex items-center justify-between ">
      <div className="" >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_(logo).png"
          alt="Logo"
          className=" h-16 object-contain md:ml-12 ml-3"
        />
      </div>
      <div className="flex items-center ">
        <div className="md:flex p-2 border mr-5 cursor-pointer hidden ">
          <div className="mr-3">
            <img
              src="https://th.bing.com/th/id/OIP.GhmAJjA6uwdJgbco3tFbDAHaH_?w=158&h=180&c=7&o=5&dpr=1.25&pid=1.7"
              alt=""
              className="h-11 object-contain "
            />
          </div>
          <div>
            <p>Become a Member</p>
            <p className="text-xs text-gray-400">Additional 10% off on stays</p>
          </div>
        </div>
        <button className="flex items-center p-3 mr-2 border py-5 hover:bg-gray-200 focus:outline-none">
          <GlobeAltIcon className="h-5 mr-2" />
          English <ChevronDownIcon className="h-5 ml-2" />
        </button>
        <button onClick={() => auth.signOut()} className=" flex items-center mr-8 font-bold hover:bg-gray-200 py-5 px-5 focus:outline-none"><PersonOutlineIcon className="mr-1" />Log Out</button>
      </div>
    </div>
  );
}

export default Header;
