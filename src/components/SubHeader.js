import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import "../App.css";
import cities from '../data'
import { useHistory } from "react-router";

function SubHeader() {
  const history = useHistory()
    const [citiesData, setCitiesData] = useState(cities)
    // console.log(citiesData);
  const [banglore, setbanglore] = useState(false);
  const [chennai, setchennai] = useState(false);
  const [delhi, setdelhi] = useState(false);
  const [gurgaon, setgurgaon] = useState(false);
  const [hydrabad, sethydrabad] = useState(false);
  const [kolkata, setkolkata] = useState(false);
  const [mumbai, setmumbai] = useState(false);
  const [noida, setnoida] = useState(false);
  const [pune, setpune] = useState(false);
  return (
    <div className="relative  ">
      <ul className="flex justify-between items-center bg-gray-100 border-t-2 ">
        <li
          className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate ml-20 "
          onMouseEnter={() => setbanglore(true)}
          onMouseLeave={() => setbanglore(false)}
        >
          Banglore{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>
        {banglore && (
          <ul className="absolute top-10 left-24 dropdown z-100"   onMouseEnter={() => setbanglore(true)}
          onMouseLeave={() => setbanglore(false)}>
 
            {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"
           onMouseEnter={() => setchennai(true)}
           onMouseLeave={() => setchennai(false)}>
          Chennai{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {chennai && (
          <ul className="absolute top-10 left-24 chennai dropdown"   onMouseEnter={() => setchennai(true)}
          onMouseLeave={() => setchennai(false)}>
           {citiesData.map((city) => {

                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"
           onMouseEnter={() => setdelhi(true)}
           onMouseLeave={() => setdelhi(false)}>
          Delhi{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {delhi && (
          <ul className="absolute top-10 left-24 delhi dropdown"   onMouseEnter={() => setdelhi(true)}
          onMouseLeave={() => setdelhi(false)}>
               {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"    onMouseEnter={() => setgurgaon(true)}
          onMouseLeave={() => setgurgaon(false)}>
          Gurgaon{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {gurgaon && (
          <ul className="absolute top-10 left-24 gurgaon dropdown"   onMouseEnter={() => setgurgaon(true)}
          onMouseLeave={() => setgurgaon(false)}>
           {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"
           onMouseEnter={() => sethydrabad(true)}
           onMouseLeave={() => sethydrabad(false)}>
          Hydrabad{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {hydrabad && (
          <ul className="absolute top-10 left-24 hydrabad dropdown"   onMouseEnter={() => sethydrabad(true)}
          onMouseLeave={() => sethydrabad(false)}>
               {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"
           onMouseEnter={() => setkolkata(true)}
           onMouseLeave={() => setkolkata(false)}>
          Kolkata{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {kolkata && (
          <ul className="absolute top-10 left-24 kolkata dropdown"   onMouseEnter={() => setkolkata(true)}
          onMouseLeave={() => setkolkata(false)}>
            {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"
           onMouseEnter={() => setmumbai(true)}
           onMouseLeave={() => setmumbai(false)}>
          Mumbai{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {mumbai && (
          <ul className="absolute top-10 left-24 mumbai dropdown"   onMouseEnter={() => setmumbai(true)}
          onMouseLeave={() => setmumbai(false)}>
            {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex mr-2 items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate"
           onMouseEnter={() => setnoida(true)}
           onMouseLeave={() => setnoida(false)}>
          Noida{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {noida && (
          <ul className="absolute top-10 left-24 noida dropdown"   onMouseEnter={() => setnoida(true)}
          onMouseLeave={() => setnoida(false)}>
              {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}

        <li className="flex items-center cursor-pointer hover:bg-gray-200 p-2 parent_rotate mr-20"
           onMouseEnter={() => setpune(true)}
           onMouseLeave={() => setpune(false)}>
          Pune{" "}
          <ChevronDownIcon className=" h-5 ml-2 transition duration-150 rotate_180" />
        </li>

        {pune && (
          <ul className="absolute top-10 left-24 pune dropdown"   onMouseEnter={() => setpune(true)}
          onMouseLeave={() => setpune(false)}>
            {citiesData.map((city) => {
                return <li onClick={() => history.push(`/search?query=${city.name}`)}>{city.name}</li>
            })}
          </ul>
        )}
      </ul>
    </div>
  );
}

export default SubHeader;
