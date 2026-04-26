import apiClient from "./apiClient";
import type { Case, CreateCaseDto } from "../types/case";

export const getCases = async (): Promise<Case[]> => {
  const response = await apiClient.get("/cases");
  return response.data;
};

export const createCase = async (data: CreateCaseDto): Promise<Case> => {
  const response = await apiClient.post("/cases", data);
  return response.data;
};

export const updateCaseStatus = async ({
  id,
  status,
}: {
  id: number;
  status: string;
}): Promise<void> => {
  await apiClient.patch(`/cases/${id}/status`, status, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};