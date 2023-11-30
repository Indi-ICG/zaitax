import Layout from "../../Components/Layout";
import React, { useRef, useState } from "react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

function Home() {
  let renderProducts;

  return (
    <Layout>
      <div className="h-[50vh] w-full relative flex items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/Bienestar.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Educacion.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Inmigracion.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Integracion.jpg" alt="" />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-end w-full overflow-hidden absolute z-10">
          <ul className="text-white">
            <li className="btn-list flex justify-between relative">
              <AcademicCapIcon className="bg-blue-600 p-2 h-10 w-10 z-20" />
              <div className="btn-text bg-blue-600 p-2 absolute transition-all pr-12">
                AcademicCapIcon
              </div>
            </li>
            <li className="btn-list flex justify-between relative">
              <AcademicCapIcon className="bg-green-600 p-2 h-10 w-10 z-10" />
              <div className="btn-text bg-green-600 p-2 absolute transition-all pr-12">
                AcademicCapIcon
              </div>
            </li>
            <li className="btn-list flex justify-between relative">
              <AcademicCapIcon className="bg-orange-600 p-2 h-10 w-10 z-10" />
              <div className="btn-text bg-orange-600 p-2 absolute transition-all pr-12">
                AcademicCapIcon
              </div>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-center font-bold text-xl mt-5">Demo</h2>

      {renderProducts}
    </Layout>
  );
}

export default Home;
