export default function AddButton() {
  return (
    <button className="btn-save" type="submit">
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        className="btn__icon"
      >
        <path d="M9.33333 0H11.6667V21H9.33333V0Z" />
        <path d="M21 9.33333V11.6667L0 11.6667L8.15943e-08 9.33333H21Z" />
      </svg>
      Сохранить
    </button>
  );
}
