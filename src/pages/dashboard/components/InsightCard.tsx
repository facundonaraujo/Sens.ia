import Card from "../../../components/common/Card";

interface InsightCardProps {
  title: string;
  value: number | string;
  percentage: number;
  icon: React.ReactNode;
  className?: string;
}

const InsightCard = ({ title, value, percentage, icon, className }: InsightCardProps) => {
  const isPositive = Number(percentage) >= 0;

  return (
    <Card title={title} icon={icon} className={className}>
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
