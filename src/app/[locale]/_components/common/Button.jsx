const Button = ({
  children,
  toggle = "",
  target = "",
  onclick = () => {},
  type = "button",
  disabled = "",
}) => {
  return (
    <button
      data-bs-toggle={toggle}
      data-bs-target={target}
      className="btn bg-dark text-white w-100 rounded-pill py-2"
      type={type}
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
