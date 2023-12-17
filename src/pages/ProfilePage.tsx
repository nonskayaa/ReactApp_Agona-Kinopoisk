import InputText from "../components/InputText";
import SaveButton from "../components/buttons/SaveButton";
import UploadFileButton from "../components/buttons/UploadFileButton";

export default function ProfilePage() {
  return (
    <>
      <h1 className="title">Профиль</h1>
      <form action="#" className="profile-form">
        <UploadFileButton />

        <InputText placeholder="Имя" />
        <InputText placeholder="О себе" />
        <InputText placeholder="Любимые жанры" />

        <SaveButton />
      </form>
    </>
  );
}
