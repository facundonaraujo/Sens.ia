import Card from "../common/Card";

const InsightCard = ({ title, value, percentage, icon }) => {
  const isPositive = Number(percentage) >= 0;

  return (
    <Card title={title} icon={icon}>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-semibold mr-2">{value}</p>
        <span
          className="text-lg"
          style={{ color: isPositive ? "#34D399" : "#EF4444" }}
        >
          {isPositive ? "+" : "-"}
          {Math.abs(percentage)}%
        </span>
      </div>
    </Card>
  );
};

export default InsightCard;
