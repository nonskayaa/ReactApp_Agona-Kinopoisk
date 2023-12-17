interface InputTextProps{
  title? : string
  placeholder: string
}

export default function InputText(props: InputTextProps) {
  return (

    <div className="input__item">
      {props.title && <h2 className="input__title">{props.title}</h2>}
      <input type="text" placeholder={props.placeholder} className="input"></input>
    </div>

  );
}
