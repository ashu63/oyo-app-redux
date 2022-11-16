import React from 'react'
import Footer from '../components/Footer'
import SearchHeader from '../components/SearchHeader'
import ViewHotelFeed from '../components/ViewHotelFeed'
import ViewHotelSlider from '../components/ViewHotelSlider'

function ViewHotel() {
    return (
        <div>
            <SearchHeader/>
            <ViewHotelSlider/>
            <ViewHotelFeed/>
            <Footer/>

        </div>
    )
}

export default ViewHotel
