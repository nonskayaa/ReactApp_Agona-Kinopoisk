import { Routes, Route } from "react-router-dom";

import FirstVisitPage from "./pages/FirstVisitPage";
import LoginPage from "./pages/LoginPage";
import AddFilmPage from "./pages/AddFilmPage";
import AboutFilmPage from "./pages/AboutFilmPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./components/Layout";
import ProfilePage from "./pages/ProfilePage";

import CollectionPage from "./pages/CollectionPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FirstVisitPage />}></Route>
          <Route path="addFilm" element={<AddFilmPage />}></Route>
          <Route path="collection" element={<CollectionPage />}></Route>
          <Route path="aboutFilm/:title" element={<AboutFilmPage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route path="profile" element={<ProfilePage />}></Route>
        </Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}
