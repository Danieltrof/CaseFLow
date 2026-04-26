import apiClient from "./apiClient";
import type { Customer, CreateCustomerDto } from "../types/customer";

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await apiClient.get("/customers");
  return response.data;
};

export const createCustomer = async (data: CreateCustomerDto): Promise<Customer> => {
  const response = await apiClient.post("/customers", data);
  return response.data;
};