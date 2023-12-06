import "./styles.css";

const Footer = () => {
  return (
      <footer className="grid grid-cols-3 gap-8 my-6">
        <div className="contenedor-icono">
          <a
            href="http://x.com"
            rel="noreferrer"
            className="x block text-white rounded-full w-14 h-14 p-1 text-center"
          >
            <img src="/x.png" alt="x" className="w-full" />
          </a>
        </div>

        <div className="contenedor-icono">
          <a
            href="http://www.facebook.com"
            rel="noreferrer"
            className="facebook block text-white rounded-full w-14 h-14 p-1 text-center"
          >
            <img src="/facebook.png" alt="facebook" className="w-full" />
          </a>
        </div>

        <div className="contenedor-icono">
          <a
            href="http://www.instagram.com"
            rel="noreferrer"
            className="instagram block text-white rounded-full w-14 h-14 p-1 text-center"
          >
            <img src="/instagram.png" alt="instagram" className="w-full" />
          </a>
        </div>
      </footer>
  );
};

export default Footer;
