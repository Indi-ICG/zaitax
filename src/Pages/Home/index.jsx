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
};

function IconCarousel({ item }) {
  const Icon = components[item.icon];

  return (
    <li className="btn-list flex justify-between relative">
      <Icon className={item.color + " p-2 h-10 w-10 sm:h-12 sm:w-12 z-20"} />
      <a
        className="bg-gradient-to-l from-zred to-zblue btn-text w-[40vh] h-10 sm:h-12 absolute transition-all pl-[3vh] p-2 flex items-center hover:text-gray-200 capitalize"
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
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "TrophyIcon",
      text: "carrera y profesión",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "BanknotesIcon",
      text: "empleo",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "LightBulbIcon",
      text: "empezar un negocio",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "IdentificationIcon",
      text: "obtener licencia profesional",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "ChatBubbleLeftRightIcon",
      text: "idioma",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "CheckBadgeIcon",
      text: "validación de titulos y credenciales",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "PresentationChartLineIcon",
      text: "contabilidad y finanzas para small business",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "UserGroupIcon",
      text: "cursos talleres y programas",
      color: "bg-gray-900",
      url: "/about",
    },
    {
      icon: "AcademicCapIcon",
      text: "carrera universitaria",
      color: "bg-gray-900",
      url: "/about",
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

      <section className="px-10 md:px-20 py-10">
        <h1 className="text-center text-gray-900 font-bold text-3xl">
          Te acompañaremos en todo el proceso, no estaras solo
        </h1>

        <p className="my-3">
          Te presentamos una plataforma tecnológica en el idioma español para
          asistir al inmigrante e integrarlo en el sistema scio -económico de
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
