import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:category" element={<Category />} />
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
