import { PieChart, Pie } from "recharts";

const SemiPieChart = ({ percentage }) => {
  const data = [
    { name: "Filled", value: percentage, fill: "#00C49F" },
    { name: "Remaining", value: 100 - percentage, fill: "#e5e7eb" },
  ];

  return (
    <div className="flex flex-col items-center space-y-2">
      <PieChart width={200} height={100}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={80}
          stroke="none"
        />
      </PieChart>
    </div>
  );
};

export default SemiPieChart;