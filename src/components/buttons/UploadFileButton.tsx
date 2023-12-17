import input_file_icon from "../../assets/images/input-file_icon.svg";


export default function UploadFileButton() {
  return (
    <>
      <input type="file" className="input-file" />
      <label htmlFor="file">
        <img
          src={input_file_icon}
          alt="input file icon"
          className="input-file__icon"
        />
        Загрузить фото
      </label>
    </>
  );
}
