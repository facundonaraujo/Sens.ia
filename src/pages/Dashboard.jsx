import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const data1 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const data2 = [
  { name: "Category X", value: 500 },
  { name: "Category Y", value: 250 },
  { name: "Category Z", value: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  const downloadPDF = () => {
    const input = document.getElementById("dashboard");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("reporte.pdf");
    });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div id="dashboard" className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Pie Chart 1</h2>
            <PieChart width={400} height={300}>
              <Pie data={data1} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {data1.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Pie Chart 2</h2>
            <PieChart width={400} height={300}>
              <Pie data={data2} cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" dataKey="value">
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
      <button
        onClick={downloadPDF}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
      >
        Descargar PDF
      </button>
    </div>
  );
};

export default Dashboard;
