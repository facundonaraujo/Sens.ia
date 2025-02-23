const Card = ({ children, title }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h2 className="text-xl font-bold text-center mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;