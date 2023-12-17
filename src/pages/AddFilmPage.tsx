import { useState } from "react";
import SwitchButton from "../components/buttons/SwitchButton";
import SaveButton from "../components/buttons/SaveButton";
import UploadFileButton from "../components/buttons/UploadFileButton";
import InputText from "../components/InputText";

export default function AddFilmPage() {
  const [addManually, setAddManually] = useState(false);

  return (
    <>
      <h1 className="title">О фильме</h1>
      
      <SwitchButton
        firstBtnTitle="КиноПоиск"
        secondBtnTitle="Вручную"
        firstBtnFunc={() => setAddManually(false)}
        secondBtnFunc={() => setAddManually(true)}
      />

      <form className="add_film-form">
        <InputText placeholder="Например, Титаник" title="Название" />

        {addManually && (
          <>
            <InputText
              placeholder="Напишите пару слов о сюжете"
              title="Описание"
            />
            <InputText placeholder="Выберите из списка" title="Жанр" />
            <div className="input__item">
              <h2 className="input__title">Постер</h2>
              <UploadFileButton />
            </div>
          </>
        )}
      </form>
      <SaveButton />
    </>
  );
}
