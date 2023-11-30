import "../../App.css";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "../../Context";
import Home from "../Home";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
