import FilmDetails from "../components/FilmDetails";
import { Film } from "../models/filmModel";
import filmData from "../data/films.json";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AboutFilmPage() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    setFilms(filmData);
  }, []);
  
  const { title } = useParams();

  return (
    <>
      <FilmDetails film={films.find((film) => film.name == title)} />
    </>
  );
}
