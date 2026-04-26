import apiClient from "./apiClient";
import type { DashboardSummary } from "../types/dashboard";

export const getDashboardSummary = async (): Promise<DashboardSummary> => {
  const response = await apiClient.get("/dashboard/summary");
  return response.data;
};