import httpClient from '@services/httpClient';
import type { PostureAnalysisResponse } from '@/types/postureAnalysis';

export const getPostureAnalysis = async (): Promise<PostureAnalysisResponse[]> => {
  const MOCK_URL = "/mocks/data.json";

  try {
    const response = await httpClient("/posture-analysis");

    return response.data;
  } catch (error) {
    console.error(error);
    const mock = await fetch(MOCK_URL);
    const response = await mock.json();

    return response.data;
  }
};