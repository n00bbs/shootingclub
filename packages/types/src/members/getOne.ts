export interface Department {
  id: string;
  name: string;
  joined: boolean;
  color: string;
}

export interface ResponsePayload {
  id: string;
  name: string;
  email: string;
  updateHash: string;
  departments: Department[];
}
