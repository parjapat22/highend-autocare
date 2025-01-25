function Button({ onClick, type = "submit", children }) {
  return (
    <button type={type} onClick={onClick} className="btn">
      {children}
    </button>
  );
}

export default Button;
