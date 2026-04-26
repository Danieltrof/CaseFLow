export interface Case {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
  dueDate?: string;
  customerId: number;
  customerName: string;
}

export interface CreateCaseDto {
  title: string;
  description: string;
  priority: string;
  dueDate?: string;
  customerId: number;
}