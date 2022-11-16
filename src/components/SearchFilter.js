import React from "react";

function SearchFilter() {
  return (
    <div className="p-10 search__filter border-r mt-4">
      
      <div className="border-b pb-5">
        <p className="text-3xl font-semibold">Filters</p>
        <p className="text-md font-bold mt-2 mb-3">Price</p>
        <input type="range" min="10" max="1000" className="w-64 "/>
        <div className="flex justify-between">
            <p className="bg-gray-100 p-1 font-bold rounded-xl">₹2041</p>
            <p className="bg-gray-100 p-1 font-bold rounded-xl">₹3687</p>
        </div>
      </div>

      <div className="border-b pt-6 pb-6">
          <p className="text-base font-bold pb-4">Collections</p>
          <input type="checkbox" />
          <label className="pl-3">Sanitised b4 ur eyes</label>
          <div className="pb-3 pt-3">
          <input type="checkbox"/>
          <label className="pl-3">Local IDs accepted</label>
          </div>
          <div>
          <input type="checkbox"/>
          <label className="pl-3">OYO Welcomes Couples</label>
          </div>
      
      </div>
      <div className="sticky top-14">


      <p className="text-base font-bold pt-6 pb-5 ">Categories</p>
      <div className="border-b pb-6">
          <input type="checkbox"/>
          <label className="pl-3 text-sm "><span className="font-bold">OYO ROOMS</span> - Super affordable stays <span className="pl-6">with essential amenities</span> </label>
          <div className="h-4">

          </div>
         
      <div>
          <input type="checkbox"/>
          <label className="pl-3 text-sm"><span className="font-bold">Capital O</span> - Premium hotels with <span className="pl-6">spacious rooms for business travllers & </span> <span className="pl-6">families</span> </label>
          </div>
          </div>

          <p className="text-base font-bold pt-5 pb-5">Accomodation Type</p>
          <div className="border-b pb-5">
              <input type="checkbox"/>
              <label className="pl-3">Hotel</label>
          </div>

          <p className="font-bold pt-5 pb-5">Hotel Facilities</p>
          <div className="border-b pb-6">

          <div className="pb-3">
          <input type="checkbox"/>
          <label className="pl-3">Mini Fridge</label>
          </div>
          <div className="pb-3">
          <input type="checkbox"/>
          <label className="pl-3">Hair Dryer</label>
          </div>
          <div className="pb-3">
          <input type="checkbox"/>
          <label className="pl-3">Seating Area</label>
          </div>
          <div className="pb-3">
          <input type="checkbox"/>
          <label className="pl-3">King Sized Bed</label>
          </div>

          </div>

          <p className="font-bold pt-4 pb-4">Check-in features</p>
          <input type="checkbox"/>
          <label className="pl-3">Pay at Hotel</label>

        
          </div>
      

    </div>
  );
}

export default SearchFilter;
