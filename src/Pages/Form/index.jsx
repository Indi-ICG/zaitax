import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
import Banner from "../../Components/Banner";
import { UserCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

const components = {
  UserCircleIcon,
  PhotoIcon,
};

function Form() {
  return (
    <Layout>
      <section className="bg-form h-[95vh] w-full flex flex-col justify-center items-center">
        <h1 className="text-center  font-bold text-3xl my-12">Registrate</h1>

        <form className="p-12 text-gray-900">
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                  <label
                    htmlFor="empresa"
                    className="block font-medium sm:mt-px sm:pt-2 text-white"
                  >
                    Empresa
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="empresa"
                      id="empresa"
                      autoComplete="given-name"
                      className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300  px-2 py-1 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                  <label
                    htmlFor="nombre"
                    className="block font-medium sm:mt-px sm:pt-2 text-white"
                  >
                    Nombre
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      type="text"
                      name="nombre"
                      id="nombre"
                      autoComplete="family-name"
                      className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300  px-2 py-1 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                  <label
                    htmlFor="telefono"
                    className="block font-medium sm:mt-px sm:pt-2 text-white"
                  >
                    Teléfono
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      autoComplete="telefono"
                      className="block max-w-lg w-full shadow-sm sm:text-sm border-gray-300  px-2 py-1 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                  <label
                    htmlFor="correo"
                    className="block font-medium sm:mt-px sm:pt-2 text-white"
                  >
                    Correo E.
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="correo"
                      name="correo"
                      type="ermail"
                      autoComplete="correo"
                      className="block max-w-lg w-full shadow-sm sm:text-sm border-gray-300  px-2 py-1 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                  <label
                    htmlFor="servicio"
                    className="block font-medium sm:mt-px sm:pt-2 text-white"
                  >
                    Servicio Requerido
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <select
                      id="servicio"
                      name="servicio"
                      autoComplete="servicio"
                      className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300  px-2 py-1 rounded-md"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className=" pt-8 space-y-6 sm:pt-10 sm:space-y-5">
              <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
                <div className="pt-6 sm:pt-5">
                  <div className="max-w-lg space-y-4">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 border-gray-300  px-2 py-1 rounded"
                        />
                      </div>
                      <div className="ml-3">
                        <label
                          htmlFor="comments"
                          className="font-medium text-white"
                        >
                          He leído y acepto la{" "}
                          <a href="#" className="text-cyan-400">
                            Política de Privacidad
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <a
                href="/"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-white bg-zblue focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Volver
              </a>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-white bg-zred focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default Form;
