import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ShopItem from "./pages/ShopItem";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>}>
            <Route path="/shop/:id" element={<ShopItem/>} />
          </Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
