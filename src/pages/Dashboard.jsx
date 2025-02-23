import { useEffect, useState, useRef } from "react";
import { fetchMockData } from "../services/dataService";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import SemiPieChart from "../components/SemiPieChart";
import Button from "../components/Button";
import Card from "../components/Card";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Dashboard = () => {
  const [data, setData] = useState({ pieChartData: [], barChartData: [] });
  const dashboardRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchMockData();
      setData(response);
    };
    fetchData();
  }, []);

  const handleDownload = async () => {
    if (!dashboardRef.current) return;

    html2canvas(dashboardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      pdf.save("reporte.pdf");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between mt-6">
        <h1 className="text-3xl font-bold text-center mb-8">📊 Dashboard</h1>
        <div>
          <Button onClick={handleDownload}>Descargar reporte</Button>
        </div>
      </div>
      
      <div ref={dashboardRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Análisis de datos">
          <SemiPieChart data={data.pieChartData} value={80} percentage={80} />
        </Card>
        <Card title="Análisis de datos">
          <PieChart data={data.pieChartData} />
        </Card>
        <Card title="Ángulo de la columna">
          <BarChart data={data.barChartData} />
        </Card>
      </div>

    </div>
  );
};

export default Dashboard;