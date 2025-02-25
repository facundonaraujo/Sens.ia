import { PostureAnalysisResponse, PostureAnalysisDashboard } from "@/types/postureAnalysis";

const isHappy = (score: number) => score >= 0.7;
const isNeutral = (score: number) => score >= 0.4 && score < 0.7;
const isAngry = (score: number) => score < 0.4;

export const dashboardAdapter = (data: PostureAnalysisResponse[]): PostureAnalysisDashboard => {
  const scores = data
    .map((item) => item.analyses?.[0]?.score)
    .filter((score) => typeof score === "number");

  const emotionalStateChart = [
    { name: "Feliz", value: scores.filter(isHappy).length, color: '#00C951' },
    { name: "Neutro", value: scores.filter(isNeutral).length, color: '#6A7282' },
    { name: "Enojado", value: scores.filter(isAngry).length, color: '#FB2C36' },
  ];

  const averageSatisfaction = scores.length ? scores.reduce((acc, val) => acc + val, 0) / scores.length : 0;
  const percentageSatisfaction = Math.trunc(averageSatisfaction * 100);
  const percentageSatisfactionPastMonth = 11.3;

  const averageTicket = 35;
  const percentageTicketPastMonth = 6.2;

  const averageTime = 1.51;
  const percentageTimePastMonth = -4.6;

  const monthSatisfactionChart = [
    {
      name: 'Enero',
      value: 0,
    },
    {
      name: 'Febrero',
      value: percentageSatisfaction,
    },
    {
      name: 'Marzo',
      value: 0,
    },
    {
      name: 'Abril',
      value: 0,
    },
    {
      name: 'Mayo',
      value: 0,
    },
    {
      name: 'Junio',
      value: 0,
    }
  ]

  const daySatisfactionChart = [
    {
      name: '09:00',
      value: percentageSatisfaction - 20,
    },
    {
      name: '10:00',
      value: percentageSatisfaction + 10,
    },
    {
      name: '11:00',
      value: percentageSatisfaction + 12,
    },
    {
      name: '12:00',
      value: percentageSatisfaction - 10,
    },
    {
      name: '13:00',
      value: percentageSatisfaction + 9,
    },
    {
      name: '14:00',
      value: percentageSatisfaction - 1,
    },
    {
      name: '1:00',
      value: percentageSatisfaction - 3,
    },
  ]

  const insightsTimeStart = 11;
  const insightsTimeEnd = 13;

  return { 
    percentageSatisfaction,
    percentageSatisfactionPastMonth,
    averageTicket,
    percentageTicketPastMonth,
    averageTime,
    percentageTimePastMonth,
    emotionalStateChart,
    monthSatisfactionChart,
    daySatisfactionChart,
    insightsTimeStart,
    insightsTimeEnd
  };
};