export interface Department {
  id: string;
  name: string;
  color: string;
}

export interface ResponsePayload {
  data: Department[];
}
