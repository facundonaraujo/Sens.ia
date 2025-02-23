export const getDashboard = async () => {
  const API_URL = "http://localhost:5000/api";
  const MOCK_URL = "/mocks/data.json";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error en la API");
    return processData(await response.json());
  } catch (error) {
    console.error(error);
    const mockResponse = await fetch(MOCK_URL);
    return processData(await mockResponse.json());
  }
};

const isHappy = (score) => score >= 0.7;
const isNeutral = (score) => score >= 0.4 && score < 0.7;
const isAngry = (score) => score < 0.4;

const processData = (jsonData) => {
  const scores = jsonData.data
    .map((item) => item.analyses?.[0]?.score)
    .filter((score) => typeof score === "number");
  
  console.log(scores);

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
      date: 'Enero',
      value: 0,
    },
    {
      date: 'Febrero',
      value: percentageSatisfaction,
    },
    {
      date: 'Marzo',
      value: 0,
    },
    {
      date: 'Abril',
      value: 0,
    },
    {
      date: 'Mayo',
      value: 0,
    },
    {
      date: 'Junio',
      value: 0,
    }
  ]

  const daySatisfactionChart = [
    {
      date: '09:00',
      value: percentageSatisfaction - 20,
    },
    {
      date: '10:00',
      value: percentageSatisfaction + 10,
    },
    {
      date: '11:00',
      value: percentageSatisfaction + 12,
    },
    {
      date: '12:00',
      value: percentageSatisfaction - 10,
    },
    {
      date: '13:00',
      value: percentageSatisfaction + 9,
    },
    {
      date: '14:00',
      value: percentageSatisfaction - 1,
    },
    {
      date: '1:00',
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
