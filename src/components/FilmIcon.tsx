import { Film } from "../models/filmModel";

interface FilmIconProps {
  film: Film;
}
export default function FilmIcon(props: FilmIconProps) {
  return (
    <a href= {`../aboutFilm/${props.film.name }`} className="film-icon">
      <img
        src={props.film.image}
        alt="film poster"
        className="film-icon__img"
      />
      <span className="film-icon__rate rate-icon">
        {props.film.rate}
      </span>
      <h1 className="film-icon__title">{props.film.name}</h1>
    </a>
  );
}
