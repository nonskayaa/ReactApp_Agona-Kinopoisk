interface SwitchButtonProps {
  firstBtnTitle: string;
  secondBtnTitle: string;
  firstBtnFunc: Function;
  secondBtnFunc: Function;
}

export default function SwitchButton({
  firstBtnTitle,
  secondBtnTitle,
  firstBtnFunc,
  secondBtnFunc,
}: SwitchButtonProps) {
  return (
    <div className="switch-btns_container">
      <div className="button-box">
        <div id="btn"></div>

        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            var btn = document.getElementById("btn");
            if (btn) {
              firstBtnFunc();
              btn.style.left = "3px";
            }
          }}
        >
          {firstBtnTitle}
        </button>

        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            var btn = document.getElementById("btn");
            if (btn) {
              secondBtnFunc();
              btn.style.left = "168px";
            }
          }}
        >
          {secondBtnTitle}
        </button>
      </div>
    </div>
  );
}
