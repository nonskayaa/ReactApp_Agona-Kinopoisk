import { Film } from "../models/filmModel";

import filmData from "../data/films.json";

import { useEffect, useState } from "react";
import FilmIcon from "../components/FilmIcon";
import InputText from "../components/InputText";

export default function SearchPage() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    setFilms(filmData);
  }, []);

  return (
    <>
      <h1 className="title">Поиск</h1>

      <InputText placeholder="Например, Титаник"/>

      <div className="films-section">
        <div className="films-section__titles-container">
          <h2 className="films-section__title ">Рекомендации</h2>

          <a href="#" className="films-section__link-all">
            Все
          </a>
        </div>

        <div className="films-collection_container">
          {films
            .filter((film: Film) => !film.watched)
            ?.slice(0, 4)
            .map((film: Film) => (
              <FilmIcon film={film} />
            ))}
        </div>

      </div>
      <div className="films-section">
        <div className="films-section__titles-container">
          <h2 className="films-section__title ">Просмотренные</h2>

          <a href="#" className="films-section__link-all">
            Все
          </a>
        </div>
        <div className="films-collection_container">
          {films
            .filter((film: Film) => film.watched)
            ?.slice(0, 4)
            .map((film: Film) => (
              <FilmIcon film={film} />
            ))}
        </div>
      </div>
    </>
  );
}
