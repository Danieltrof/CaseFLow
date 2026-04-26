export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  createdAt: string;
}

export interface CreateCustomerDto {
  name: string;
  email: string;
  phone: string;
  companyName: string;
}