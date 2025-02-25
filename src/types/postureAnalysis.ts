import { ChartData } from "./chart";

export interface PostureMetrics {
  score: number;
  posture_straight: boolean;
  shoulders_level: boolean;
  arms_crossed: boolean;
  arms_open: boolean;
  body_centered: boolean;
  spine_angle: number;
}

export interface PostureAnalysisResponse {
  timestamp: string;
  num_people: number;
  analyses: PostureMetrics[];
}

export interface PostureAnalysisDashboard {
  percentageSatisfaction: number;
  percentageSatisfactionPastMonth: number;
  averageTicket: number;
  percentageTicketPastMonth: number;
  averageTime: number;
  percentageTimePastMonth: number;
  emotionalStateChart: ChartData[];
  monthSatisfactionChart: ChartData[];
  daySatisfactionChart: ChartData[];
  insightsTimeStart: number;
  insightsTimeEnd: number;
}