export const fetchMockData = async () => {
  try {
    const response = await fetch("/mocks/data.json");
    const jsonData = await response.json();

    const pieChartData = jsonData.data.map((item, index) => ({
      name: `Análisis ${index + 1}`,
      value: item.analyses[0].score,
    }));

    const barChartData = jsonData.data.map((item) => ({
      name: new Date(item.timestamp).toLocaleTimeString(),
      spine_angle: item.analyses[0].spine_angle,
    }));

    return { pieChartData, barChartData };
  } catch (error) {
    console.error("Error cargando datos:", error);
    return { pieChartData: [], barChartData: [] };
  }
};

export const fetchData = async () => {
  const API_URL = "http://localhost:5000/api";
  const MOCK_URL = "/mocks/data.json";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error en la API");

    const jsonData = await response.json();
    console.log("Datos obtenidos desde la API");
    return processData(jsonData);
  } catch (error) {
    console.warn("Error al obtener datos de la API. Usando mock.", error);

    try {
      const mockResponse = await fetch(MOCK_URL);
      const mockData = await mockResponse.json();
      return processData(mockData);
    } catch (mockError) {
      console.error("Error al cargar datos mock:", mockError);
      return { pieChartData: [], barChartData: [] };
    }
  }
};

const processData = (jsonData) => {
  const pieChartData = jsonData.data.map((item, index) => ({
    name: `Análisis ${index + 1}`,
    value: item.analyses[0].score,
  }));

  const barChartData = jsonData.data.map((item) => ({
    name: new Date(item.timestamp).toLocaleTimeString(),
    spine_angle: item.analyses[0].spine_angle,
  }));

  

  return { pieChartData, barChartData };
};