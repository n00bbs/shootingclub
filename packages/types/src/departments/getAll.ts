export interface Department {
  id: string;
  name: string;
  fee: number;
  color: string;
}

export interface ResponsePayload {
  data: Department[];
}
