import { Suspense, lazy } from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const AuthPage = lazy(() => import("./pages/AuthPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const ChannelPage = lazy(() => import("./pages/ChannelPage"));
const VideoPlayer = lazy(() => import("./pages/Videoplayer"));
import { Loader } from "./components/index";
import { Home, Category } from "./layouts/index";
import GetData from "./data/GetData";

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<SuspenseLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="category/:category" element={<Category />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} errorElement={<ErrorPage />}>
        {/* <Route index element={<Login />} />
        <Route path="register" element={<Register />} /> */}
      </Route>
      <Route path="/channel/:id" element={<ChannelPage />} />
      <Route path="/video/:id" element={<VideoPlayer />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
      <GetData />
    </>
  );
}

export default App;
