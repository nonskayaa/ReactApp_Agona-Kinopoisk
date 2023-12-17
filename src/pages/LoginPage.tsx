import logo from "../assets/images/Watch_Later_Logo_Full.svg";
import InputText from "../components/InputText";
import LoginButton from "../components/buttons/LoginButton";

export default function LoginPage() {
  return (
    <div className="main-container">
      <form action="#" className="login__form">
        <img src={logo} alt="login logo" className="login__logo" />
        <div className="login__form-container">
          <InputText placeholder="Адрес электронной почты" />
          <InputText placeholder="Пароль" />
        </div>

        <LoginButton />
      </form>
      <p className="login__subtitle">
        Еще не зарегистрированы?
        <a href="#" className="login__subtitle-link">
          Регистрация
        </a>
      </p>
    </div>
  );
}
