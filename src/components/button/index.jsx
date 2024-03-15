import "./index.css";

const Button = ({
  children,
  onClick,
  link,
  type = "button",
  disabled,
  className = "",
  uppercase,
  fullWidth,
  primary,
  secondary,
}) => {
  const buttonClasses = [
    "button",
    className,
    uppercase && "uppercase",
    fullWidth && "width-full",
    primary && "primary",
    secondary && "secondary",
  ]
    .filter(Boolean)
    .join(" ");

  return link ? (
    <a
      className={buttonClasses}
      onClick={onClick}
      href={link}
      disabled={disabled}
    >
      {children}
    </a>
  ) : (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
