export interface Department {
  id: string;
  name: string;
  color: string;
}
export interface Member {
  id: string;
  name: string;
  departments: Department[];
}
export interface ResponsePayload {
  data: Member[];
}
