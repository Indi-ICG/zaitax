import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import {
  IdentificationIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  TrophyIcon,
  FingerPrintIcon,
  CalendarDaysIcon 
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const components = {
  IdentificationIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  TrophyIcon,
  FingerPrintIcon,
  CalendarDaysIcon 
};

function IconCarousel({ item }) {
  const Icon = components[item.icon];

  return (
    <li className="btn-list flex justify-between relative">
      <Icon className="bg-gray-900 p-2 h-[5vh] w-[5vh] z-20"/>
      <a
        className="btn-text bg-gradient-to-l from-zred to-zblue w-[30vh] md:w-[40vh] h-[5vh] absolute transition-all pl-[3vh] p-2 flex items-center capitalize text-sm md:text-base"
        href={item.url}
      >
        {item.text}
      </a>
    </li>
  );
}

function Home() {
  const menuCarousel = [
    {
      icon: "FingerPrintIcon",
      text: "identificación",
      url: "/form",
    },
    {
      icon: "TrophyIcon",
      text: "carrera y profesión",
      url: "/form",
    },
    {
      icon: "BanknotesIcon",
      text: "empleo",
      url: "/form",
    },
    {
      icon: "LightBulbIcon",
      text: "Negocio Independiente",
      url: "/form",
    },
    {
      icon: "IdentificationIcon",
      text: "obtener licencia profesional",
      url: "/form",
    },
    {
      icon: "ChatBubbleLeftRightIcon",
      text: "idioma",
      url: "/form",
    },
    {
      icon: "CheckBadgeIcon",
      text: "validación de titulos y credenciales",
      url: "/form",
    },
    {
      icon: "PresentationChartLineIcon",
      text: "empezar un negocio",
      url: "/form",
    },
    {
      icon: "CalendarDaysIcon",
      text: "cursos talleres y programas",
      url: "/form",
    },
    {
      icon: "AcademicCapIcon",
      text: "carrera universitaria",
      url: "/form",
    },
    {
      icon: "UserGroupIcon",
      text: "trabajadores independientes",
      url: "/form",
    },
  ];

  return (
    <Layout>
      <div className="h-[60vh] w-full relative flex items-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/Inmigracion.jpg" alt="Inmigracion" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Negocio.jpg" alt="Negocio" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Bienestar.jpg" alt="Bienestar" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Educacion.jpg" alt="Educacion" />
          </SwiperSlide>
        </Swiper>

        <div className="flex w-20 absolute z-10">
          <ul className="text-white">
            {menuCarousel.map((item, index) => {
              return <IconCarousel item={item} key={index} />;
            })}
          </ul>
        </div>
      </div>

      <section className="px-8 md:px-12 py-12">
        <h1 className="text-center text-gray-900 font-bold text-3xl">
          Te acompañaremos en todo el proceso, no estaras solo
        </h1>

        <p className="my-3">
          Te presentamos una plataforma tecnológica en el idioma español para
          asistir al inmigrante e integrarlo en el sistema socio-económico de
          los Estados Unidos, desde los diferentes niveles o tipo de inmigrante,
          ya sea que se encuentre dentro o fuera del pais, proporcionando acceso
          a los servivios legales para inmigrantes y poder desarrollarse en USA.
        </p>
      </section>

      <Banner />
      <Footer />
    </Layout>
  );
}

export default Home;
