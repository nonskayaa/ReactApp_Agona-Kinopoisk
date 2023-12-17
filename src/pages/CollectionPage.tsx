import { Film } from "../models/filmModel";
import filmData from "../data/films.json";

import FilmIcon from "../components/FilmIcon";
import { useEffect, useState } from "react";
import SwitchButton from "../components/buttons/SwitchButton";

export default function CollectionPage() {
  const [films, setFilms] = useState<Film[]>([]);
  const [showWatched, setShowWatched] = useState<Boolean>(false);

  useEffect(() => {
    setFilms(filmData);
  }, []);

  return (
    <>
      <h1 className="title page-title">Коллекция</h1>

      <SwitchButton
        firstBtnTitle="Буду смотреть"
        secondBtnTitle="Просмотрено"
        firstBtnFunc={() => setShowWatched(false)}
        secondBtnFunc={() => setShowWatched(true)}
      />

      <div className="films-collection_container">
        {showWatched
          ? films
              .filter((film: Film) => film.watched)
              ?.map((film: Film) => <FilmIcon film={film} />)
          : films
              .filter((film: Film) => !film.watched)
              ?.map((film: Film) => <FilmIcon film={film} />)}
      </div>
    </>
  );
}
