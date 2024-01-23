import "../../App.css";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/*", element: <Home /> },
  ]);
  return routes;
};

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App;
