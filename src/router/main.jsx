import { createBrowserRouter } from "react-router-dom";
import Cart from "../page/Cart";
import Home from "../page/Home";
import Kontak from "../page/Kontak";
import Payment from "../page/Payment";
import Produk from "../page/Produk";
import ProdukDetail from "../page/ProdukDetail";
import TentangKami from "../page/TentangKami";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/produk",
    element: <Produk />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKami />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/produk/:produkId",
    element: <ProdukDetail />,
  },
]);
