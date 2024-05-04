export interface Department {
  id: string;
  name: string;
  color: string;
}
export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  departments: Department[];
}
export interface ResponsePayload {
  data: Member[];
}
