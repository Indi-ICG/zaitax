import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
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
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
      <Icon className={item.color + " p-2 h-12 w-12 z-20"} />;
      <a
        className="bg-gradient-to-l from-zred to-zblue btn-text w-[40vh] h-12 absolute transition-all pl-[3vh] p-2 flex items-center hover:text-gray-200 capitalize"
        href={item.url}
      >
        {item.text}
      </a>
    </li>
  );
}

function Home() {
  let renderProducts;

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
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/Inmigracion.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Negocio.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Bienestar.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Educacion.jpg" alt="" />
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
        <h2 className="text-center font-bold text-xl">Nosotros</h2>

        <p className="my-3">
          En Zaitax ofrecemos servicios de Contabilidad e Impuestos , adaptados
          a las necesidades específicas de cada negocio, ya sea un emprendedor
          individual, una pequeña empresa o una corporación.
        </p>
        <p className="my-3">
          Nuestros expertos están calificados y colaboran desde EEUU en
          cualquier estado, contamos con tecnología para conectarnos con
          Contadores altamente calificados desde Venezuela, España, México.
        </p>
      </section>

      <Footer />
    </Layout>
  );
}

export default Home;
