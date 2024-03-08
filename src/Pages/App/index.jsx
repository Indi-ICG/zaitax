import "../../App.css";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import Form from "../Form";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/form", element: <Form /> },
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
