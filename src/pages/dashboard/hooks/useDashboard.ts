import { useQuery } from '@tanstack/react-query';
import { getPostureAnalysis } from '../services/dashboard.service';
import { dashboardAdapter } from '../adapters/dashboardAdapter';
import type { PostureAnalysisDashboard, PostureAnalysisResponse } from '@/types/postureAnalysis';

export const useDashboard = () => {
  const defaultDashboardData: PostureAnalysisDashboard = {
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
    insightsTimeEnd: 0,
  };

  const { data, isLoading, error, refetch } = useQuery<PostureAnalysisResponse[], Error>({
    queryKey: ['postureAnalysis'],
    queryFn: getPostureAnalysis,
    retry: false,
  });

  const adaptedData = data ? dashboardAdapter(data) : defaultDashboardData;

  return { data: adaptedData, loading: isLoading, error, refetch };
};