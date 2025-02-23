import Button from "../common/Button";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DashboardHeader = ({ dashboardRef }) => {
  const handleDownload = async () => {
    if (!dashboardRef?.current) return;

    html2canvas(dashboardRef?.current)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("reporte.pdf");
      });
  };

  return (
    <>
      <h1 className="font-semibold mr-4">Visión General</h1>
      <Button onClick={handleDownload}>
        <div className="flex items-center">
          <span className="text-sm">Descargar informe</span>
          <HiOutlineDocumentDownload className="ml-2" />
        </div>
      </Button>
    </>
  );
}

export default DashboardHeader;