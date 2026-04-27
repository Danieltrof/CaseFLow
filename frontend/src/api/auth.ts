import apiClient from "./apiClient";
import type { LoginDto, LoginResponse } from "../types/auth";

export const login = async (data: LoginDto): Promise<LoginResponse> => {
  const response = await apiClient.post("/auth/login", data);
  return response.data;
};