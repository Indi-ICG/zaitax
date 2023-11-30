import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  // Carrito - Listado de productos agregados
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addProductCart = (item) => {
    setCartProducts([...cartProducts, item]);
  };

  const removeProductCart = (id) => {
    let otherProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(otherProducts);
  };

  const clearProductsCart = () => {
    setCartProducts([]);
  };

  // Detalle del producto - Abrir/cerrar menu
  const [showDetails, setShowDetails] = useState(false);
  const openDetails = () => {
    setShowDetails(true);
  };
  const closeDetails = () => {
    setShowDetails(false);
  };

  // Detalle del producto - Contenido a mostrar en el menu
  const [dataProduct, setDataProduct] = useState({});

  // Ordenes - Listado de compras realizadas
  const [order, setOrder] = useState([]);

  // Listado de productos
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const filteredProductsByTitle = (listProducts) => {
    return listProducts?.filter((item) =>
      item.title.toLowerCase().includes(searchTitle.toLowerCase())
    );
  };

  const filteredProductsByCategory = () => {
    return products?.filter(
      (item) =>
        item.category.toLowerCase().replace("%20", " ") ==
        searchCategory.toLowerCase()
    );
  };

  useEffect(() => {
    if (searchTitle.length > 0 && searchCategory.length > 0) {
      let listProducts =filteredProductsByCategory()
      setFilteredProducts(filteredProductsByTitle(listProducts));
    } else if (searchTitle.length > 0) {
      setFilteredProducts(filteredProductsByTitle(products));
    } else if (searchCategory.length > 0) {
      setFilteredProducts(filteredProductsByCategory);
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchTitle, searchCategory]);

  // Indicador de carga
  const [loading, setLoading] = useState(true);

  return (
    <CarritoContext.Provider
      value={{
        showDetails,
        openDetails,
        closeDetails,
        dataProduct,
        setDataProduct,
        cartProducts,
        addProductCart,
        removeProductCart,
        clearProductsCart,
        showCart,
        setShowCart,
        order,
        setOrder,
        products,
        filteredProducts,
        setSearchTitle,
        setSearchCategory,
        loading,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
