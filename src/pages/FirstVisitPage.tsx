import logo_full from "../assets/images/Watch_Later_Logo_Full.svg";
import agona_logo from "../assets/images/agona_logo.svg";

export default function FirstVisitPage() {
  return (
    <div className="logos_container">
      <img src={logo_full} alt="logo" className="main_logo" />
      <img src={agona_logo} alt="agona logo" className="bottom_logo" />
    </div>
  );
}
