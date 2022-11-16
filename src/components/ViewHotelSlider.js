import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import '../style/slider.css'
import SwiperCore, { Pagination,Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

function ViewHotelSlider() {
  return (
    <div className="mt-5">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={4}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/large/d96fa21ef5b9946a.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/large/6f411210923fa6d1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/large/18e723c5a840d885.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/large/27461eb723ee52d0.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/large/8cea208c83a36b69.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://images.oyoroomscdn.com/uploads/hotel_image/51582/large/5366f257f4184b3f.jpg" alt="" /></SwiperSlide>
        </Swiper>
    </div>
  )
}


export default ViewHotelSlider;
