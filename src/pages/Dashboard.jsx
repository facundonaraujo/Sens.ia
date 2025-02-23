import { useEffect, useState, useRef } from "react";

import MainLayout from "../layouts/MainLayout";
import SemiPieChart from "../components/charts/SemiPieChart";
import PieChartComponent from "../components/charts/PieChart";
import LineChartComponent from "../components/charts/LineChart";
import InsightCard from "../components/dashboard/InsightCard";
import Card from "../components/common/Card";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Loader from "../components/common/Loader";

import { getDashboard } from "../services/dashboard.service";

import { HiLightBulb } from "react-icons/hi";
import { HiOutlineCash } from "react-icons/hi";
import { HiOutlineClock } from "react-icons/hi";

const Dashboard = () => {
  const [data, setData] = useState({ 
    percentageSatisfaction: 0,
    percentageSatisfactionPastMonth: 0,
    averageTicket: 0,
    percentageTicketPastMonth: 0,
    averageTime: 0,
    percentageTimePastMonth: 0,
    emotionalStateChart: [],
    monthSatisfactionChart: [],
    daySatisfactionChart: [],
    insightsTimeStart: 0,
    insightsTimeEnd: 0
  });
  const [loading, setLoading] = useState(true);
  const dashboardRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    getDashboard().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <MainLayout header={<DashboardHeader />}>
        <div className="flex justify-center items-center h-full w-full" >
          <Loader text="Cargando datos..." />
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout header={<DashboardHeader dashboardRef={dashboardRef} />}>
      <div ref={dashboardRef} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Satisfacción general del cliente" className="h-full self-stretch">
            <div className="flex flex-col items-center justify-center w-full h-48">
              <SemiPieChart percentage={data.percentageSatisfaction} />
              <p className="text-2xl font-bold">{data.percentageSatisfaction}%</p>
              <span
                className="text-lg"
                style={{ color: Number(data.percentageSatisfactionPastMonth) >= 0 ? "#34D399" : "#EF4444" }}
              >
                {Number(data.percentageSatisfactionPastMonth) ? "+" : "-"}
                {Math.abs(data.percentageSatisfactionPastMonth)}%
              </span>
            </div>
          </Card>

          <InsightCard icon={ <HiOutlineCash className="h-10 w-10 mb-2" /> } title="Ticket promedio por cliente" value={`${data.averageTicket} USD`} percentage={data.percentageTicketPastMonth} className="h-full self-stretch" />
          <InsightCard icon={ <HiOutlineClock className="h-10 w-10 mb-2" /> } title="Tiempo de permanencia promedio" value={`${data.averageTime} hs.`} percentage={data.percentageTimePastMonth}  className="h-full self-stretch" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4">
          <Card title="Estado emocional" className="h-full self-stretch">
            <div className="flex items-center justify-center w-full h-48">
              <PieChartComponent data={data.emotionalStateChart} />
            </div>
          </Card>

          <div className="grid grid-rows-[auto_auto] gap-4 h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
              <Card title="Satisfacción Mensual" className="h-full self-stretch">
                <div className="flex items-center justify-center w-full h-48">
                  <LineChartComponent data={data.monthSatisfactionChart} />
                </div>
              </Card>

              <Card title="Satisfacción Intradiaria" className="h-full self-stretch">
                <div className="flex items-center justify-center w-full h-48">
                  <LineChartComponent data={data.daySatisfactionChart} />
                </div>
              </Card>
            </div>

            <div className="bg-white p-4 rounded-md h-full self-stretch flex items-center">
              <HiLightBulb className="w-11 h-11 mr-3" />
              <div>
                <h4 className="font-semibold mb-2">Insights:</h4>
                <ul className="list-disc list-inside">
                  <li>El horario donde tus clientes tienen menor satisfacción es de {data.insightsTimeStart} a {data.insightsTimeEnd} hs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
