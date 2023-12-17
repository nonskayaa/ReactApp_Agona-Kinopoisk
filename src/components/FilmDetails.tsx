import { Film } from "../models/filmModel";
import WillWatchButton from "./buttons/WillWatchButton";

interface FilmDetailsProps {
  film?: Film;
}
export default function FilmDetails(props: FilmDetailsProps) {
  return (
    <div className="film-details_container">
      <img src={props.film?.image} alt="poster" className="film-details__img" />
      <div className="film-details_info-container">
        <h1 className="title film-details__title ">{props.film?.name}</h1>
        <div className="film-details__year-and-rate_container">
          <span className="film-details__year">{props.film?.year}</span>
          <span className="film-details__rate rate-icon">
            {props.film?.rate}
          </span>
        </div>
        <WillWatchButton />
        <p className="film-details__description">{props.film?.description}</p>
        <ul className="film-details__genre-list">
          {props.film?.genre.map((genre) => (
            <li className="film-details__genre-item">{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
