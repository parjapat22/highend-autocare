function Button({ onClick, type = "click", children, className = "" }) {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
