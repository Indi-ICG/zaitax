import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <section className="flex items-center justify-center flex-wrap redes-sociales">
        <div className="contenedor-icono">
          <a href="http://x.com" rel="noreferrer" className="x">
          x
          </a>
        </div>

        <div className="contenedor-icono">
          <a
            href="http://www.facebook.com"
            rel="noreferrer"
            className="facebook"
          >
            facebook
          </a>
        </div>

        <div className="contenedor-icono">
          <a
            href="http://www.instagram.com"
            rel="noreferrer"
            className="instagram"
          >
            instagram
          </a>
        </div>
      </section>

      <section className="author">
        <small>
          Sitio desarrollado por
          <a href=""> Inside</a>
        </small>
      </section>
    </footer>
  );
};

export default Footer;
