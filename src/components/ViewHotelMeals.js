import React from 'react'

function ViewHotelMeals({ViewHotelMealsImg,ViewHotelMealsTitle,ViewHotelMealsSubTitle,ViewHotelMealsRate}) {
    return (
        <div className="border w-76 mr-2 pb-5" >
            <div className="flex p-2 ml-12 mt-2" >
                <div>
                    <img src="https://assets.oyoroomscdn.com/pwa/icons/breakfast.png" alt="" className="h-16 object-cover" />
                </div>
                <div className="px-3">
                    <p className="font-semibold">{ViewHotelMealsTitle}</p>
                    <p className=" w-44 text-gray-400 text-sm ">{ViewHotelMealsSubTitle}</p>
                    <p className="font-semibold ">{ViewHotelMealsRate}</p>
                </div>
            </div>
            <button className="border px-24 py-1 ml-3 text-red-500 font-semibold">Select</button>
        </div>
    )
}

export default ViewHotelMeals
