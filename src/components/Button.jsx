const Button = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;