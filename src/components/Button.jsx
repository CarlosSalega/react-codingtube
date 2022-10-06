import "./Button.css";

function Button({ onClickFn, value }) {
  return <button onClick={onClickFn}>{value}</button>;
}

export default Button;
