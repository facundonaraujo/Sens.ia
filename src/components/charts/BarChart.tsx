import { ChartData } from "@/types/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface BarChartComponentProps {
  data: ChartData[];
}

const BarChartComponent = ({ data }: BarChartComponentProps) => {
  return (
    <BarChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#FF8042" />
    </BarChart>
  );
};

export default BarChartComponent;